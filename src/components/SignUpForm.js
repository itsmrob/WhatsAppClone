import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome, Feather } from "@expo/vector-icons";
import {
    validateString,
    validateEmail,
    validatePassword,
} from "../utils/validationConstrains";
import { formReducer } from "../utils/reducers/formReducer";

const SignUpForm = (props) => {
    const initialState = {
        inputValidities: {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
        },
        formIsValid: false,
    };

    const [formState, dispatchFormState] = useReducer(formReducer, initialState);

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            let validationTypes = {
                firstName: validateString,
                lastName: validateString,
                email: validateEmail,
                password: validatePassword,
            };

            let currentValidation = validationTypes[inputId];
            if (currentValidation) {
                dispatchFormState({
                    inputId,
                    validationResult: currentValidation(inputId, inputValue),
                });
            }
        },
        [dispatchFormState]
    );

    return (
        <>
            <Input
                id="firstName"
                label="First Name"
                iconPack={FontAwesome}
                icon="user-o"
                onInputChanged={inputChangedHandler}
                autoCapitalize="none"
                // errorText="This is an error"
            />
            <Input
                id="lastName"
                label="Last Name"
                iconPack={FontAwesome}
                icon="user-o"
                onInputChanged={inputChangedHandler}
                autoCapitalize="none"
                // errorText="This is an error"
            />
            <Input
                id="email"
                label="Email"
                iconPack={Feather}
                icon="mail"
                onInputChanged={inputChangedHandler}
                keyboardType="email-address"
                autoCapitalize="none"
                // errorText="This is an error"
            />
            <Input
                id="password"
                label="Password"
                iconPack={Feather}
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                onInputChanged={inputChangedHandler}
                // errorText="This is an error"
            />
            <SubmitButton
                title="Sign Up"
                onPress={() => console.log("hola")}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    );
};

export default SignUpForm;
