import h from 'h'
import * as f from 'f'
import render from './render'

export default (schema) =>
  render(<title>{f.or(schema.title, '')}</title>)
