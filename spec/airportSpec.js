(function () {
  'use strict';

  describe('Airport tests', () => {
    let airport;
    let plane;
    let weather;

    beforeEach(() => {
      airport = new Airport();
      plane = new Plane();
      weather = new Weather();
    });

    it("successfully instantiates the airport class", () => {
      expect(airport).toBeInstanceOf(Airport);
    });

    it("is expected to respond to hangar", () => {
      expect(typeof airport.hangar).toBe("object");
    });

    it("is expected to respond to capacity", () => {
      expect(typeof airport.capacity).toBe("number");
    });

    it("is expected to respond to instruct_landing", () => {
      expect(typeof airport.instruct_landing).toBe("function");
    });

    it("is expected to respond to instruct_landing", () => {
      expect(typeof airport.instruct_take_off).toBe("function");
    });

    it("is expected to respond to landed_planes_total", () => {
      expect(typeof airport.landed_planes_total).toBe("number");
    });

    it("is expected to respond to full", () => {
      expect(typeof airport.full).toBe("boolean");
    });

    it("is expected to respond to capacity_for_landing", () => {
      expect(typeof airport.capacity_for_landing).toBe("function");
    });

    it("is expected to respond to capacity_for_take_off", () => {
      expect(typeof airport.capacity_for_take_off).toBe("function");
    });

    it("is expected to respond to forecast_for_landing", () => {
      expect(typeof airport.forecast_for_landing).toBe("function");
    });

    it("is expected to respond to forecast_for_take_off", () => {
      expect(typeof airport.forecast_for_take_off).toBe("function");
    });

    it("is expected to respond to empty", () => {
      expect(typeof airport.empty).toBe("boolean");
    });

    describe("landing and taking off", () => {
      it("a plane can land at the airport", () => {
        spyOn(weather, 'good_weather').and.returnValue(false);
        airport.instruct_landing(plane);
        expect(airport.hangar.length).toEqual(1);
      });

      it("a plane can take off from the airport", () => {
        spyOn(weather, 'good_weather').and.returnValue(true);
        spyOn(plane, 'land').and.returnValue(true);
        airport.instruct_landing(plane);
        spyOn(plane, 'take_off').and.returnValue(true);
        airport.instruct_take_off(plane);
        expect(airport.hangar.length).toEqual(0);
      });
    });

    describe("capacity checks", () => {
      it("confirms the airport is empty when there are no planes landed", () => {
        spyOn(weather, 'good_weather').and.returnValue(true);
        spyOn(plane, 'land').and.returnValue(true);
        airport.instruct_landing(plane);
        spyOn(plane, 'take_off').and.returnValue(true);
        airport.instruct_take_off(plane);
        expect(plane.airborne()).toEqual("landed");
        expect(airport.hangar.length).toEqual(0);
    });

      it("if the hangar is empty a plane cannot take off and there is a message", () => {
        airport.instruct_take_off(plane);
        expect(airport.capacity_for_take_off().message).toEqual("You ain't getting on no plane fool!");
      });

      it("if the hangar is full a plane cannot land and receives a message", () => {
        for (var i = 0; i < 20; i++) {
          airport.instruct_landing(plane);
        }
        airport.instruct_landing(plane);
        expect(airport.capacity_for_landing().message).toEqual("Hangar capacity at maximum, please continue to circle!");
      });

      it("allows the user to change the hangar capacity for a different airport", () => {
        let test_airport = new Airport( { capacity: 50 });
        expect(test_airport.capacity).toEqual(50);
      });
    });

    describe("weather", () => {
      it("if the weather is stormy, a plane cannot take-off", () => {
        spyOn(weather, 'good_weather').and.returnValue(true);
        spyOn(plane, 'land').and.returnValue(true);
        airport.instruct_landing(plane);
        spyOn(weather, 'good_weather').and.returnValue(false);
        airport.instruct_take_off(plane);
        expect(airport.forecast_for_take_off().message).toEqual("Storms persist, take-off is delayed!");
      });

      it("if the weather is stormy, a plane cannot land", () => {
        spyOn(weather, 'good_weather').and.returnValue(false);
        airport.instruct_landing(plane);
        expect(airport.forecast_for_landing().message).toEqual("Storms persist, please continue to circle!");
      });
    });

    describe("multiple planes can land or take-off from the same airport", () => {
      it("a maximum of 20 planes can land if airport is empty in clear weather", () => {
        spyOn(weather, 'good_weather').and.returnValue(true);
        for (var i = 0; i < 20; i++) {
          airport.instruct_landing(plane);
        }
        expect(airport.landed_planes_total).toEqual(20);
      });

      it("a maximum of 20 planes can take-off from same airport if full and clear weather", () => {
        spyOn(weather, 'good_weather').and.returnValue(true);
        for (var i = 0; i < 20; i++) {
          airport.instruct_take_off(plane);
        }
        expect(airport.landed_planes_total).toEqual(0);
      });
    });
  });

}());