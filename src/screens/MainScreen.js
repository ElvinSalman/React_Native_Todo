import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Text, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../Theme";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('screen').width - THEME.PADDING_HORIZONTAL * 2)

  useEffect(()=>{
    const update=()=>{
      const width=Dimensions.get('screen').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    }
    Dimensions.addEventListener('change', update);

    return ()=>{
      Dimensions.removeEventListener('change', update);
    }
  })

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
      />
    </View>
  )

  if (todos.length === 0) {
    content =
      <View style={styles.imgWrap}>
        <Image style={styles.image} source={require('../../assets/no-item.png')} />
      </View>
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {content}

      {/* <View>
          fiq( todos.map(todo =strelka <Todo todo={todo} key={todo.id} />
          )fiq)
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
