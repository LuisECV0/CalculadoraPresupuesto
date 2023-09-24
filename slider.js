 
const slider = document.querySelector('.slider');
const valueBox = document.querySelector('.value-box');

slider.addEventListener('input', function () {
    const value = this.value;
    const min = this.min || 0;
    const max = this.max || 100;

    const percent = ((value - min) / (max - min)) * 100;
    valueBox.style.left = `calc(${percent}%)`;
    valueBox.textContent = value + " €";
});