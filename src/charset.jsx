import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  render(<meta charset={f.or(schema.charset, 'UTF-8')} />)
