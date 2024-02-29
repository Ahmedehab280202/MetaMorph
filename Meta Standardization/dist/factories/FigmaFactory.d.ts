import BoxModel from "../models/BoxModel/BoxModel";
import Design from "../models/Design/Design";
import { FrameBox, FrameDesign, FrameLayout } from "../types/FrameNode";
import IFactory from "./IFactory";
import Layout from "../models/Layout/Layout";
import BaseNode from "../models/Nodes/BaseNode";
export default class FigmaFactory implements IFactory {
    static NodeConstructor(node: any): BaseNode;
    static ChildrenRecursion(children: any): any;
    static layoutConstructor(node: FrameLayout): Layout;
    static BoxModelConstructor(node: FrameBox): BoxModel;
    static DesignConstructor(node: FrameDesign): Design;
}
