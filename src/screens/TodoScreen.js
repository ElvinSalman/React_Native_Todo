import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { THEME } from "../Theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppButton } from "../components/ui/AppButton";
import { FontAwesome } from "@expo/vector-icons";
import {backSvg, editSvg, trashSvg} from '../components/ui/Svg';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = title => {
    onSave(todo.id, title);
    setModal(false);
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <AppButton onPress={() => setModal(true)}>
          {editSvg}
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack} >
              {backSvg}
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          >
            {trashSvg}
          </AppButton>
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
    width: Dimensions.get('window').width/3,
    // width:Dimensions.get('window').width>400? 150:120,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
  },
});
