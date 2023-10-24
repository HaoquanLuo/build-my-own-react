import { Container, Fiber, EL } from 'Didact'

function render(element: EL, container: Container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
  }

  nextUnitOfWork = wipRoot
}

let wipRoot: Fiber
let nextUnitOfWork: Fiber

export { render }
