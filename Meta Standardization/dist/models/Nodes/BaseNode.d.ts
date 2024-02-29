import { ElementType } from "../../types/types";
import BoxModel from "../BoxModel/BoxModel";
import Design from "../Design/Design";
import Layout from "../Layout/Layout";
export default class BaseNode {
    readonly id: string;
    readonly name: string;
    readonly element_type: ElementType;
    readonly data_entity: string | null;
    readonly children: Array<BaseNode>;
    readonly box: BoxModel;
    readonly layout: Layout;
    readonly design: Design;
    constructor(id: string, name: string, element_type: ElementType, data_entity: string | null, children: Array<BaseNode>, box: BoxModel, layout: Layout, design: Design);
}
