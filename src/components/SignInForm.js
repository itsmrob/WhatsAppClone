import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { formReducer } from "../utils/reducers/formReducer";
import { validateEmail, validatePassword } from "../utils/validationConstrains";
import { validateInput } from "../utils/actions/formActions";
import { signIn } from "../utils/actions/authActions";

const SignInForm = () => {
    let initialState = {
        inputValues: {
            email: "",
            password: ""
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    };

    const [formState, dispatchFormState] = useReducer( //allows us to manage complex states, its an improvement of useState 
        formReducer,
        initialState
    );

    const inputChangedHandler = useCallback( //allows us to memoize a function just to call it
        (inputId, inputValue) => {
            dispatchFormState({
                inputId, //to know which input fields belongs to
                inputValue, //the value which is coming from
                validationResult: validateInput(inputId, inputValue), //if everything is ok, return undefined, otherwise will return an advice
            });
        },
        [dispatchFormState]
    );

    const handleLogin = () => {
        let inputValues = formState.inputValues;
        signIn(inputValues);
    }

    let { email, password } = formState.inputValidities;

    return (
        <>
            <Input
                id="email"
                label="Email"
                iconPack={FontAwesome}
                icon="user-o"
                autoCapitalize="none"
                onInputChanged={inputChangedHandler}
                errorText={email && email["email"]}
            />
            <Input
                id="password"
                label="Password"
                iconPack={Feather}
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                onInputChanged={inputChangedHandler}
                errorText={password && password["password"]}
            />
            <SubmitButton
                title="Sign In"
                onPress={handleLogin}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    );
};

export default SignInForm;
