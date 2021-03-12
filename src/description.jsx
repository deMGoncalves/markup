import h from 'h'
import * as f from 'f'
import render from './render'

export default (page) =>
  render(<meta name='description' content={f.or(page.description, '')} />)
