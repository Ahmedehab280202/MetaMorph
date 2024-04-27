export default class RelationshipNode {
    type: 'Association' | 'Aggregation' | 'Composition';
    class_name: String;
    constructor(type: 'Association' | 'Aggregation' | 'Composition', class_name: String);
}
