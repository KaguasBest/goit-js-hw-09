// import { changeColor } from './changeColor';
import { refs } from './common';
import { getRandomHexColor } from './getRandomHexColor';

let startChangeColor;

export function onClickStartSwitchColor() {
  startChangeColor = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
}

export function onClickStopSwitchColor() {
  clearInterval(startChangeColor);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
