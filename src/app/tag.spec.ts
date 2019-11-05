import { Tag } from './tag';

describe('Tag', () => {
  it('should create an instance', () => {
    let tag = new Tag("stove", "appliance");
    expect(tag).toBeTruthy();
    expect(tag.tagName).toEqual("stove");
    expect(tag.type).toEqual("appliance");
  });
});
