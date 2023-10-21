import { changeColor } from './changeColor';
import { refs } from './common';

export function onClickStartSwitchColor() {
  _startChangeColor = setInterval(changeColor, 1000);
}

export function onClickStopSwitchColor() {
  clearInterval(_startChangeColor);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
