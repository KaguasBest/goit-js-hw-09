import { changeColor } from './changeColor';
import { refs } from './common';

export function onClickStartSwitchColor() {
  startChangeColor = setInterval(changeColor, 1000);
}

export function onClickStopSwitchColor() {
  clearInterval(startChangeColor);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
