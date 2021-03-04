import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  render(<base href={f.or(schema.base, '/')} />)
