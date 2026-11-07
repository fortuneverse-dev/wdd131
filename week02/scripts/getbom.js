const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Fill in the blank to reference the unordered list element.

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
<button aria-label="Close" id="close-button">X
</button>

button.addEventListener('click', function() {
// Code to execute when the button is clicked
});

if (input.value.trim() !== '') {...}

deleteButton.addEventListener('click', function () {
list.removeChild(li);
input.focus();
});

input.value = '';
input.focus();