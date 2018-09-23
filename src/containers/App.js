import Form from '../components/ListImagesSortable/Form.js';
import List from '../components/ListImagesSortable/List.js';

class App {
  init() {
    let element = document.createElement('div');

    element.setAttribute('class', 'row');

    element.appendChild(Form());
    element.appendChild(List());

    return element;
  }
}

export default new App();