(function () {
  'use strict';

  describe('Plane tests', () => {
    let plane;

    beforeEach(() => {
      plane = new Plane();
    });

    it("is expected to respond to flying", () => {
      expect(typeof plane.land).toBe("function");
    });

    it("is expected to respond to flying", () => {
      expect(typeof plane.take_off).toBe("function");
    });

    it("is expected to respond to flying", () => {
      expect(typeof plane.airborne).toBe("function");
    });

    it("successfully instantiates the plane class", () => {
      expect(plane).toBeInstanceOf(Plane);
    });

    it("has a flying state of false when created", () => {
      expect(plane.flying).toEqual(false);
    });

    it("is landed when created", () => {
      plane.land();
      expect(plane.airborne()).toEqual("landed");
    });

    it("has a flying state of false when landed", () => {
      plane.land();
      expect(plane.flying).toEqual(false);
    });

    it("flying when it has taken-off", () => {
      plane.take_off();
      expect(plane.airborne()).toEqual("flying");
    });

    it("has a flying state of true when flying", () => {
      plane.take_off();
      expect(plane.flying).toEqual(true);
    });
  });

}());
