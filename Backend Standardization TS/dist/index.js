"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const DiagramNode_1 = __importDefault(require("./models/DiagramNode"));
const app = (0, express_1.default)();
const PORT = 3004;
app.use((0, cors_1.default)());
const upload = (0, multer_1.default)({ dest: 'uploads/' });
app.use(express_1.default.json());
app.post('/name', upload.none(), (req, res) => {
    res.send(req.body.name);
});
app.post('/upload_csv', upload.single('csv'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const filePath = req.file.path;
    const results = [];
    fs_1.default.createReadStream(filePath)
        .pipe((0, csv_parser_1.default)())
        .on('data', (data) => results.push(data))
        .on('end', () => {
        // Delete the uploaded file after parsing
        fs_1.default.unlinkSync(filePath);
        res.json(results);
    });
});
app.post('/lucid/convert', upload.single('csv'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const filePath = req.file.path;
    const results = [];
    fs_1.default.createReadStream(filePath)
        .pipe((0, csv_parser_1.default)())
        .on('data', (data) => results.push(data))
        .on('end', () => {
        // Delete the uploaded file after parsing
        fs_1.default.unlinkSync(filePath);
        res.json(new DiagramNode_1.default(results));
    });
});
app.post('/lucid', (req, res) => {
    res.send(new DiagramNode_1.default(req.body));
});
app.listen(PORT, () => {
    console.log(`Backend Standardization is running on port ${PORT}`);
});
