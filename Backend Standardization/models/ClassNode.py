from models import LucidCSV, PropNode, MethodNode

class ClassNode:
  def __init__(
    self,
    name,
    props,
    methods,
  ):
    self.name = name
    self.props = props
    self.methods = methods

  def csvConvertor(classCsv: LucidCSV.ClassCSV):
    return ClassNode(
      name= classCsv.text_area1,
      props= PropNode.lucidRegexSlicer(classCsv.text_area2),
      methods= MethodNode.lucidRegexSlicer(classCsv.text_area3)
    )