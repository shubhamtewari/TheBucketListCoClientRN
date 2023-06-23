/**
 * Cosmetic detail of a user.
 */
class UserDetail {
    constructor(
        name,
        about,
        gender,
        interests,
        defaultSpace
    ) {
        this.#name = name;
        this.#about = about;
        this.#gender = gender;
        this.#interests = interests;
        this.#defaultSpace = defaultSpace;
    }
}