import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Ini adalah tugas Royan</Text>
      <Text style={styles.centerText}>Ini adalah teks di tengah layar</Text>

      {/* Kontainer untuk kotak-kotak dengan Flexbox */}
      <View style={styles.flexContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: "#ff5733" }]}></View>

        {/* Kotak 2 */}
        <View style={[styles.box, { backgroundColor: "#33c1ff" }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // Latar belakang abu-abu terang
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  centerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 50,
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
