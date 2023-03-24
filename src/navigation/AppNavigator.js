import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

import AuthScreen from "../screens/AuthScreen";

const AppNavigator = () => {

    const [isLogged, setIsLogged ] = useState(true);

    return (
        <NavigationContainer>
            {isLogged && (
                <AuthScreen/>
                )}
            {!isLogged && (
                <MainNavigator />
            )}
        </NavigationContainer>
    );
};

export default AppNavigator;
