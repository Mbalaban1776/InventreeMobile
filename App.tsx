import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import PanelScreen from './src/screens/PanelScreen';
import StockScreen from './src/screens/StockScreen';
import WorkOrdersScreen from './src/screens/WorkOrdersScreen';  // Import new screens

// Define the type for your stack routes
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  YöneticiPaneli: undefined;
  InventreeStokTaşıma: undefined;
  InventreeİşEmirleri: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();  // Add the type here

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: true }}  // Hides the header for Login
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: true }}  // Hides the header for Home (optional)
        />
        <Stack.Screen 
          name="YöneticiPaneli" 
          component={PanelScreen} 
          options={{ headerTitle: 'Yönetici Paneli', headerShown:true}}  // Screen title
        />
        <Stack.Screen 
          name="InventreeStokTaşıma" 
          component={StockScreen} 
          options={{ headerTitle: 'Inventree Stok Taşıma', headerShown:true }}  // Screen title
        />
        <Stack.Screen 
          name="InventreeİşEmirleri" 
          component={WorkOrdersScreen} 
          options={{ headerTitle: 'Inventree İş Emirleri', headerShown:true }}  // Screen title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
