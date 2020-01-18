import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodosContainer = (props) => {
   return(
       <div>
           <ul>
                {props.todos.map((todo, index) => <Todo key={index} todo={todo} />)}
           </ul> 
       </div>
   ) 
}

const msp = state => {
    return { todos: state.todos }
}

export default connect(msp)(TodosContainer);