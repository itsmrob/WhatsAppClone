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

    const [formState, dispatchFormState] = useReducer(
        formReducer,
        initialState
    );

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            dispatchFormState({
                inputId,
                inputValue,
                validationResult: validateInput(inputId, inputValue),
            });
        },
        [dispatchFormState]
    );

    const handleLogin = () => {
        let values = formState.inputValues;
        signIn(values);
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