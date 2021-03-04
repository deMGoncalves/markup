import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => render(h("meta", { name: 'author', content: f.or(schema.author, '') }));
