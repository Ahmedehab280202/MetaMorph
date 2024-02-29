import BoxModel from "../models/BoxModel/BoxModel";
import Design from "../models/Design/Design";
import { FigmaBox, FigmaDesign, FigmaLayout, FigmaNode, FigmaTypography } from "../types/FigmaApiTypes";
import IFactory from "./IFactory";
import Layout from "../models/Layout/Layout";
import BaseNode from "../models/Nodes/BaseNode";
import Typography from "../models/Typography/Typography";
export default class FigmaFactory implements IFactory {
    static NodeConstructor(node: FigmaNode): BaseNode;
    static ChildrenRecursion(children: any): any;
    static layoutConstructor(node: FigmaLayout): Layout;
    static BoxModelConstructor(node: FigmaBox): BoxModel;
    static DesignConstructor(node: FigmaDesign): Design;
    static TypographyConstructor(node: FigmaTypography): Typography | null;
}
