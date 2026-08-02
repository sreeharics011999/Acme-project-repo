import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DashboardScreen, FavoriteScreen, ProfileScreen, UserlistScreen } from "../screens"
import { BottomTab } from "../components"


const tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTab {...props} />}>
            <tab.Screen name='dashboard' component={DashboardScreen} />
            <tab.Screen name='users' component={UserlistScreen} />
            <tab.Screen name='favourite' component={FavoriteScreen} />
            <tab.Screen name='profile' component={ProfileScreen} />
        </tab.Navigator>
    )
}
export default TabNavigation