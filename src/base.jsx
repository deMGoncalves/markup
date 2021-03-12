import h from 'h'
import * as f from 'f'
import render from './render'

export default (page) =>
  render(<base href={f.or(page.base, '/')} />)
