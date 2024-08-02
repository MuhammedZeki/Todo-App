import React from 'react'
import Search from '../components/Search'
import TodoList from '../components/TodoList'

function Home() {
  return (
    <div className='home container'>
      <Search />
      <TodoList />
    </div>
  )
}

export default Home
