const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);
const element = React.createElement('h1',null, "Shopping Cart");
// root.render(element);
const item1 = React.createElement('li',null, "item 1");
const item2 = React.createElement('li',null, "item 2");
const list = React.createElement('ul',null, item1, item2);

const para = <p>This is a new paragraph</p>
root.render([element, list, para]);
