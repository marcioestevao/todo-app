import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// Foi limpado pois com o redux, mão precisa ficar passando os eventos por parametros
// export default class Todo extends Component {
//     render(){
//         return (
//             <div>
//                 <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
//                 <TodoForm />
//                 <TodoList />
//             </div>
//         )
//     }
// }

// E por fim transformado em componente
export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)