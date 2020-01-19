const countDate = new Date('Jan 20, 2020 00:00:00').getTime();

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const interval = setInterval(newYear, 1000);

const cards = {
  day: document.getElementById('day'),
  hour: document.getElementById('hour'),
  minute: document.getElementById('minute'),
  second: document.getElementById('second')
};

function newYear() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
    showCongratulations();
  }

  cards.day.innerHTML = d;
  cards.hour.innerHTML = h;
  cards.minute.innerHTML = m;
  cards.second.innerHTML = s;
}

function showCongratulations() {
  const countdown = document.getElementById('countdown');
  const congratulations = document.getElementById('congratulations');

  countdown.classList.add('hidden');
  congratulations.classList.remove('hidden');

  clearInterval(interval);
  requestAnimationFrame(loop);
}
