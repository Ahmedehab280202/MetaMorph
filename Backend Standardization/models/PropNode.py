import re

from dataclasses import dataclass
@dataclass
class PropNode:
  name: str
  modifier: str
  dtype: str
  defaultVal: str

  def __init__(
    self,
    name,
    modifier,
    dtype,
    defaultVal,
  ):
    self.name = name
    self.modifier = modifier
    self.dtype = dtype
    self.defaultVal = defaultVal
    self.codeStr = self.javaToString()

  def javaToString(self):
     conditionalDefVal = f"= {self.defaultVal}" if self.defaultVal != None else ''

     return(f"{self.modifier} {self.dtype} {self.name} {conditionalDefVal}")

  @staticmethod
  def lucidRegexSlicer(input_string):
    input_string= str(input_string)
    pattern = re.compile(r'(?:[\u200b\n])(.*?)(?=\n|$)')
    matches = pattern.findall(input_string)
    nodeList = []
    for match in matches:
      nodeList.append(PropNode.lucidRegexConvertor(match))
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
    attribute_name = name_match.group(1) if name_match else None

    
    type_pattern = re.compile(r':\s*([^=\s]+)')
    type_match = type_pattern.search(input_string)
    attribute_type = type_match.group(1) if type_match else None

    value_pattern = re.compile(r'=\s*([^=\s]+)')
    value_match = value_pattern.search(input_string)
    attribute_value = value_match.group(1) if value_match else None
    return PropNode(
      modifier= modifier_symbol,
      name= attribute_name,
      dtype= attribute_type,
      defaultVal= attribute_value
    )