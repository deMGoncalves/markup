import h from 'h'
import render from './render'

export default () =>
  render(<link rel='alternate' href={`${location.href}/pt-BR`} hrefLang='x-default' />)
