import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from './../Theme';
import { AppButton } from "./ui/AppButton";
import { addSvg } from "./ui/Svg";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            //error
            Alert.alert('Название дела не может быть пустым!!!');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название дел..."
                autoCorrect={false}
                autoCapitalize="none"
            />
            {/* <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button> */}
            <AppButton onPress={pressHandler}>
                {addSvg}
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10
    }
})