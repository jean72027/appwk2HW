import React from "react";
import { View } from "react-native";
import Header from "./Header";
import AlbumLists from "./AlbumLists";

const App = () => {
  return (
    <View>
      <Header />
      <AlbumLists />
    </View>
  );
};

export default App;