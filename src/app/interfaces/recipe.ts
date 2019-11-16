/**
 * Recipe class.
 */
export class Recipe {
    private _name: string;             // The name of the recipe
    private _description: string;      // a description of the recipe
    private _rating: number;           // Rating
    private _rating_list: number[];    // List of ratings
    private _nratings: number;         // The total number of ratings (used to calculate average)
    private _imgPath: string;          // Path to image of recipe
    private _ingredients: string[];    // Ingredient list
    private _instructions: string[];   // Instruction list
    // TODO: Ingredients, instructions
    // TODO: add tags
    // TODO: We'll probably want a rating class in the future so we can tie specific ratings to users, but for now we can use numbers

    // getters
    get name(): string { return this._name }
    get description(): string { return this._description }
    get rating(): string { return this._rating.toPrecision(2) }
    get nratings(): number { return this._nratings }
    get imgPath(): string { return this._imgPath }
    get ingredients(): string[] { return this._ingredients }
    get instructions(): string[] { return this._instructions }

    /**
     * The constructor doesn't get rating info because ratings start unrated.
     * @param name Name of the recipe.
     * @param desc Description of the recipe.
     * @param img Path to the image of the recipe.
     * @param instrList List of instructions.
     * @param ingrdntList List of ingredients.
     */
    constructor(name: string, desc: string, img: string, instrList: string[], ingrdntList: string[]) {
        this._name = name;
        this._description = desc;
        this._rating = 0;
        this._nratings = 0;
        this._rating_list = [];
        this._imgPath = img;
        this._ingredients = ingrdntList;
        this._instructions = instrList;
    }
    // TODO: Explicit constructor to load class from db

    /**
     * Rate the recipe. Currently doesn't track specific ratings, just calculates an average using the previous ratings,
     * the new rating, and the total number of ratings.
     * @param rating The new rating to factor in.
     */
    rate(rating: number) {
        this._nratings = this._rating_list.push(rating);
        let total = 0;
        this._rating_list.forEach(r => {
            total += r;     // potential speedup could be storing total instead of calculating every time
        });
        this._rating = total / this._nratings;
    }
}
