const rootElement = document.querySelector('#root');

// Javascript
// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React';

// rootElement.append(greetingElem);

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');
ReactDOM.render(greetingElem, rootElement); // что вставляем(созданный эл) и куда всавляем(в разметке)