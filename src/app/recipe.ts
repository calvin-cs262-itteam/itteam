/**
 * Recipe class.
 */
export class Recipe {
    name : string;          // The name of the recipe
    description : string;   // a description of the recipe
    rating : number;        // Rating
    nratings : number;      // The total number of ratings (used to calculate average)
    //TODO: add tags
    //TODO: We'll probably want a rating class in the future so we can tie specific ratings to users, but for now we can use numbers

    /**
     * The constructor doesn't get rating info because ratings start unrated.
     * @param name Name of the recipe.
     * @param desc Description of the recipe.
     */
    constructor(name:string, desc:string) {
        this.name = name;
        this.description = desc;
        this.rating = 0;
        this.nratings = 0;
    }
}
