import BoxModel from "../models/BoxModel/BoxModel"
import Dimension from "../models/BoxModel/Dimension"
import LTRB from "../models/BoxModel/LTRB"
import Design from "../models/Design/Design"
import { FigmaBox, FigmaDesign, FigmaLayout, FigmaNode, FigmaTypography} from "../types/FigmaApiTypes"
import IFactory from "./IFactory"
import AbsoluteLayout from "../models/Layout/AbsoluteLayout"
import Axis from "../models/Layout/Axis"
import Layout from "../models/Layout/Layout"
import LinearLayout from "../models/Layout/LinearLayout"
import Vector from "../models/Layout/Vector"
import BaseNode from "../models/Nodes/BaseNode"
import Border from "../models/Design/Border"
import LTRB_Edges from "../models/Design/LTRB_Edges"
import Shadow from "../models/Design/Shadow"
import { Blur } from "../models/Design/Blur"
import Typography from "../models/Typography/Typography"
import Font from "../models/Typography/Font"
import LineHeight from "../models/Typography/LineHeight"
import TextLayout from "../models/Layout/TextLayout"

export default class FigmaFactory implements IFactory {

  static NodeConstructor(node: FigmaNode) : BaseNode {
    let node_name = node.name;

    const type_substring_match = node_name.match(/#([a-zA-Z]+)/);
    const element_type = (
      type_substring_match 
      ? type_substring_match[0].replace(/#/g, '')
      : 'div'
    )  
    node_name =(
      type_substring_match && type_substring_match.index
      ? node_name.slice(0, type_substring_match.index) + node_name.slice(type_substring_match.index + type_substring_match[0].length)
      : node_name
    ) 

    const entity_substring_match = node_name.match(/\$([^\s]+)/);
    let data_entity = (
      entity_substring_match 
      ? entity_substring_match[0].replace(/#/g, '')
      : null
    )
    node_name =(
      entity_substring_match && entity_substring_match.index
      ? node_name.slice(0, entity_substring_match.index) + node_name.slice(entity_substring_match.index + entity_substring_match[0].length)
      : node_name
    )

    node_name = node_name.replace(/\s+/g, '')

    return new BaseNode(
      node.id,
      node_name,
      node.node_type,
      element_type,
      node.text_content,
      data_entity,
      this.ChildrenRecursion(node.children),
      this.BoxModelConstructor(node.box),
      this.layoutConstructor(node.layout),
      this.DesignConstructor(node.design),
      this.TypographyConstructor(node.typography)
    )
  }

  static ChildrenRecursion(children: any) {
    return children?.map((child: any) => this.NodeConstructor(child))
  }

  static layoutConstructor(node: FigmaLayout) : Layout  {
    const mode = (
      node.textAlignHorizontal ?
        'TEXT' :
      node.layoutMode == 'NONE' ?
        'ABSOLUTE' :
      'LINEAR'
    )

    const structure = (
      mode == "ABSOLUTE" ? 
        new AbsoluteLayout( new Vector(node.x, node.y) ) :
      mode == "LINEAR" ? 
        new LinearLayout(
           new Axis(
            node.layoutMode == "HORIZONTAL" ? "HORIZONTAL" : "VERTICAL",
            node.primaryAxisAlignItems,
            node.itemSpacing
          ),
          new Axis(
            node.layoutMode  == "HORIZONTAL" ? "VERTICAL" : "HORIZONTAL",
            node.counterAxisAlignItems,
            node.itemSpacing
          ), 
        ) :
      mode == 'TEXT' ?
        new TextLayout(
          node.textAlignHorizontal,
          node.textAlignVertical,
          node.letterSpacingValue,
          node.letterSpacingUnit
        ) :
      {}
    )
    return new Layout(mode, structure)
  }

  static BoxModelConstructor(node: FigmaBox) : BoxModel  {
    const primAxisMode = () => {
      if (node.primaryAxisSizingMode == "FIXED") {
          if (node.layoutMode == node.parentLayoutMode && node.parentNodeType == "FRAME"){
              if (node.layoutGrow == 1) {
                  return "STRETCH"
              } else {
                  return "FIXED"
              }
          } else if (node.layoutMode != node.parentLayoutMode && node.parentNodeType == "FRAME") {
              if (node.layoutAlign == "STRETCH") {
                  return "STRETCH"
              } else {
                  return "FIXED"
              }
          } else {
              return "FIXED"
          }
      } else {
        return "AUTO"
      }
    }
    const countAxisMode = () => {
        if (node.counterAxisSizingMode == "FIXED") {
            if (node.layoutMode != node.parentLayoutMode){
                if (node.layoutGrow == 1) {
                    return "STRETCH"
                } else {
                    return "FIXED"
                }
            } else {
                if (node.layoutAlign == "STRETCH") {
                    return "STRETCH"
                } else {
                    return "FIXED" 
                }
            }
        } else {
          return "AUTO"
        }
    }

    const widthMode = (
      node.layoutMode == "HORIZONTAL"
        ? primAxisMode() :
      node.layoutMode == "VERTICAL"
        ? countAxisMode()
      : "AUTO"
    )
    const widthUnit = (
      widthMode == "FIXED"
        ? "PIXEL" :
      widthMode == "STRETCH"
        ? "PERCENTAGE"
      : "NONE"
    )
    const heightMode = (
      node.layoutMode == "VERTICAL"
        ? primAxisMode() :
      node.layoutMode == "HORIZONTAL"
        ? countAxisMode()
      : "AUTO"
    )
    const heightUnit = (
      heightMode == "FIXED"
        ? "PIXEL" :
      heightMode == "STRETCH"
        ? "PERCENTAGE"
      : "NONE"
    )

    const width = new Dimension(
      node.width,
      widthMode,
      widthUnit
    )
    const height = new Dimension(
      node.height,
      heightMode,
      heightUnit
    )
    const padding = new LTRB(
      node.paddingLeft,
      node.paddingTop,
      node.paddingRight,
      node.paddingBottom
    )

    return new BoxModel(width,height,padding)
  }

  static DesignConstructor(node: FigmaDesign) : Design {

    return new Design(
      node.fills,
      new Border(
        node.strokeWeight,
        node.strokes,
        new LTRB_Edges(
          node.topLeftRadius,
          node.topRightRadius,
          node.bottomRightRadius,
          node.bottomLeftRadius
        )
      ),
      node.effects.filter(effect_node => effect_node.type == 'DROPSHADOW' || effect_node.type ==  'INNERSHADOW')  as Shadow[],
      node.effects.filter(effect_node => effect_node.type == 'LAYER_BLUR' || effect_node.type ==  'BACKGROUND_BLUR')  as Blur[],
    )
  }

  static TypographyConstructor(node: FigmaTypography) {
  
    if (Object.keys(node).length > 0) {
      return new Typography(
        new Font(
          node.fontFamily,
          node.isItalic ? 'ITALIC' : 'NORMAL',
          (
            node.fontStyle ? 
              node.fontStyle.includes('Thin') || node.fontStyle.includes('Hairline') ? 100 :
              node.fontStyle.includes('ExtraLight') || node.fontStyle.includes('UltraLight') ? 200 :
              node.fontStyle.includes('Light') ? 300 :
              node.fontStyle.includes('Normal') || node.fontStyle.includes('Regular') ? 400 :
              node.fontStyle.includes('Medium') ? 500 :
              node.fontStyle.includes('SemiBold') || node.fontStyle.includes('DemiBold') ? 600 :
              node.fontStyle.includes('Bold') ? 700 :
              node.fontStyle.includes('ExtraBold') || node.fontStyle.includes('UltraBold') ? 800 :
              node.fontStyle.includes('Black') || node.fontStyle.includes('Heavy') ? 900 : 
              node.fontStyle.includes('ExtraBlack') || node.fontStyle.includes('UltraBlack') ? 950 
              : 400
            : 400
          ),
          node.fontSize,
          (
            node.textCase == 'LOWER' ?
              'LOWER' :
            node.textCase == 'UPPER' ?
              'UPPER' :
            node.textCase == 'TITLE' ?
              'TITLE' :
            'NORMAL'
          )
        ),
        (
          node.textDecoration == 'UNDERLINE' ?
            'UNDERLINE' :
          node.textDecoration == 'STRIKETHROUGH' ?
            'MIDDLELINE' :
          'NONE'
        ),
        new LineHeight(
          node.lineHeightValue,
          (
            node.lineHeightUnit == "PERCENT" ?
              'PERCENTAGE' :
            'PIXEL'
          )
        ),
        node.paragraphIndent
      )
    } else return null
  }
    
}