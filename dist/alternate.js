import h from 'h';
import render from "./render";
export default () => render(h("link", { rel: 'alternate', href: location.href, hrefLang: 'x-default' }));
