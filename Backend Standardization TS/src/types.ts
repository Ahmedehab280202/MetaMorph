type LucidCsv = {
  'Id': String,
  'Name': String,
  'Shape Library': String,
  'Page ID': String,
  'Contained By': String,
  'Group': String,
  'Status': String,
  'Line Source': String,
  'Line Destination': String,
  'Source Arrow': String,
  'Destination Arrow': String,
  'Text Area 1': String,
  'Text Area 2': String,
  'Text Area 3': String,
  'Comments': String,
}

type AccessModifier = 'public' | 'private'
type NodeType = 'class' | 'interface'
type NodeExtension = 'extends' | 'implements'

export{
  LucidCsv,
  AccessModifier,
  NodeType,
  NodeExtension
}