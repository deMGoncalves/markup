import h from 'h';
import * as f from 'f';
import render from "./render";
import settings from "./settings";
export default (page) => render(h("meta", { name: 'theme-color', content: f.or(page.themeColor, settings.themeColor, '') }));
