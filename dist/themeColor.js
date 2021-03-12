import h from 'h';
import * as f from 'f';
import render from "./render";
export default (page) => render(h("meta", { name: 'theme-color', content: f.or(page.themeColor, '') }));
