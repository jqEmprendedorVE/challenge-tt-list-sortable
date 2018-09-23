import CardElem from './common/CardElem.js';

function liItem(card) {
  let li = document.createElement('li');

  li.appendChild(card);

  return li;
  
}

function ListItems(items) {
  let ul = document.createElement('ul');

  items.map(item => {
    ul.appendChild(liItem(CardElem(item)));
  });

  return ul;
}

function List() {
  let element = document.createElement('div');
  const items = [
    {image: 'http://1.bp.blogspot.com/_Uo2IQsX3Izc/TK8NqT5ebFI/AAAAAAAAAR0/oodHhYSvMVM/s320/Green+Nature+7.jpg', text: 'Algo de prueba'},
    {image: 'https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-1/20476415_1831973587116771_3535278973119244738_n.jpg?_nc_cat=107&oh=db7c4eb08a5079036b7ba5a022e16e06&oe=5C190767', text: 'Algo de prueba 2'},
    {image: 'https://www.dharma-documentaries.net/screenshots/00-Headers/Animals-and-the-Buddha.jpg', text: 'Algo de prueba 3'},
    {image: 'https://ak1.ostkcdn.com/images/products/16693383/P23011350.jpg?imwidth=320&impolicy=medium', text: 'Algo de prueba 4'}
  ];

  const h2 = '<h2>List of items added</h2>';
  const span = `<span class="text-brown"><small>Show ${items.length} items</small></span>`;
  const p = `<p><small>Drag and drop the items for sortable. ${span}</small></p>`;

  element.setAttribute('class', 'col-6');
  element.innerHTML = `${h2}${p}`;

  element.appendChild(ListItems(items));

  return element;

}

export default List;