import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import RelationshipNode from "metamorph-lib/Backend Standardization TS/dist/models/RelationshipNode";

export default class ModelConstructor{
    public name: String;
    public prop_nodes: PropNode[]
    public parent_props: PropNode[] | []
    public relationships: RelationshipNode[]

    constructor(name: String, relationships: RelationshipNode[], prop_nodes: PropNode[], parent_props: PropNode[] | undefined){
        this.name=name;
        this.relationships=relationships;
        this.prop_nodes=prop_nodes;
        this.parent_props=(
          parent_props
          ? parent_props
          : []
        );
    }
    toString(){
        let associations = this.relationships
          .filter(rel => rel.type == 'Association')
          .map(rel => rel.class_name)

        let aggregations = this.relationships
          .filter(rel => rel.type == 'Aggregation')
          .map(rel => rel.class_name)

        let compositions = this.relationships
          .filter(rel => rel.type == 'Composition')
          .map(rel => rel.class_name)

        /* let associations: String[] = this.relationships
          .map(rel => "Association" in rel ? rel["Association"] : undefined)
          .filter(value => value !== undefined);
        let aggregations = this.relationships
          .map(rel => "Aggregation" in rel ? rel["Aggregation"] : undefined)
          .filter(value => value !== undefined);
        let compositions = this.relationships
          .map(rel => "Composition" in rel ? rel["Composition"] : undefined)
          .filter(value => value !== undefined); */

          this.prop_nodes = this.prop_nodes.filter(prop => !associations.some(assoc_str => prop.dtype.includes(assoc_str as string)))
          console.log(this.prop_nodes);

        return (
          [
            `    public ${this.name}() {`,
            `    }`
          ].join('\n')
          +
          (
            this.prop_nodes.length != 0 ?
            [
              `    public ${this.name}(${this.prop_nodes.concat(this.parent_props).map(prop => `${prop.dtype} ${prop.name}`).join(', ')}) {`,
              `      ${this.parent_props.length != 0 ? `super(${this.parent_props.map(prop => `${prop.name}`).join(',')})` : ''}`,
              `      ${this.prop_nodes.map(prop => `this.${prop.name} = ${prop.name}`).join('\n      ')}`,
              `    }`
            ].join('\n')
            : ''
          )
        )
    }
}