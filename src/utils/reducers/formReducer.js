export const formReducer = (state, action) => {
    const { inputId, inputValue, validationResult } = action;
    
    const updatedValidities = {
        ...state.inputValidities,//undefined or an advice
        [inputId]: validationResult, //updating the values with the returned value
    };

    const updatedValues = {
        ...state.inputValues, //first we fill the object with the initial state
        [inputId]: inputValue // second step we update the values because we alerady know wich field is because of the id
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
