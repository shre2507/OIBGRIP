const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');

function addItem() {
  const newItem = document.createElement('li');
  newItem.innerText = inputBox.value;
  list.appendChild(newItem);
  inputBox.value = '';
  const doneButton = document.createElement('button');
  doneButton.innerText = 'Done';
  doneButton.classList.add('done-button');
  doneButton.addEventListener('click', function() {
    newItem.classList.toggle('done');
  });
  newItem.appendChild(doneButton);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', function() {
    newItem.remove();
  });
  newItem.appendChild(deleteButton);
}
