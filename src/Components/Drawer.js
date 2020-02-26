import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Thumbnail, Icon } from "native-base";
import * as f from "firebase";
import { connect } from "react-redux";

class Drawer extends Component {
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            height: 250,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Thumbnail
            large
            source={{
              uri: this.props.auth.user
                ? this.props.auth.user.avatar
                : "https://cdn.pixabay.com/photo/2020/01/16/17/21/pantheon-4771206_960_720.jpg"
            }}
          />
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
            {this.props.auth.user ? this.props.auth.user.name : ""}
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            {this.props.auth.user ? this.props.auth.user.email : ""}
          </Text>

          <TouchableOpacity
            onPress={() => {
              f.auth()
                .signOut()
                .then(() => {
                  this.props.navigation.navigate("Login");
                });
            }}
            style={{
              width: 100,
              height: 40,
              backgroundColor: "tomato",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <Text style={{ color: "white" }}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{ width: "100%", flexDirection: "row" }}
          >
            <View
              style={{
                width: "30%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#55C6F9",
                  borderRadius: 100
                }}
              >
                <Icon
                  style={{ color: "white", fontSize: 25 }}
                  name="home"
                  type="AntDesign"
                />
              </View>
            </View>
            <View style={{ width: "70%", justifyContent: "center" }}>
              <Text style={{ fontSize: 22 }}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Drawer);
