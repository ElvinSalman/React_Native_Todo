import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {

  const [todoId, setTodoId]=useState(null);
  const [todos, setTodos] = useState([]);

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

    setTodos(prev => [...prev, { id: Date.now().toString(), title }])
  }

  const removeTodo=(id)=>{
    setTodos(prev=>prev.filter(todo=>todo.id !== id))
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo}/>
  );

  if(todoId){
    content = <TodoScreen />;
  }

  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});