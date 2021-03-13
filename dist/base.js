import h from 'h';
import * as f from 'f';
import render from "./render";
import settings from "./settings";
export default (page) => render(h("base", { href: f.or(page.base, settings.base, '/') }));
