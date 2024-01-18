import React from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

    let content=(
        <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
      />
    )

            if(todos.length===0){
                content= 
                <View style={styles.imgWrap}>
                    <Image style={styles.image} source={require('../../assets/no-item.png')}/>
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
    imgWrap:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        height:300
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
});
