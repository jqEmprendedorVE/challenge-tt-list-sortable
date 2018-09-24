import CardElem from './common/CardElem.js';

function Item(card) {
  let li = document.createElement('li');

  li.appendChild(card);

  return li;
  
}

function ListItems(items) {
  let ul = document.createElement('ul');

  ul.setAttribute('id', 'listItems');

  items.map(item => {
    ul.appendChild(Item(CardElem(item)));
  });

  return ul;
}

function List(items) {
  let element = document.createElement('div');

  const h2 = '<h2>List of items added</h2>';
  const span = `<span class="text-brown"><small>${items.length} items listed.</small></span>`;
  const p = `<p><small>Drag and drop the items for sortable. ${span}</small></p>`;

  element.setAttribute('class', 'col-6');
  element.innerHTML = `${h2}${p}`;

  element.appendChild(ListItems(items));

  return element;

}

export default List;