import { EL, ElementProps, NodeElement, TextElement } from 'Didact';
declare function createElement(type: string, props: ElementProps, ...children: EL[]): NodeElement;
declare function createTextElement(text: string): TextElement;
export { createElement, createTextElement };
