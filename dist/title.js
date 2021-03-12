import h from 'h';
import * as f from 'f';
import render from "./render";
export default (page) => render(h("title", null, f.or(page.title, '')));
