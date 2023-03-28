import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { formReducer } from "../utils/reducers/formReducer";
import { validateEmail, validatePassword } from "../utils/validationConstrains";
import { validateInput } from "../utils/actions/formActions";

const SignInForm = () => {

    let initialState = {
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    }

    const [formState, dispatchFormState] = useReducer(formReducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        dispatchFormState({ inputId, validationResult: validateInput(inputId, inputValue) });
    }, [dispatchFormState]);

    return (
        <>
            <Input
                id="email"
                label="Email"
                iconPack={FontAwesome}
                icon="user-o"
                autoCapitalize="none"
                onInputChanged={inputChangedHandler}
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
                title="Sign In"
                onPress={() => console.log("hola")}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    );
};

export default SignInForm;
