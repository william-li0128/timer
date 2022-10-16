const timerList = process.argv.slice(2);

const timerChecker = function(timer) {
 if (timer >= 0) {
    console.log(typeof timer);
    return true;
  }
  return false;
};

for (let timer of timerList) {
  timer = Number(timer);
  if (timer >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer * 1000);
  }
}