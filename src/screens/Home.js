import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import Logo from "../assets/logo.png";
import * as f from "firebase";

export default class Home extends Component {
  state = {
    data: [],
    isLoading: true
  };

  componentDidMount() {
    f.database()
      .ref("products")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(item => {
          this.setState({
            data: [...this.state.data, { ...item.val(), id: item.key }]
          });
        });
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight, width: "100%", flex: 1 }}
      >
        {this.state.isLoading ? (
          <View
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {console.log(this.state)}
            <Text>Loading</Text>
          </View>
        ) : (
          <View style={{ width: "100%", flex: 1 }}>
            <View
              style={{
                width: "100%",
                height: 50,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  onPress={() => this.props.navigation.toggleDrawer()}
                  name="menu"
                  type="Feather"
                />
              </View>
              <View
                style={{
                  width: "80%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 50
                }}
              >
                {console.log(this.props)}
                <Image source={Logo} style={{ width: 120, height: 40 }} />
              </View>
            </View>

            <ScrollView style={{ width: "100%", flex: 1 }}>
              {this.state.data.map(item => (
                <View
                  key={item.id}
                  style={{ width: "100%", alignItems: "center" }}
                >
                  <View style={{ width: "90%", marginTop: 20 }}>
                    <Image
                      source={{
                        uri: item.Image
                      }}
                      style={{ width: "100%", height: 200, borderRadius: 10 }}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Details", {
                          data: item
                        })
                      }
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: "bold",
                          marginTop: 10
                        }}
                      >
                        {item.Name}
                      </Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 10 }}>{item.Description}</Text>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: "orange",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 10,
                        marginTop: 10
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Buy now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
