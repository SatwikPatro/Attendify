import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TestPage } from './screens/TestPage';
import { LoginPage } from './screens/LoginPage';
import { SignupPage } from './screens/SignupPage';
import { SignupAlertPage } from './screens/SingupAlertPage';
import { QRScanPage } from './screens/QRScanPage';
import { BluetoothPage } from './screens/BluetoothPage';
import { ThemeProvider, ThemeContext } from './kits/AppTheme';

import { CoursePage } from './screens/coursePage/CoursePage';
import { ClickerPage } from './screens/clickerPage/ClickerPage';
import { ProfilePage } from './screens/profilePage/ProfilePage';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Test" component={TestPage}/>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Signup" component={SignupPage}/>
            <Stack.Screen name="SignupAlert" component={SignupAlertPage}/>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

var navigatorTabIndex = 0;
function BottomTabNavigator() {
  const themedStyles = ThemedStyles();
  const mainColor = GetMainColor();

  return (
    <Tab.Navigator
      screenOptions={() =>({
        showLabel: false,
        headerShown: false,
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: mainColor,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: mainColor,
          paddingHorizontal: 10,
          height: 100
        },
      })}
    >
      <Tab.Screen name="Bluetooth" options={{
        animation: 'none',
        tabBarIcon:() => (
          <View>
            <Image 
              source={require('./assets/bluetooth-scan-icon.png')}
              style={themedStyles.smallPageIcon}>
            </Image>
            {navigatorTabIndex == 0 && <View style={themedStyles.bottomUnderline}/>}
          </View>
        )
      }} 
      component={BluetoothPage}
      listeners={{
        tabPress: () => {
          navigatorTabIndex=0
        }
      }}/>

      <Tab.Screen name="QRScan" options={{
        animation: 'none',
        tabBarIcon:() => (
          <View>
            <Image 
              source={require('./assets/qr-scan-icon.png')}
              style={themedStyles.smallPageIcon}>
            </Image>
            {navigatorTabIndex == 1 && <View style={themedStyles.bottomUnderline}/>}
          </View>
        )
      }} 
      component={QRScanPage}
      listeners={{
        tabPress: () => {
          navigatorTabIndex=1
        }
      }}/>

      <Tab.Screen name="Course" options={{
        animation: 'none',
        tabBarIcon:() => (
          <View style={themedStyles.bottomCircle}>
            <View>
              <Image
                source={require('./assets/add-icon.png')}
                style={themedStyles.bigPageIcon}>
              </Image>
              {navigatorTabIndex == 2 && <View style={[themedStyles.bottomUnderline, {top: 20}]}/>}
            </View>
          </View>
        )
      }} 
      component={CoursePage}
      listeners={{
        tabPress: () => {
          navigatorTabIndex=2
        }
      }}/>

      <Tab.Screen name="Clicker" options={{
        animation: 'none',
        tabBarIcon:() => (
          <View>
            <Image 
              source={require('./assets/clicker-icon.png')}
              style={themedStyles.smallPageIcon}>
            </Image>
            {navigatorTabIndex == 3 && <View style={themedStyles.bottomUnderline}/>}
          </View>
        )
      }} 
      component={ClickerPage}
      listeners={{
        tabPress: () => {
          navigatorTabIndex=3
        }
      }}/>

      <Tab.Screen name="Profile" options={{
        animation: 'none',
        tabBarIcon:() => (
          <View>
            <Image 
              source={require('./assets/profile-icon.png')}
              style={themedStyles.smallPageIcon}>
            </Image>
            {navigatorTabIndex == 4 && <View style={themedStyles.bottomUnderline}/>}
          </View>
        )
      }} 
      component={ProfilePage}
      listeners={{
        tabPress: () => {
          navigatorTabIndex=4
        }
      }}/>

    </Tab.Navigator>
  );
}

function GetMainColor() {
  const themeManager = React.useContext(ThemeContext);
  const currentTheme = themeManager.theme;
  return currentTheme.mainColor;
}

function ThemedStyles() {
  const themeManager = React.useContext(ThemeContext);
  const currentTheme = themeManager.theme;

  return (StyleSheet.create({

    bottomCircle: {
      top: -45,
      width: 80,
      height: 80,
      borderRadius: 40,
      alignSelf: 'center',
      backgroundColor: currentTheme.mainColor
    },
  
    bottomUnderline: {
      top: -25,
      width: 48,
      height: 5,
      borderRadius: 5,
      backgroundColor: currentTheme.primaryColor,
      alignSelf: 'center'
    },
  
    smallPageIcon: {
      resizeMode: 'contain',
      width: 56,
      height: 56,
      top: -30,
    },
  
    bigPageIcon: {
      top: 10,
      resizeMode: 'contain',
      width: 64,
      height: 64,
      alignSelf: 'center'
    },
  
  }));
}
