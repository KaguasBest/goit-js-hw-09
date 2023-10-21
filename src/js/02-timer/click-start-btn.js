import { chosenInputDate } from '../02-timer';
import { addLeadingZero } from './add-leading-zero';
import { refs } from './common';
import { convertMs } from './convertMs';

export function clickStartBtn() {
  refs.startBtn.disabled = true;
  const timerInterval = setInterval(() => {
    const currentData = new Date().getTime();
    const dateChosen = chosenInputDate.getTime();
    const timeDifference = dateChosen - currentData;
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      return;
    }

    refs.daysSpan.textContent = addLeadingZero(days);
    refs.hoursSpan.textContent = addLeadingZero(hours);
    refs.minutesSpan.textContent = addLeadingZero(minutes);
    refs.secondsSpan.textContent = addLeadingZero(seconds);
  }, 1000);
}
