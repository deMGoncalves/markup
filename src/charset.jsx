import h from 'h'
import * as f from 'f'
import render from './render'

export default (page) =>
  render(<meta charset={f.or(page.charset, 'UTF-8')} />)
