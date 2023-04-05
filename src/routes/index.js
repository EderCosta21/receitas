import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

import  {Home}  from "../pages/home";
import  {Favorites}  from "../pages/favorites";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false,
        tabBarActiveTintColor:'purple',
        tabBarStyle:{
            backgroundColor:'#FFF',
            borderBottomWidth:0,
        }
    }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home}  
      options={{
        tabBarIcon:({color,size,focused})=>{
            if(focused){
               return <Ionicons name="home" color="#000" size={size}></Ionicons>
            }
            return <Ionicons name="home-outline" color={color} size={18}></Ionicons>
        }
      }}
      />
      <Tab.Screen 
      name="Favorites" 
      component={Favorites} 
      options={{
        tabBarIcon:({color,size,focused})=>{
            if(focused){
               return <Ionicons name="heart" color="#FF4141" size={size}></Ionicons>
            }
            return <Ionicons name="heart-outline" color={color} size={size}></Ionicons>
        }
      }}
      />
    </Tab.Navigator>
  );
}
