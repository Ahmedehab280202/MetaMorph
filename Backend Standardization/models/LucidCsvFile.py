import pandas as pd
from dataclasses import dataclass
from models.ClassNode import ClassNode
import json

@dataclass
class LucidCsvFile:
  class_nodes: list

  def __init__(self,df: pd.DataFrame):
    self.class_nodes = self.classNodesConstructor(df[df['Name'] == 'Class'])

  def classNodesConstructor(self,class_df):
    node_list = []
    for index, row in class_df.iterrows():
      node_list.append(ClassNode(row))
    return node_list

  def to_json(self):
    return {
      "diagram_name": "diagram_name",
      "class_nodes": self.class_nodes
    }
  
  def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)
