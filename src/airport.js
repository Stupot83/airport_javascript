class Airport {
  constructor( {capacity = 20} = {} ) {
    this.hangar = [];
    this.capacity = capacity;
  }

  instruct_landing(plane) {
    this.capacity_for_landing();
    this.forecast_for_landing();
    this.hangar.push(plane);
    plane.land();
  }

  get landed_planes_total() {
    return this.hangar.length;
  }

  get full() {
    return this.landed_planes_total >= this.capacity;
  }

  capacity_for_landing() {
    const successful = !this.full;
      if (successful) {
        return { successful };
      } else {
        return { successful, message: "Hangar capacity at maximum, please continue to circle!" };
      }
  }

  instruct_take_off(plane) {
    this.capacity_for_take_off();
    this.forecast_for_take_off();
    this.hangar.splice(plane);
    plane.take_off();
  }

  capacity_for_take_off() {
    const successful = !this.empty;
      if (successful) {
        return { successful };
      } else {
        return { successful, message: "You ain't getting on no plane fool!" };
      }
  }

  forecast_for_landing() {
    const success = this.good_weather;
      if (success) {
        return { success };
      } else {
        return { success, message: "Storms persist, please continue to circle!" };
      }
  }

  forecast_for_take_off() {
    const success = this.good_weather;
      if (success) {
        return { success };
      } else {
        return { success, message: "Storms persist, take-off is delayed!" };
      }
  }

  get empty() {
    return this.hangar.length == 0;
  }
}