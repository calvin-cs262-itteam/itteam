/**
 * Rating class.
 */
export class Rating {
    private _id : number;       // The rating ID
    private _score : number;    // The rating.
    private _userid : number;   // The userID of the rater.
    private _comment : string;  // Rating comment.

    get id() : number {return this._id}
    get score() : number {return this._score}
    get userid() : number {return this._userid}
    get comment() : string {return this._comment}

    set comment(new_comment : string) {this._comment = new_comment}
}
