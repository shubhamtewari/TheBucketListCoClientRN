/**
 * A group of `People` interacting (`Chat`) and socializing to seek discomfort and
 * adventure together.
 * 
 * Community > Many-Many > People
 * Community < One-One > Chat
 * 
 * NOTE: No reference to `BucketItem`.
 */
class Community {
    constructor(
        key,
        peopleKeys,
        chatKey
    ) {
        this.#key = key;
        this.#peopleKeys = peopleKeys;
        this.#chatKey = chatKey;
    }
}