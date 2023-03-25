import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Sign Up"
                component={SignUpScreen}
            />
        </Stack.Navigator>
    );
};
 