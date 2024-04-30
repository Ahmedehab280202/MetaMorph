export class RawDataModel {
    constructor(projectName, figmaToken, fileUrl, rawUiData, rawUmlData) {
        this.projectName = projectName;
        this.figmaToken = figmaToken;
        this.fileUrl = fileUrl;
        this.rawUiData = rawUiData;
        this.rawUmlData = rawUmlData;
    }
}