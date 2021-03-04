import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => render(h("title", null, f.or(schema.title, 'title')));
