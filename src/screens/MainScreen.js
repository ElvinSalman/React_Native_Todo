import React from "react";
import {StyleSheet, FlatList, View, Text} from 'react-native';
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen=({addTodo, todos, removeTodo})=>{
    return(
        <View>
            <AddTodo onSubmit={addTodo} />
        
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo}/>}
            />

            {/* <View>
          fiq( todos.map(todo =strelka <Todo todo={todo} key={todo.id} />
          )fiq)
        </View> */}
        
        </View>
    )
}

const styles=StyleSheet.create({})