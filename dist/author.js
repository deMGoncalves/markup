import h from 'h';
import * as f from 'f';
import render from "./render";
export default (page) => render(h("meta", { name: 'author', content: f.or(page.author, '') }));
