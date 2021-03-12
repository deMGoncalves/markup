import h from 'h'
import * as f from 'f'
import render from './render'

export default (page) =>
  render(<link href={f.or(page.canonical, location.href)} rel='canonical' />)
