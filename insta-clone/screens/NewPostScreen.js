import { View, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
})

const NewPostScreen = () => {
  return (
      <View style={styles.container}>
      <AddNewPost/>
    </View>
  )
}

export default NewPostScreen