import { Recipe } from './recipe';

describe('Recipe', () => {
  it('should create an instance', () => {
    let r = new Recipe("Bacon", "A simple recipe for a simple food", "./fake/dir/img.png");
    expect(r).toBeTruthy();
    expect(r.name).toEqual("Bacon");
    expect(r.description).toEqual("A simple recipe for a simple food");
    expect(r.rating).toEqual(0);
    expect(r.nratings).toEqual(0);
  });
  it('should take ratings', () => {
    let r = new Recipe("Bacon", "A simple recipe for a simple food", "./fake/dir/img.png");
    r.rate(5);
    expect(r.rating).toEqual(5);
    expect(r.nratings).toEqual(1);

    r.rate(3);
    expect(r.rating).toEqual(4);
    expect(r.nratings).toEqual(2);
  });
});
