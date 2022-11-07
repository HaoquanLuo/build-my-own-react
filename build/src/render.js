function render(element, container) {
    var _a, _b;
    /**
     * @todo 完善dom类型
     */
    const dom = element.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(element.type);
    (_b = (_a = element.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.forEach((child) => {
        render(child, dom);
    });
    const isProperty = (key) => key !== 'children';
    Object.keys(element.props)
        .filter(isProperty)
        .forEach((name) => {
        dom[name] = element.props[name];
    });
    container.appendChild(dom);
}
export { render };
