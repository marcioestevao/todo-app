import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

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
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' 
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' 
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' 
                    onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

