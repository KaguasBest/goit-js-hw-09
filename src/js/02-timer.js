import flatpickr from 'flatpickr';
import { refs } from './02-timer/common';
import Notiflix, { Notify } from 'notiflix';
import { clickStartBtn } from './02-timer/click-start-btn';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

refs.startBtn.disabled = true;
export let chosenInputDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      refs.startBtn.disabled = true;
      Notiflix.Notify.init({
        position: 'center-top',
      });
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      return (chosenInputDate = selectedDates[0]);
    }
  },
};
flatpickr(refs.datetimePicker, options);

refs.startBtn.addEventListener('click', clickStartBtn);
