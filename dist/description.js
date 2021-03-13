import h from 'h';
import * as f from 'f';
import render from "./render";
import settings from "./settings";
export default (page) => render(h("meta", { name: 'description', content: f.or(page.description, settings.description, '') }));
