import Didact from 'Didact';
// import Didact from './src'
const element = (Didact.createElement("div", { id: "foo" },
    Didact.createElement("a", null, "bar"),
    Didact.createElement("b", null)));
console.log('hello Didact');
const container = document.getElementById('root');
Didact.render(element, container);
