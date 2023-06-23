/**
 * `User` interested in `BucketItem` through the `Community`.
 * 
 * People > Many-One > User
 */
class People {
    constructor(
        key,
        userKey,
        going,
        boardMember, //head
        score
    ) {
        this.#key = key;
        this.#userKey = userKey;
        this.#going = going;
        this.#boardMember = boardMember;
        this.#score = score;
    }
}