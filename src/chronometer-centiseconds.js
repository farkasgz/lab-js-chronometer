class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (printTimeCallback === undefined){
      this.intervalId = setInterval(() => this.currentTime += 1, 10);
    } else{
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback();
      }, 10);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    // ... your code goes here
    return (this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return `${Math.floor(value/10)}${value%10}`
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
