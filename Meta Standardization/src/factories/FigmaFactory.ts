import BoxModel from "../models/BoxModel/BoxModel"
import Dimension from "../models/BoxModel/Dimension"
import LTRB from "../models/BoxModel/LTRB"
import Design from "../models/Design/Design"
import { FrameBox, FrameDesign, FrameLayout, FrameNode } from "../types/FrameNode"
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

export default class FigmaFactory implements IFactory {

  static NodeConstructor(node: any) : BaseNode {
    let node_name = node.name;

    const type_substring_match = node_name.match(/#([a-zA-Z]+)/);
    const element_type = (
      type_substring_match 
      ? type_substring_match[0] 
      : 'div'
    )  
    node_name =(
      type_substring_match
      ? node_name.slice(0, type_substring_match.index) + node_name.slice(type_substring_match.index + type_substring_match[0].length)
      : node_name
    ) 

    const entity_substring_match = node_name.match(/\$([^\s]+)/);
    const data_entity = (
      entity_substring_match 
      ? entity_substring_match[0] 
      : null
    )
    node_name =(
      entity_substring_match 
      ? node_name.slice(0, entity_substring_match.index) + node_name.slice(entity_substring_match.index + entity_substring_match[0].length)
      : node_name
    )

    node_name = node_name.replace(/\s+/g, '')

    return new BaseNode(
      node.id,
      node_name,
      element_type,
      data_entity,
      this.ChildrenRecursion(node.children),
      this.BoxModelConstructor(node.box),
      this.layoutConstructor(node.layout),
      this.DesignConstructor(node.design)
    )
  }
  
  static  extractTypeSubstring(input: string): string {
    const regex = /#([a-zA-Z]+)/; 
    const match = input.match(regex);
    return match ? match[0] : 'div'; 
  }

  static ChildrenRecursion(children: any) {
    return children?.map((child: any) => this.NodeConstructor(child))
  }

  static layoutConstructor(node: FrameLayout) : Layout  {
    const mode = node.layoutMode == "NONE" ? 'ABSOLUTE' : 'LINEAR'
    const structure = (
      mode == "ABSOLUTE"
        ? new AbsoluteLayout( new Vector(node.x, node.y) ) :
      mode == "LINEAR"
        ? new LinearLayout(
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
      {}
    )
    return new Layout(mode, structure)
  }

  static BoxModelConstructor(node: FrameBox) : BoxModel  {
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

  static DesignConstructor(node: FrameDesign) : Design {

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
}