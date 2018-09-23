import Form from './ListImagesSortable/Form.js';
import List from './ListImagesSortable/List.js';

function App() {
  let element = document.createElement('div');

  element.setAttribute('class', 'row');

  element.appendChild(Form());
  element.appendChild(List());

  return element;
}

export default App;