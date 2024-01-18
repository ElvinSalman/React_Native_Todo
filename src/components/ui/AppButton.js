import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { THEME } from "../../Theme";

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.btn, backgroundColor: color }}>
                <Text style={styles.txt}>{children}</Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    btn: {
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: 'white'
    }
})