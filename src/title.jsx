import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  render(<title>{f.or(schema.title, 'title')}</title>)
