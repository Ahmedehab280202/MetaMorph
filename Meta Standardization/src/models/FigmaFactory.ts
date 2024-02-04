import BoxModel from "./BoxModel/BoxModel"
import Dimension from "./BoxModel/Dimension"
import LTRB from "./BoxModel/LTRB"
import Design from "./Design/Design"
import { FrameBox, FrameDesign, FrameLayout, FrameNode } from "./FrameNode"
import IFactory from "./IFactory"
import AbsoluteLayout from "./Layout/AbsoluteLayout"
import Axis from "./Layout/Axis"
import Layout from "./Layout/Layout"
import LinearLayout from "./Layout/LinearLayout"
import Vector from "./Layout/Vector"

export default class FigmaFactory implements IFactory {

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
    
  }
}