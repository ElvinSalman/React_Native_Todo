import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../Theme";

export const Navbar=({title})=>{
    // const {title}=props;
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height:70,
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:THEME.MAIN_COLOR,
        paddingBottom:10,
    },
    text:{
        fontSize:20,
        color:'white'
    }
})