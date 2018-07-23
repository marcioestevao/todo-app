import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        // padrão do ECMASCRIPT, onde está sendo extraido de this.props as functions e as propriedades 
        // descritas entre as chaves
        const { add, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                {/* <div className='col-xs-12 col-sm-9 col-ms-10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
                </div>
                <div className='col-xs-12 col-sm-3 col-ms-2'>
                    <button className='btn btn-primary'><i className='fa fa-plus'></i></button>
                </div>  */}
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' 
                        onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' 
                        onClick={() => search()}></IconButton>
                    <IconButton style='default' icon='close' 
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)