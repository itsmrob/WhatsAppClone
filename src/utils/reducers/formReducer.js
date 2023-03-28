export const formReducer = (state, action) => {
    const { inputValue, validationResult, inputId } = action;
    
    const updatedValidities = {
        ...state.inputValidities,
        [inputId]: validationResult,
    };

    const updatedValues = {
        ...state.inputValues,
        [inputId]: inputValue
    }

    let updatedFormIsValid = true;
    for (let key in updatedValidities) {
        if (updatedValidities[key] !== undefined) { //if its not undefined 
            updatedFormIsValid = false;
            break;
        }
    }

    return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormIsValid,
    };
};
