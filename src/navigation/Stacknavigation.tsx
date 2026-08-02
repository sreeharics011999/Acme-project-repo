import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DashboardScreen, Loginscreen, SplashScreen, UserdetailScreen, UserlistScreen } from "../screens"
import TabNavigation from "./Tabnavigation"


const stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="splashscreen" component={SplashScreen} />
            <stack.Screen name="loginscreen" component={Loginscreen} />
            <stack.Screen name="dashboard" component={TabNavigation} />
            <stack.Screen name="userdetailscreen" component={UserdetailScreen} />
        </stack.Navigator>
    )
}
export default StackNavigation