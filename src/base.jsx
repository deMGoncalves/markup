import h from 'h'
import * as f from 'f'
import render from './render'

export default (schema) =>
  render(<base href={f.or(schema.base, '/')} />)
