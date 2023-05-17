import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";

import AuthScreen from "../screens/AuthScreen";
import { useSelector } from "react-redux";

const AppNavigator = () => {

    // const [isLogged, setIsLogged ] = useState(true);
    const isAuth = useSelector(state => state.auth.token !== null && state.auth.token !== "");

    console.log(isAuth)

    return (
        <NavigationContainer>
            {!isAuth && (
                <AuthScreen/>
                )}
            {isAuth && (
                <MainNavigator />
            )}
        </NavigationContainer>
    );
};

export default AppNavigator;
 