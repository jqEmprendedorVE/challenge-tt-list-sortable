import CardElem from './common/CardElem.js';

const items = [
  {image: 'http://1.bp.blogspot.com/_Uo2IQsX3Izc/TK8NqT5ebFI/AAAAAAAAAR0/oodHhYSvMVM/s320/Green+Nature+7.jpg', text: 'Algo de prueba'},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcHABgLAb9-LP2pBcB0xUCo--z0OJM9koaoFGcAy1A5sSX1xS', text: 'Algo de prueba 2'},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vswgV0j0_mwl4QsMwmxvzfzgL5uPpZ69d1bs1UU7Bn4ncieI', text: 'Algo de prueba 3'},
  {image: 'https://ak1.ostkcdn.com/images/products/16693383/P23011350.jpg?imwidth=320&impolicy=medium', text: 'Algo de prueba 4'}
];

function List() {
  let element = document.createElement('div');
  element.setAttribute('class', 'col-6');

  element.innerHTML = 'Hola desde la ListImagesSortable()';

  return element;

}

export default List;