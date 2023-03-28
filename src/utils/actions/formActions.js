import { validateEmail, validatePassword, validateString } from "../validationConstrains"

export const validateInput = (inputId, inputValue) => {
    if (inputId == "firstName" || inputId == "lastName") {
        return validateString(inputId, inputValue)
    }
    if (inputId == "email") {
        return validateEmail(inputId, inputValue);
    }
    if (inputId == "password") {
        return validatePassword(inputId, inputValue);
    }
}