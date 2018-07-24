import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'


export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

// Foi criado a function search abaixo, porque assim está pegando o atual description diretamente do
// state. do modo que foi desabilitado abaixo, todo o local que precisa chamar o serch, teria que passar 
// o parâmetro. Porém tem local que em um determinado momento precisa passar o parametro e em outro não.
// como por exemplo o done e pendenting. Se a lista está filtrada, al clicar no done, tem que passar o parâmetro 
// para que a lista continue filtrada. Caso contrário não passa o parâmetro.
// Tem também o problema de várias outras actions estar chamando esta action. Então se não fizesse isto (chamar
// o state diretamente) teríamos que passar a description para todas estas actions para depois passar para 
// o search. Em outros casos mais simples, não se recomenda chamar o state diretamente da action.

// export const search = (description) => {
//     const search = description ? `&description__regex=/${description}/` : ''
//     const request = axios.get(`${URL}?sort=-createdAt${search}`)
//     return {
//         type: 'TODO_SEARCHED',
//         payload: request
//     }
// }

export const search = () => {
    return(dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}


export const add = (description ) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        // Nem o markAsDone como o markAsPending precisa disparar o dispatch "type", após a ação
        // a evolução do estado necessário neste caso (atualização do item na lista) é feito após o disparo 
        // da action search
        // .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}
