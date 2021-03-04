import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => render(h("meta", { name: 'description', content: f.or(schema.description, '') }));
