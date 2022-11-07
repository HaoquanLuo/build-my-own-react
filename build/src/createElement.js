function createElement(type, props, ...children) {
    return {
        type,
        props: Object.assign(Object.assign({}, props), { children: children.map((child) => typeof child === 'object' ? child : createTextElement(child)) }),
    };
}
function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
        },
    };
}
export { createElement, createTextElement };
