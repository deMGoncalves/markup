import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => render(h("meta", { charset: f.or(schema.charset, 'UTF-8') }));
