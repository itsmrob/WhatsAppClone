import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";

import AuthScreen from "../screens/AuthScreen";
import StartUpScreen from "../screens/StartUpScreen";

import { useSelector } from "react-redux";

const AppNavigator = () => {

    const isAuth = useSelector(state => state.auth.token !== null && state.auth.token !== "");
    
    // console.log("isAuth", isAuth);

    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

    // console.log("didTryAutoLogin", didTryAutoLogin);

    return (
        <NavigationContainer>
            {isAuth && <MainNavigator />}
            {!isAuth && didTryAutoLogin && <AuthScreen/>}
            {!isAuth && !didTryAutoLogin && <StartUpScreen/>}
        </NavigationContainer>
    );
};

export default AppNavigator;
 