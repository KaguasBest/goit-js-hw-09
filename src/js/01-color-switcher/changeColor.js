import { refs } from './common';
import { getRandomHexColor } from './getRandomHexColor';

export function changeColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}
