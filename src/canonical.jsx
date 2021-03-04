import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  render(<link href={f.or(schema.canonical, location.href)} rel='canonical' />)
