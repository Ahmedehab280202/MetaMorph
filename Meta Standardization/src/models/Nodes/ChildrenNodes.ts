import BaseNode from "./BaseNode"

export default class ChildrenNodes {
  readonly list : Array<BaseNode>

  constructor(list : Array<BaseNode>){
    this.list = list
  }
}