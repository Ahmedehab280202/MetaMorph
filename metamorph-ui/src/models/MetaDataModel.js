export class RawDataModel {
    constructor(projectName, figmaToken, fileUrl, raw_ui_data, raw_uml_data) {
        this.projectName = projectName;
        this.figmaToken = figmaToken;
        this.fileUrl = fileUrl;
        this.raw_ui_data = raw_ui_data;
        this.raw_uml_data = raw_uml_data;
    }
}