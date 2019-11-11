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

  get capacity_for_landing() {
    const success = !this.full;
      if (success) {
        return { success };
      } else {
        return { success, message: "Hangar capacity at maximum, please continue to circle" };
      }
  }

  instruct_take_off(plane) {
    this.capacity_for_take_off();
    this.forecast_for_take_off();
    this.hangar.delete(plane);
    plane.take_off();
  }

  get capacity_for_take_off() {
    const success = !this.empty;
      if (success) {
        return { success };
      } else {
        return { success, message: "You ain't getting on no plane fool!" };
      }
  }

  get forecast_for_landing() {
    const success = this.good_weather;
      if (success) {
        return { success };
      } else {
        return { success, message: "Storms persist, please continue to circle" };
      }
  }

  get forecast_for_take_off() {
    const success = this.good_weather;
      if (success) {
        return { success };
      } else {
        return { success, message: "Storms persist, take-off is delayed" };
      }
  }

  get empty() {
    return this.hangar.length == 0;
  }
}