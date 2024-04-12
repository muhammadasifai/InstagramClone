// yarn add @react-navigation/material-top-tabs react-native-tab-view
// yarn add react-native-pager-view
// 3:50
// Deep linking is the possibility to create a specific type of link, URL, that you can share on the internet, and whenever a person clicks on that URL, he will right away be redirected to your application, to the specific page or location in your application that you desire.

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CommentsScreen from "../screens/CommentsScreen/CommentsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Tab = createMaterialTopTabNavigator();

const SearchTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="UserSearch" component={HomeScreen} />
            <Tab.Screen name="UserSearch" component={CommentsScreen} />
        </Tab.Navigator>
    );
};

export default SearchTabNavigator;