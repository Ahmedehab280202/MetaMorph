import re

from dataclasses import dataclass
@dataclass
class MethodNode:
  name: str
  modifier: str
  dtype: str
  params: str

  def __init__(
    self,
    name,
    modifier,
    dtype,
    params
  ):
    self.name = name
    self.modifier = modifier
    self.dtype = dtype
    self.params = params
    ''' self.codeStr = self.javaToString() '''
  
  ''' def javaToString(self):
    return(f"{self.modifier} {self.dtype} {self.name}({self.params}) {{\n    // method body\n  }}") '''

  @staticmethod
  def lucidRegexSlicer(input_string):
    input_string= str(input_string)
    pattern = re.compile(r'(?:[\u200b\n])(.*?)(?=\n|$)')
    matches = pattern.findall(input_string)
    nodeList = []
    for match in matches:
      nodeList.append(MethodNode.lucidRegexConvertor(match))
    return nodeList

  @staticmethod
  def lucidRegexConvertor(input_string):
    input_string= str(input_string)
    modifier_pattern = re.compile(r'^\s*([-+])')
    modifier_match = modifier_pattern.search(input_string)
    modifier_symbol = modifier_match.group(1) if modifier_match else 'None'
    modifier_symbol = 'public' if  modifier_symbol == '+' else 'private'

    name_pattern = re.compile(r'\b(\w+)\b')
    name_match = name_pattern.search(input_string)
    method_name = name_match.group(1) if name_match else None

    type_pattern = re.compile(r':\s*([^=\s]+)')
    type_match = type_pattern.search(input_string)
    method_type = type_match.group(1) if type_match else 'void'

    params_pattern = re.compile(r'\((.*?)\)')
    params_match = params_pattern.search(input_string)
    method_params = params_match.group(1) if params_match else ''
    
    return MethodNode(
      modifier= modifier_symbol,
      name= method_name,
      dtype= method_type,
      params= method_params
    )