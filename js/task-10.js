function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyCreatedBoxes);

function destroyCreatedBoxes() {
  boxes.innerHTML = '';
}

function getAmount() {
  let amount = +document.querySelector('input[type=number]').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const element = document.createDocumentFragment();
  const minSize = 30;

  for (let i = 0; i < amount; i++) {
    let size = minSize + i * 10;

    const div = document.createElement('div');
    element.appendChild(div);

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
  }

  boxes.appendChild(element);
}