import { Notify } from 'notiflix';
import { createPromise } from './create-promise';

export function onClickBtnPromise(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;

  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue;
  }
  evt.currentTarget.reset();
}
