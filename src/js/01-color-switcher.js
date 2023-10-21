import { refs } from './01-color-switcher/common';
import {
  onClickStartSwitchColor,
  onClickStopSwitchColor,
} from './01-color-switcher/onClickSwitchColor';

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', onClickStartSwitchColor);
refs.stopBtn.addEventListener('click', onClickStopSwitchColor);
