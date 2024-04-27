export default class RelationshipNode{
  public type: 'Association' | 'Aggregation' | 'Composition'
  public class_name: String

  constructor(type: 'Association' | 'Aggregation' | 'Composition', class_name: String) {
    this.type = type
    this.class_name = class_name
  }
}