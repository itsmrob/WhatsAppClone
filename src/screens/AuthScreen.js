import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import { FontAwesome, Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const AuthScreen = () => (
    <SafeAreaView style={styles.container}>
        <PageContainer>
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
        </PageContainer>
    </SafeAreaView>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default AuthScreen;
