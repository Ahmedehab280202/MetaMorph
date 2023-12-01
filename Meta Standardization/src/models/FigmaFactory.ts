import IFactory from "./IFactory"
import AbsoluteLayout from "./Layout/AbsoluteLayout"
import Axis from "./Layout/Axis"
import Layout from "./Layout/Layout"
import LinearLayout from "./Layout/LinearLayout"
import Vector from "./Layout/Vector"
import { FrameNode } from "./types"

export default class FigmaFactory implements IFactory {

  static layoutConstructor(node: FrameNode) : Layout  {
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
}