import JavaScript from "./Javascript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import Highlight from "./Highlight";
import TodoList from "./todos/TodoList";
import TodoItem from "./todos/TodoItem";
import ConditionalOutput from "./ConditionalOutput";
import Add from "./Add";
import { useSelector } from "react-redux";
import { LabState } from "../store";
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <Styles/>
     <Classes/>
     <TodoItem/>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
     <PathParameters/>
     <ConditionalOutput/>
     <JavaScript/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
   </div>
 )
}
export default Assignment3;