const timerList = process.argv.slice(2);

for (let timer of timerList) {
  timer = Number(timer);
  if (timer >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer * 1000);
  }
}