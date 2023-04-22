let counterValue = 0;

const displayCounter = document.querySelector('#value')

function updateCounter() {
  displayCounter.textContent = counterValue;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');

const incrementClick = () => {
    counterValue += 1;
    updateCounter();
};

incrementBtn.addEventListener("click", incrementClick);

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const decrementClick = () => {
    counterValue -= 1;
    updateCounter();
};

decrementBtn.addEventListener("click", decrementClick);