import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../Theme";
import { AppCard } from "../components/ui/AppCard";

export const TodoScreen = ({ goBack, todo, onRemove }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Редактировать"/>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  title:{
    fontSize:20,
  },
  card:{
    marginBottom:20,
  }
});
