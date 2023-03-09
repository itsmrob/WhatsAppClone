import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = () => {

    const [isLogged, setIsLogged ] = useState(false);

    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
