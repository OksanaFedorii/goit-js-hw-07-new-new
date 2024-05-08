function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment(); 
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box); 
    size += 10;
  }
  document.getElementById('boxes').appendChild(fragment); 
}

document.getElementById('create').addEventListener('click', () => {
  const amountInput = document.getElementById('amount');
  const amount = parseInt(amountInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.getElementById('destroy').addEventListener('click', () => {
  document.getElementById('boxes').innerHTML = '';
});