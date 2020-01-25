import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import Logo from "../assets/logo.png";
import * as f from "firebase";

export default class Login extends Component {
  state = {
    Email: "",
    Passsword: ""
  };

  Login = () => {
    f.auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Passsword)
      .then(() => {
        alert("You are logged in");
      })
      .catch(e => alert(e));
  };

  render() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          width: "100%"
        }}
      >
        <Image source={Logo} style={{ width: 200, height: 80 }} />

        <View style={{ width: "100%", marginTop: 50, alignItems: "center" }}>
          <TextInput
            style={{
              width: "80%",
              padding: 20,
              borderRadius: 10,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "gainsboro",
              fontSize: 22
            }}
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Email"
            onChangeText={val => this.setState({ Email: val })}
            value={this.state.Email}
          />
          <TextInput
            style={{
              width: "80%",
              padding: 20,
              borderRadius: 10,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "gainsboro",
              marginTop: 20,
              fontSize: 22
            }}
            placeholderTextColor="gray"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={val => this.setState({ Passsword: val })}
            value={this.state.Passsword}
          />
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#FA9501",
              borderRadius: 10,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => this.Login()}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 20, marginBottom: 10 }}>
            OR
          </Text>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#FA9501",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
