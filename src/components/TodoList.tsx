import Todo from './Todo'
import { useSelector } from 'react-redux'
import { TodoType } from '../types/types'
import { RootState } from '../store/store'

function TodoList() {
  const {todos} = useSelector((store:RootState)=> store.todo)
  return (
    <div className='todoList flex-column'>
      {
        todos?.map((todo:TodoType)=>(
          <Todo todo={todo} key={todo.id} />
        ))
      }
    </div>
  )
}

export default TodoList
