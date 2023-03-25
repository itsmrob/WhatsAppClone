import React from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome, Feather } from "@expo/vector-icons";

const SignUpForm = (props) => {
    return (
        <>
            <Input
                label="First Name"
                iconPack={FontAwesome}
                icon="user-o"
                errorText="This is an error"
            />
            <Input
                label="Last Name"
                iconPack={FontAwesome}
                icon="user-o"
                // errorText="This is an error"
            />
            <Input
                label="Email"
                iconPack={Feather}
                icon="mail"
                // errorText="This is an error"
            />
            <Input
                label="Password"
                iconPack={Feather}
                icon="lock"
                // errorText="This is an error"
            />
            <SubmitButton
                title="Sign Up"
                onPress={() => console.log("hola")}
                style={{ marginTop: 20 }}
            />
        </>
    );
};

export default SignUpForm;
