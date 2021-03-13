import h from 'h'
import * as f from 'f'
import render from './render'
import settings from './settings'

export default (page) =>
  render(<meta name='author' content={f.or(page.author, settings.author, '')} />)
