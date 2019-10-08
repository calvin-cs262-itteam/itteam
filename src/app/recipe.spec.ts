import { Recipe } from './recipe';

describe('Recipe', () => {
  it('should create an instance', () => {
    let r = new Recipe("Bacon", "A simple recipe for a simple food", "./fake/dir/img.png", ["Get bacon", "Cook bacon"], ["Bacon"]);
    expect(r).toBeTruthy();
    expect(r.name).toEqual("Bacon");
    expect(r.description).toEqual("A simple recipe for a simple food");
    expect(r.rating).toEqual("0.0");
    expect(r.nratings).toEqual(0);
    expect(r.instructions).toEqual(["Get bacon", "Cook bacon"]);
    expect(r.ingredients).toEqual(["Bacon"]);
  });
  it('should take ratings', () => {
    let r = new Recipe("Bacon", "A simple recipe for a simple food", "./fake/dir/img.png", ["Get bacon", "Cook bacon"], ["Bacon"]);
    r.rate(5);
    expect(r.rating).toEqual("5.0");
    expect(r.nratings).toEqual(1);

    r.rate(3);
    expect(r.rating).toEqual("4.0");
    expect(r.nratings).toEqual(2);

    r.rate(0);
    expect(r.rating).toEqual("2.7");
    expect(r.nratings).toEqual(3);
  });
});
