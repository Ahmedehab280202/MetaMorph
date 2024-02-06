class ClassCSV:
  def __init__(
    self, 
    id, 
    name,
    text_area1, 
    text_area2,
    text_area3 
  ):
    self.id = id
    self.name = name
    self.text_area1 = text_area1
    self.text_area2 = text_area2
    self.text_area3 = text_area3

  def seriesConvertor(self):
    return ClassCSV(
      id=self['Id'],
      name=self['Name'],
      text_area1=self['Text Area 1'],
      text_area2=self['Text Area 2'],
      text_area3=self['Text Area 3'],
    )
