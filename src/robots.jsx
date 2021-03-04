import h from 'h'
import * as f from 'f'
import render from './render'

export default (schema) =>
  render(<meta name='robots' content={f.or(schema.robots, 'index, follow')} />)
