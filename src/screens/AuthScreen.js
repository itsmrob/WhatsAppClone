import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import colors from "../constants/colors";

const AuthScreen = () => {
    const [isSignUp, setSignUp] = useState(false);

    const manageState = () => {
        setSignUp((prev) => !prev);
    };

    return (
        <SafeAreaView style={styles.container}>
            <PageContainer>
                {isSignUp ? <SignUpForm /> : <SignInForm />}
                <TouchableOpacity style={styles.linkContainer} onPress={manageState}>
                    <Text style={styles.link}>{`Switch to ${
                        isSignUp ? "Sign In" : "Sign"
                    }`}</Text>
                </TouchableOpacity>
            </PageContainer>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linkContainer: {
        alignItems: "center",
        marginVertical: 15,
    },
    link: {
        color: colors.blue,
        fontFamily: "medium",
        letterSpacing: 0.3,
    },
});
export default AuthScreen;
