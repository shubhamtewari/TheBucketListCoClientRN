/**
 * Will be created using people in a `Community` and a `BucketItem`.
 * Maps to the real-world event that will happen from a `BucketItem` and
 * a `Community` of `People`.
 * 
 * BucketItemEvent < One-One > BucketItem
 * BucketItemEvent > Many-One > People (Going)
 */
class BucketItemEvent {
    constructor(
        key,
        bucketItemKey,
        status,
        address,
        time,
        peopleGoingKey
    ) {
        this.#key = key;
        this.#bucketItemKey = bucketItemKey;
        this.#status = status;
        this.#address = address;
        this.#time = time;
        this.#peopleGoingKey = peopleGoingKey;
    }
}