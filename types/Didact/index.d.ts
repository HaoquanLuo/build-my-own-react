/**
 * @todo 完善全局模块可被识别
 */
export = Didact

export as namespace Didact

declare namespace Didact {
  function createElement(
    type: string,
    props: ElementProps,
    ...children: EL[]
  ): NodeElement

  function createDom(element: NodeElement): void

  function render(element: NodeElement, container: Container): void

  type ElementProps<T> = {
    [key: string]: any
    id?: string
    children?: Array<T>
    nodeValue?: string
  }

  type EL = TextElement | NodeElement

  interface TextElement {
    type: 'TEXT_ELEMENT'
    props: ElementProps
  }

  interface NodeElement {
    type: keyof HTMLElementTagNameMap
    props: ElementProps
  }

  type Container = HTMLElement | Text

  interface Fiber {
    [key: any]: any
    type?: keyof HTMLElementTagNameMap | 'TEXT_ELEMENT'
    props?: ElementProps<Fiber>
    dom?: any
    parent?: Fiber
    child?: Fiber
    sibling?: Fiber
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
