import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  render(<meta name='theme-color' content={f.or(schema.themeColor, '#E55747')} />)
