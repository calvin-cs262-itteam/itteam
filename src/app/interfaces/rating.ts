/**
 * Rating class.
 */
export class Rating {
    private _score : number;    // The rating.
    private _userid : number;   // The userID of the rater.
    private _comment : string;  // Rating comment.

    get score() : number {return this._score}
    get userid() : number {return this._userid}
    get comment() : string {return this._comment}
}
