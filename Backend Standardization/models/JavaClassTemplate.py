from models import ClassNode, PropNode

class JavaClassTemplate:
  def __init__(
    self,
    class_name,
    fields,
    methods,
    constructor_params,
    constructor_fields,
  ):
    self.class_name = class_name
    self.fields = fields
    self.methods = methods
    self.constructor_params = constructor_params
    self.constructor_fields = constructor_fields
    self.codeStr = self.java_class_template()

  def java_class_template(self):
    return f'''
class {self.class_name} {{
  // Fields
  {self.fields}
  // Constructor
  public {self.class_name}({self.constructor_params}) {{
      {self.constructor_fields}
  }}

  // Methods
  {self.methods}
}}
  '''

def java_props_template(props):
  code_str = ''
  for prop in props:
    code_str += prop.codeStr+';\n  '
  return code_str
  
def java_methods_template(methods):
  code_str = ''
  for method in methods:
    code_str+= method.codeStr+'\n  '
  return code_str

def java_constructor_params(props):
  code_str = ''
  for prop in props:
    code_str += prop.dtype+' '+prop.name+', '
  return code_str

def java_constructor_fields(props):
  code_str = ''
  for prop in props:
    code_str += 'this.'+prop.name+' = '+prop.name+';\n      '
  return code_str

def classNodeConvertor(class_node: ClassNode.ClassNode):
  return JavaClassTemplate(
    class_name= class_node.name,
    fields= java_props_template(class_node.props),
    methods= java_methods_template(class_node.methods),
    constructor_params= java_constructor_params(class_node.props),
    constructor_fields= java_constructor_fields(class_node.props)
  )
  