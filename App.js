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

const stack = createStackNavigator(
  {
    Splash: {
      screen: Splashscreen
    },
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },
    Home: {
      screen: Home
    },
    Details: {
      screen: ProductDetails
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

const MainNav = createAppContainer(stack);

export default class App extends Component {
  render() {
    return <MainNav />;
  }
}
