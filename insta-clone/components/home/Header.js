import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 10,
    },
    logo: {
        width: 130,
        height: 50,
        resizeMode: 'contain',
    },
    iconContainer: {
        flexDirection: "row",
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain",
    },
    unReadBadge:{
        backgroundColor:'red',
        position:"absolute",
        left:20,
        bottom:18,
        height:18,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        zIndex:100,
    },
    unReadBadgeText:{
        color:"white",
        fontWeight:'600',
        paddingHorizontal:6,
    }
})

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/images/download.png')} />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/plus-2-math.png" }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/hearts.png" }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unReadBadge}>
                        <Text style={styles.unReadBadgeText}>80</Text>
                    </View>
                    <Image style={styles.icon} source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/facebook-messenger.png" }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}