import React, { Component } from "react";
import { Text, View } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import "./Config";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import ProductDetails from "./src/screens/ProductDetails";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerComponent from "./src/Components/Drawer";
import { Provider } from "react-redux";
import store from "./src/store";

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
  },
  {
    headerMode: "none"
  }
);

const stack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Details: {
      screen: ProductDetails
    }
  },
  {
    headerMode: "none"
  }
);

const MainNav = createAppContainer(stack);

const Drawer = createDrawerNavigator(
  {
    Splash: {
      screen: Splashscreen
    },
    MainStack: {
      screen: MainNav
    },
    Auth: {
      screen: AuthStack,
      navigationOptions: {
        drawerLockMode: "locked-closed"
      }
    }
  },
  {
    contentComponent: DrawerComponent
  }
);

const DrawerNav = createAppContainer(Drawer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerNav />
      </Provider>
    );
  }
}
