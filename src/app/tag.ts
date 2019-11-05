/**
 * Tag class.
 */
export class Tag {
    private _tagName : string   // tag name
    private _type : string      // type of tag (such as appliances, ingredients, etc...)

    // getters
    get tagName() {return this._tagName}
    get type() {return this._type}

    /**
     * Constructor. Ye
     * @param name Name of the tag.
     * @param type Type of the tag.
     */
    constructor(name : string, type : string) {
        this._tagName = name;
        this._type = type;
    }
}
