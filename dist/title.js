import h from 'h';
import * as f from 'f';
import render from "./render";
import settings from "./settings";
export default (page) => render(h("title", null, f.or(page.title, settings.title, '')));
