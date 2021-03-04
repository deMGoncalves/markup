import h from '@start/h'
import * as f from '@start/f'
import render from './render'

export default (schema) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(<link href={f.or(schema.icon, '/favicon.ico')} rel={rel} type='image/png' />)
  )
