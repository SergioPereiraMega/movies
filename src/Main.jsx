import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Image, Text, Keyboard } from "react-native";

export default function Main() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);

  const handleSearch = () => {
    Keyboard.dismiss();
    axios.get("https://www.omdbapi.com/?apikey=93064b0b&t=" + movieName).then((result) => {
      setMovie(result.data);
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput value={movieName} onChangeText={setMovieName} style={styles.input} />
        <Button onPress={handleSearch} title='Buscar' style={styles.button} />
      </View>
      {movie && <Image style={styles.image} source={{ uri: movie.Poster }} />}
      {!movie && <Text style={styles.buscarname}>Busque una película</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  input: {
    width: 200,
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 5,
    paddingHorizontal: 10,
  },
  buscarname: {
    flexDirection: "row",
    justifyContent: "center",
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
});
