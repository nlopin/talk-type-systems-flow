// @flow

// we want a function that takes value or undefined and if there is a value, returns it, if not − throws

export const valueOrThrow = <T>(value: ?T, errorMessage: string): T => {
    if (value === undefined || value === null) {
        throw new Error(errorMessage)
    }

    return value
}
