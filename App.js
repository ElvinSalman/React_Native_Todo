import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id:'1', title:' Learn something'}
  ]);

  const addTodo = (title) => {
    // const newTodo={
    //   id: Date.now().toString(),
    //   title
    // }

    // setTodos(todos.concat([newTodo]));

    // setTodos((prevTodos)=>{
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos((prev) => [...prev, { id: Date.now().toString(), title }]);
  };

  const removeTodo = (id) => {

    const todo=todos.find(t=>t.id===id);

    Alert.alert(
      'Удаление элемента',
      `Вы уверены что хотите удалить ${todo.title}?`,
      [
        {
          text:'Отмена',
          style:'cancel'
        },
        {text:'Удалить',
        style:'destructive',
        onPress:()=>{
          setTodoId(null)
          setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }},
      ],
      {cancelable:false},
    )
  };

  const updateTodo=(id, title)=>{
    setTodos(old=>old.map(todo=>{
      if(todo.id===id){
        todo.title=title;
      }
      return todo;
    }))
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={(id) => {
        setTodoId(id);
      }}
    />
  );

  if (todoId) {
    const selectedTodo=todos.find(todo=> todo.id === todoId);
    content = <TodoScreen onSave={updateTodo} onRemove={removeTodo} todo={selectedTodo} goBack={()=>setTodoId(null)}/>;
  }

  return (
    <View>
      <Navbar title="ToDo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
