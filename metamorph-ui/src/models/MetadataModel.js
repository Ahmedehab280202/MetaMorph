export class RawDataModel {
    constructor(projectName, figmaToken, fileUrl, rawUiData, jsonData) {
        this.projectName = projectName;
        this.figmaToken = figmaToken;
        this.fileUrl = fileUrl;
        this.rawUiData = rawUiData;
        this.jsonData = jsonData;
    }
}