const rootElement = document.querySelector('#root');

const renderGreeting = React.createElement(
   'div',
   { className: 'greeting' },
   'Hello, React!'
);

ReactDOM.render(renderGreeting, rootElement);