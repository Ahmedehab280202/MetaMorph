import { Blur } from "../models/Design/Blur";
import Shadow from "../models/Design/Shadow";
import { Paint } from "./types";
export type FrameNode = {
    x: number;
    y: number;
    layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN';
    counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN';
    itemSpacing: number;
};
export type FrameLayout = {
    x: number;
    y: number;
    layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN';
    counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN';
    itemSpacing: number;
};
export type FrameBox = {
    width: number;
    height: number;
    parentLayoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    parentNodeType: 'NONE' | 'FRAME';
    layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    layoutGrow: 0 | 1;
    layoutAlign: 'STRETCH' | 'INHERIT';
    primaryAxisSizingMode: 'FIXED' | 'AUTO';
    counterAxisSizingMode: 'FIXED' | 'AUTO';
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
};
export type FrameDesign = {
    fills: ReadonlyArray<Paint>;
    strokes: ReadonlyArray<Paint>;
    effects: ReadonlyArray<Shadow | Blur>;
    strokeWeight: number;
    topLeftRadius: number;
    topRightRadius: number;
    bottomRightRadius: number;
    bottomLeftRadius: number;
};
