"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const FigmaFactory_1 = __importDefault(require("./factories/FigmaFactory"));
const app = (0, express_1.default)();
const port = 3000;
/* app.use(express.json()); */
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(JSON.stringify('Hello from Meta'));
});
app.post('/figma', (req, res) => {
    const node = req.body;
    res.send(FigmaFactory_1.default.NodeConstructor(node));
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
