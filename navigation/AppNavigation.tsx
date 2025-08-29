import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import LoginScreen from "@/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack =createNativeStackNavigator<RootStackParamList>();

function MainStack(){
    return (
        <Stack.Navigator initialRouteName ="Home">
            < Stack.Screen name ="Menu" component ={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}