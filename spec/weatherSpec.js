(function () {
  'use strict';

  describe('Weather tests', () => {
    let weather;

    beforeEach(() => {
      weather = new Weather();
    });

    it("is expected to respond to forecast", () => {
      expect(typeof weather.forecast).toBe("string");
    });

    it("is expected to respond to forecast", () => {
      expect(typeof weather.magic_8_ball).toBe("number");
    });

    it("is expected to respond to forecast", () => {
      expect(typeof weather.good_weather).toBe("boolean");
    });

    it("successfully instantiates the weather class", () => {
      expect(weather).toBeInstanceOf(Weather);
    });

    it("returns a random number between 1 and 100 when calling magic_8_ball", () => {
      spyOn(Math, 'random').and.returnValue(0.5);
      expect(weather.magic_8_ball).toEqual(50);
    });

    it("returns safe when the magic_8_ball is less than 90", () => {
      spyOn(Math, 'random').and.returnValue(0.89);
      expect(weather.magic_8_ball).toEqual(89);
      expect(weather.forecast).toEqual("Safe");
    });

    it("returns stormy when the magic_8_ball is 90", () => {
      spyOn(Math, 'random').and.returnValue(0.90);
      expect(weather.magic_8_ball).toEqual(90);
      expect(weather.forecast).toEqual("Stormy");
    });

    it("returns stormy when the magic_8_ball is more than 90", () => {
      spyOn(Math, 'random').and.returnValue(0.91);
      expect(weather.magic_8_ball).toEqual(91);
      expect(weather.forecast).toEqual("Stormy");
    });

    it("good_weather is true when forecast is safe", () => {
      spyOn(Math, 'random').and.returnValue(0.5);
      spyOn(weather, 'forecast').and.returnValue("Safe");
      expect(weather.magic_8_ball).toEqual(50);
      expect(weather.forecast).toEqual("Safe");
      expect(weather.good_weather).toEqual(true);
    });

    it("good_weather is false when forecast is stormy", () => {
      spyOn(Math, 'random').and.returnValue(0.91);
      spyOn(weather, 'forecast').and.returnValue("Stormy");
      expect(weather.magic_8_ball).toEqual(91);
      expect(weather.forecast).toEqual("Stormy");
      expect(weather.good_weather).toEqual(false);
    });
  });
}());
