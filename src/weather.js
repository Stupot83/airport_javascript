class Weather {
  constructor() {
  }
  
  get forecast() {
    return this.magic_8_ball < 90 ? "Safe" : "Stormy";
  }

  get magic_8_ball() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }

  get good_weather() {
    return this.forecast != "Stormy";
  }
}