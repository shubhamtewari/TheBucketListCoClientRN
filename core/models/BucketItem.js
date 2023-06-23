/**
 * What a `User` will add and see in the feed.
 * BucketItem < Many-One > User
 * BucketItem > Many-One > Community
 * BucketItem < One-One > BucketItemEvent
 * 
 * Can have a `Community` of people linked with it working and interacting 
 * together to create an `BucketItemEvent` that will then "happen" in the real-world.
 */
class BucketItem {
    constructor(
        key,
        description,
        moreDescription,
        space,
        time,
        tags,
        status,
        userKey,
        communityKey
    ) {
        this.#key = key;
        this.#description = description;
        this.#moreDescription = moreDescription;
        this.#space = space;
        this.#time = time;
        this.#tags = tags;
        this.#status = status;
        this.#userKey = userKey;
        this.#communityKey = communityKey;
    }
}