import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

const { width } = Dimensions.get("window");

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const [accessToken, setAccessToken] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "801480532662-b4voan849bedrurpqbdn2f96fir4bn5m.apps.googleusercontent.com",
    expoClientId:
      "801480532662-1m94ocfpdqla45tlp1f0t740rrtt7597.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type == "success") {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
    }
  }, [response]);
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
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Ionicons
            name="logo-google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </TouchableOpacity>
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
