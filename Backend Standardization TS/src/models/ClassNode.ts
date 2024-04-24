import MethodNode from "./MethodNode"
import PropNode from "./PropNode"
import { LucidCsv } from "./types"

export default class ClassNode {
  readonly id: String
  readonly type: String
  readonly name: String
  readonly prop_nodes: PropNode[]
  readonly method_nodes: MethodNode[]
  public relashionships: Object[]

  constructor(lucid_node: LucidCsv) {
    this.id = lucid_node.Id
    this.type = (
      lucid_node["Text Area 1"].includes("<<Interface>>")
      ? "Interface"
      : lucid_node["Name"]
    )
    this.name = (
      this.type == "Interface"
      ? lucid_node["Text Area 1"].replace("<<Interface>>", "").trim()
      : lucid_node["Text Area 1"].trim()
    )
    this.prop_nodes = (
      this.newLineSlicer(lucid_node["Text Area 2"])
        .map(prop_string => new PropNode(prop_string))
    )
    this.method_nodes = (
      this.newLineSlicer(lucid_node["Text Area 3"])
        .map(method_string => new MethodNode(method_string))
    )
    this.relashionships = []
  }

  newLineSlicer(inputString: String): String[] {
    const pattern = /(?:[\u200b\n])(.*?)(?=\n|$)/g;
    const matches = inputString.match(pattern) || [];
    return matches;
  }
}