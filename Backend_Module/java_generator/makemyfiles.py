from .controller_handler.controller_generator import Controller_Generator
from .model_handler.model_generator import Model_Generator
from .repository_handler.repository_generator import Repository_Generator
from .services_handler.services_generator import Services_Generator


class MakeMyFiles:
    def __init__(self, diagramclass):
        self.diagramclass = diagramclass

    def makemyfiles(self, diagramclass):
        Controller_Generator(self.diagramclass).generatefile(self.diagramclass)
        Model_Generator(self.diagramclass).generatefile(self.diagramclass)
        Repository_Generator(self.diagramclass).generatefile(self.diagramclass)
        Services_Generator(self.diagramclass).generatefile(self.diagramclass)
