import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  render(<meta name='robots' content={f.or(schema.robots, 'index, follow')} />)
