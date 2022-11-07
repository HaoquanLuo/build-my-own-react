declare type ElementProps = {
    [key: string]: any;
    id?: string;
    children?: EL[];
    nodeValue?: string;
};
declare type EL = TextElement | NodeElement;
declare type TextElement = {
    type: 'TEXT_ELEMENT';
    props: ElementProps;
};
declare type NodeElement = {
    type: string;
    props: ElementProps;
};
declare type Container = HTMLElement;
export { ElementProps, EL, TextElement, NodeElement, Container };
