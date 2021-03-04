import h from 'h';
import * as f from 'f';
import render from "./render";
export default (schema) => f.forEach(['icon', 'shortcut', 'apple-touch-icon'], rel => render(h("link", { href: f.or(schema.icon, '/favicon.ico'), rel: rel, type: 'image/png' })));
