import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import RelationshipNode from "metamorph-lib/Backend Standardization TS/dist/models/RelationshipNode";

export default class ModelProp{
    public dtype: String;
    public name: String;
    public modifier: String;
    public default_val:String;
    public isEntity: Boolean

    constructor(prop_node:PropNode, relationships: RelationshipNode[]){
        this.dtype=prop_node.dtype;
        this.name=prop_node.name;
        this.modifier=(
            prop_node.modifier == "+"
            ? "public"
            : "private"
        );
        this.default_val=prop_node.default_val;
        this.isEntity= relationships.some(rel_node => this.dtype.includes(rel_node.class_name as string))
    }
    toString(){
        return ([
            `${this.isEntity ? '@JdbcTypeCode(SqlTypes.JSON)' : ''}`,
            `${this.modifier} ${this.dtype} ${this.name};\n`
        ].join('\n    '))
    }
}