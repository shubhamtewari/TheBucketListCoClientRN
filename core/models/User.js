/**
 * The "User" `User`. They use the product. Add, remove, work with `BucketItem`s.
 * They create `Event`s. They are the `People` and join `Community`s as them.
 * 
 * User < One-Many > BucketItem
 * User < One-Many > Community
 */
class User {
    constructor(
        key,
        email,
        password,
        userDetail,
        bucketItemKeys,
        communityKeys
    ) {
        this.#key = key;
        this.#email = email;
        this.#password = password;
        this.#userDetail = userDetail;
        this.#bucketItemKeys = bucketItemKeys;
        this.#communityKeys = communityKeys;
    }
} 