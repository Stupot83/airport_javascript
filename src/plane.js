class Plane {
  constructor() {
    this.flying = false;
  }

  flying() {
    this.flying = true;
  }

  land() {
    this.flying = false;
  }

  take_off() {
    this.flying = true;
  }

  airborne() {
    return this.flying == true ? "flying" : "landed";
  }
}