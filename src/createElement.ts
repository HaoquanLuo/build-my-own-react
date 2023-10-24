import { EL, ElementProps, Fiber, NodeElement, TextElement } from 'Didact'

function createElement(
  type: keyof HTMLElementTagNameMap,
  props: ElementProps<NodeElement>,
  ...children: EL[]
): NodeElement {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text: string): TextElement {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
    },
  }
}

function createDom(fiber: Fiber) {
  /**
   * @todo 完善dom类型
   */
  const dom: any =
    fiber.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type!)

  const isProperty = (key: string) => key !== 'children'
  if (fiber.props) {
    Object.keys(fiber.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = fiber.props?.[name]
      })
  }

  return dom
}

export { createElement, createTextElement, createDom }
