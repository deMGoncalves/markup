import h from 'h';
import * as f from 'f';
import render from "./render";
import settings from "./settings";
export default (page) => render(h("script", { "data-ad-client": f.or(page.adClient, settings.adClient, ''), src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true }));
