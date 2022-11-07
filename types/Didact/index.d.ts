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

  function render(element: NodeElement, container: Container): void

  type ElementProps = {
    [key: string]: any
    id?: string
    children?: EL[]
    nodeValue?: string
  }

  type EL = TextElement | NodeElement

  type DOMType = HTMLElement | Text

  type TextElement = {
    type: 'TEXT_ELEMENT'
    props: ElementProps
  }

  type NodeElement = {
    type: string
    props: ElementProps
  }

  type Container = HTMLElement
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
