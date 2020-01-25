import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Logo from "../assets/logo.png";
import * as f from "firebase";

export default class Splashscreen extends Component {
  componentDidMount() {
    f.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("u are logged in");
        console.log(user);
        this.props.navigation.navigate("Home");
      } else {
        console.log("u are not logged in");
        this.props.navigation.navigate("Login");
      }
    });
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image source={Logo} style={{ width: 200, height: 80 }} />
      </View>
    );
  }
}
