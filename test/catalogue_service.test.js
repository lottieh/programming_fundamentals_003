const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("return True if a book is in the catalogue, and False if not", () => {
      expect(catalogueService.checkBookByTitle("Bring Up The Bodies")).toBe(true);
      expect(catalogueService.checkBookByTitle("Spud")).toBe(false);

    });
  });

  describe("catalogueService.checkBookByFirstLetter", () => {
    test("returns the number of books that start with selected letter", () => {
      expect(catalogueService.checkBookByFirstLetter("B")).toBe(3);
      expect(catalogueService.checkBookByFirstLetter("T")).toBe(5);
    })});


    });
