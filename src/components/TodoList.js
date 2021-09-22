import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList({theTodo, settheTodo}) {
    
    return (
        <div>
            
            {
               theTodo.map((To) => (
                    <Todo theTodo={theTodo} settheTodo={settheTodo} To={To} key={To.id} name={To.name} description={To.description} complete={To.complete}/>
               ))
           }
           
        </div>
    )
}

/*{  theTodo.filter(Todo => Todo.name).length > 0 &&
 <h5 className="showTodoR">{theTodo.filter(Todo => !Todo.complete).length} uncompleted tasks</h5>
} */


// <input type="checkbox" checked={To.complete} onChange={handleTodo}/>