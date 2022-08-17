import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from '../newPost/FormikPostUploader'

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
    <FormikPostUploader />
  </View>
);
const Header = () => (
  <View style={styles.headerContainer}>
  <View style={{flexDirection : "row", alignItems : "center"}}>
    <TouchableOpacity>
      <Image
        source={{ uri: "https://img.icons8.com/ios/50/ffffff/left.png" }}
        style={{ width: 40, height: 40 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    </View>
    <Image source={{ uri : "https://img.icons8.com/material/144/2187cd/checkmark--v1.png"}} style={{width :35,height:35 , marginTop :5}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText : {
    color : "white",
    fontWeight : "700",
    fontSize : 20,
    marginLeft : 25.5
  }
});

export default AddNewPost;
