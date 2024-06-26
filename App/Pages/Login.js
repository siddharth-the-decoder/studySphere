import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

export default function Login() {
  return (
    <View style={styles.page}>
      <Image
        source={require("./../Assets/Images/login.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to StudySphere</Text>
        <Text style={{ textAlign: "center", marginTop: 80, fontSize: 20 }}>
          Login/Signup
        </Text>
        <View style={styles.button}>
          <Ionicons
            name="logo-google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
