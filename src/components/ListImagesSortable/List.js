import CardElem from './common/CardElem.js';

export function Item(card, item) {
  let li = document.createElement('li');

  li.setAttribute('data-item', JSON.stringify(item));
  li.appendChild(card);

  return li;
  
}

function ListItems(items) {
  let ul = document.createElement('ul');

  ul.setAttribute('id', 'listItems');

  items.map(item => {
    ul.appendChild(Item(CardElem(item), item));
  });

  return ul;
}

export function List(items) {
  let element = document.createElement('div');

  const h2 = '<h2>List of items added</h2>';
  const span = `<span id="showCountItem" class="text-brown"><small>${items.length} items listed.</small></span>`;
  const p = `<p><small>Drag and drop the items for sortable. ${span}</small></p>`;

  element.setAttribute('id', 'listColumn');
  element.setAttribute('class', 'col-6');
  element.innerHTML = `${h2}${p}`;

  element.appendChild(ListItems(items));

  return element;

}

export default {
  List,
  Item
};