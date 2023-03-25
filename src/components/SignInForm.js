import React from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome, Feather } from "@expo/vector-icons";

const SignInForm = () => {
    return (
        <>
            <Input
                label="Email"
                iconPack={FontAwesome}
                icon="user-o"
                // errorText="This is an error"
            />
            <Input
                label="Password"
                iconPack={Feather}
                icon="lock"
                // errorText="This is an error"
            />
            <SubmitButton
                title="Sign In"
                onPress={() => console.log("hola")}
                style={{ marginTop: 20 }}
            />
        </>
    );
};

export default SignInForm;
