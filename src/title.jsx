import h from 'h'
import * as f from 'f'
import render from './render'

export default (page) =>
  render(<title>{f.or(page.title, '')}</title>)
