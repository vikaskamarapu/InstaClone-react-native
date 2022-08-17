import { View, Text, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../Data/Posts'
import { Divider } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})

export default function HomeScreen() {
  return <View style={styles.container}>
    <Header />
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stories />
      <Divider width={1} orientation='vertical' style={{ marginVertical: 10}} />
      {
        POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))
      }
    </ScrollView>
    <BottomTabs icons={bottomTabIcons}/>
  </View>
}
