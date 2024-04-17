import { NodeType } from "../../types/types";
import BoxModel from "../BoxModel/BoxModel";
import Design from "../Design/Design";
import Layout from "../Layout/Layout";
import Typography from "../Typography/Typography";
export default class BaseNode {
    readonly id: string;
    readonly name: string;
    readonly node_type: NodeType;
    readonly element_type: string;
    readonly data_entity: string | null;
    readonly text_content: string;
    readonly box: BoxModel;
    readonly layout: Layout;
    readonly design: Design;
    readonly typography: Typography | null;
    readonly children: Array<BaseNode>;
    constructor(id: string, name: string, node_type: NodeType, element_type: string, text_content: string, data_entity: string | null, children: Array<BaseNode>, box: BoxModel, layout: Layout, design: Design, typography: Typography | null);
}
