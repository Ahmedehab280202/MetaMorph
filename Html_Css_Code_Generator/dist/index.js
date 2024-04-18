"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HtmlFactory_1 = __importDefault(require("./factories/HtmlFactory"));
const HtmlTree_1 = __importDefault(require("./models/HtmlTree"));
const CssNode_1 = __importDefault(require("./models/CssNode"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.get('', (req, res) => {
    res.send(req.body);
});
app.post('/html', (req, res) => {
    const body = req.body;
    const html_node = HtmlFactory_1.default.BaseNodeConvertor(body);
    const html_tree = new HtmlTree_1.default(html_node);
    res.send(html_tree.code);
});
app.post('/css', (req, res) => {
    const body = req.body;
    const css_node = new CssNode_1.default(body);
    res.send(css_node.toString());
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
