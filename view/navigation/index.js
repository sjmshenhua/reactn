import React, { Component } from 'react'
import { createStackNavigator, createAppContainer,createBottomTabNavigator,} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'


import {
    TestPages,
    HomePage,
    HomePage1
} from '../pages/index'

const BottomTab = createBottomTabNavigator(
    {
        Home: HomePage,
        Home1:HomePage1
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            // not home router, hidden home bottom tab
            tabBarVisible: navigation.state.index > 0 ? false : true,
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let icon = 'ios-home-outline'
                if (routeName === 'Home') {
                    // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    icon = 'md-home'
                } else if (routeName === 'Home1') {
                    // iconName = `ios-options${focused ? '' : '-outline'}`;
                    icon = 'ios-home'
                }
                return <Ionicons
                    name={icon}
                    size={22}
                    style={{ color: focused ? '#9013fe' : '#ccc' }} />
            },
        }),
        tabBarOptions: {
            activeTintColor: '#9013fe',
            inactiveTintColor: '#ccc',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#FFF',
            },
        }
    }
)

const SketchRouter = createStackNavigator(
    {
        BottomTab:{
            screen:BottomTab,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        TestPages: {
            screen: TestPages,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        

    },
    {
        headerBackTitleVisible: false,
    }
)

export default createAppContainer(SketchRouter)