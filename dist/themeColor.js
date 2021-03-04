import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => render(h("meta", { name: 'theme-color', content: f.or(schema.themeColor, '#E55747') }));