import express from 'express';
import { Request, Response } from 'express';
import BaseNode from 'metamorph-lib/Meta Standardization/dist/models/Nodes/BaseNode'
import HtmlFactory from './factories/HtmlFactory';
import HtmlNode from './models/HtmlNode';
import HtmlTree from './models/HtmlTree';
import CssNode from './models/CssNode';
import bodyParser from 'body-parser';

const app = express();
const port = 3005;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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
  const css_node: CssNode = new CssNode(body, false)

  res.send(css_node.toString())
})

app.post('/project', (req,res) => {
  const nodes: BaseNode[] = req.body

  const response_body = nodes.map(node => ({
    "name": node.name,
    "html": new HtmlTree(HtmlFactory.BaseNodeConvertor(node)).code,
    "css": new CssNode(node, false).toString()
  }))

  res.send(response_body)
})

app.listen(port, () => {
  console.log(`Html-Css Generator running at http://localhost:${port}`);
});
