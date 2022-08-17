import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { USERS } from '../../Data/Users.js';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from 'react-native-elements';



const styles = StyleSheet.create({
    storyBorder: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    // innerBorder: {
    //     width: 70,
    //     height: 70,
    //     borderRadius: 50,
    //     borderWidth: 3,
    //     alignItems: "center",
    // },
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor:'black',
    },
})

export default function Stories() {
    return (
        <View style={{ marginTop: 16, }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <View key={index}>
                        <LinearGradient colors={['#CA1D7E', '#E35157', '#F2703F']} style={styles.storyBorder}>
                            <View key={index} style={styles.innerBorder}>
                                <Image source={{ uri: story.image }} style={styles.story} />
                            </View>
                        </LinearGradient>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                        }} >{story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + "..." : story.user.toLowerCase()}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}