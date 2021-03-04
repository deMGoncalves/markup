import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => render(h("link", { href: f.or(schema.canonical, location.href), rel: 'canonical' }));