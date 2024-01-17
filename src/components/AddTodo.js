import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { THEME } from './../Theme';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
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
            <Button onPress={pressHandler} title="Добавить" />
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