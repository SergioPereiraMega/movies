import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Footer from "./src/Footer";
import Header from "./src/Header";
import Main from "./src/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
