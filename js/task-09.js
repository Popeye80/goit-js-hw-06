function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const widget = document.querySelector('div.widget');
const widgetButtonColorChange = document.querySelector('div.widget button.change-color');
const colorValue = document.querySelector('div.widget span.color');

widgetButtonColorChange.addEventListener('click', OnWidgetButtonColorChangeClick);

function OnWidgetButtonColorChangeClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValue.innerHTML = randomColor;
}