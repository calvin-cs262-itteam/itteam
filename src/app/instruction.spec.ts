import { Instruction } from './instruction';

describe('Instruction', () => {
  it('should create an instance', () => {
    let i = new Instruction("Get Bacon");
    expect(i).toBeTruthy();
    expect(i.instruction).toEqual("Get Bacon");
  });
  it('should take suggestions', () => {
    let i = new Instruction("Get Bacon");
    i.addSuggestion("Get thick cut bacon instead");
    i.addSuggestion("Skip the bacon");
    expect(i.suggestions).toEqual(["Get thick cut bacon instead", "Skip the bacon"]);
  });
});
