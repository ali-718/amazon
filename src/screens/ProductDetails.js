import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import Logo from "../assets/logo.png";

export default class ProductDetails extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    console.log(this.props.navigation.getParam("data"));
    this.setState({
      data: this.props.navigation.getParam("data")
    });
  }

  render() {
    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              width: "20%",
              height: 50,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon name="arrowleft" type="AntDesign" />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 50
            }}
          >
            <Image source={Logo} style={{ width: 120, height: 40 }} />
          </View>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView style={{ width: "100%", flex: 1 }}>
            <Image
              source={{
                uri: this.state.data.Image
              }}
              style={{ width: "100%", height: 300 }}
            />
            <View
              style={{
                width: "100%",
                paddingVertical: 10,
                paddingHorizontal: 10
              }}
            >
              <Text
                style={{ fontSize: 22, fontWeight: "bold", color: "black" }}
              >
                {this.state.data.Name}
              </Text>
              <Text style={{ marginTop: 10 }}>
                {this.state.data.Description}
              </Text>
              <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
                Rs. {this.state.data.Price}
              </Text>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Buy now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
