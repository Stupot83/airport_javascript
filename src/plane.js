class Plane {
  constructor() {
    this._flying = false;
  }

  get flying() {
    return this._flying;
  }

  set flying(status) {
    this._flying = status;
  }

  land() {
    this._flying = false;
  }

  take_off() {
    this._flying = true;
  }

  airborne() {
    return this._flying === true ? "flying" : "landed";
  }
}