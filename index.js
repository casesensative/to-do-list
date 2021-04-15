document.querySelector('form').addEventListener("submit", addTodo);

function addTodo(event) {
  event.stopPropagation();
  event.preventDefault();
  const newItem = document.createElement('li');
  let inputItem = document.getElementById('item');
  newItem.innerText = inputItem.value;
  const itemList = document.querySelector('ul');
  itemList.appendChild(newItem);
}


