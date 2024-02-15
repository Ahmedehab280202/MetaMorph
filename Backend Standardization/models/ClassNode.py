from models.PropNode import PropNode
from models.MethodNode import MethodNode
import pandas as pd
from dataclasses import dataclass
@dataclass
class ClassNode:
  id: str
  name: str
  prop_nodes: list
  method_nodes: list

  def __init__(self,series: pd.Series):
    self.id = series['Id']
    self.name = series['Text Area 1']
    self.prop_nodes = PropNode.lucidRegexSlicer(input_string=  series['Text Area 2'])
    self.method_nodes = MethodNode.lucidRegexSlicer(input_string= series['Text Area 3'])