import express from 'express';
import { Request, Response } from 'express';
import BaseNode from 'meta-standardization/src/models/Nodes/BaseNode'
import HtmlFactory from './factories/HtmlFactory';
import HtmlNode from './models/HtmlNode';
import HtmlTree from './models/HtmlTree';
import CssNode from './models/CssNode';

const app = express();
const port = 3001;

app.use(express.json());

app.get('', (req,res) => {
  res.send(req.body)
})

app.post('/html', (req, res) => {
  const body: BaseNode = req.body
  const html_node: HtmlNode = HtmlFactory.BaseNodeConvertor(body)
  const html_tree: HtmlTree = new HtmlTree(html_node)

  res.send(html_tree.code);
});

app.post('/css', (req,res) => {
  const body: BaseNode = req.body
  const css_node: CssNode = new CssNode(body)
  res.send(css_node.toString())
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
