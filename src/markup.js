import * as f from 'f'
import alternate from './alternate'
import author from './author'
import base from './base'
import canonical from './canonical'
import charset from './charset'
import description from './description'
import icon from './icon'
import robots from './robots'
import themeColor from './themeColor'
import title from './title'

export default f.idle(f.chain(alternate, author, base, canonical, charset, description, icon, robots, themeColor, title))
