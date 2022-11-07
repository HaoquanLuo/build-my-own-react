// import Didact from 'Didact'
import Didact from './src'

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

console.log('hello Didact')

const container = document.getElementById('root')
Didact.render(element, container as HTMLElement)
