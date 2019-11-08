/*
 * Instruction class
 */

export class Instruction {
    private _instruction : string; // the instruction itself
    private _suggestions : string[]; // list of suggestions for instruction

    constructor (instruction : string) {this._instruction = instruction;}

    // getters
    get instruction() : string { return this._instruction }
    get suggestions() : string[] { return this._suggestions }

    /* adds new suggestion to suggestions
     * @param suggestion, new suggestion
     */ 
    addSuggestion (suggestion : string) {
        this._suggestions.push(suggestion);
    }
}
