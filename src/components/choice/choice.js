import React from 'react';
import {Container, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {smallData, bigData, showButton} from '../../actions';

const Choice = () => {

    const dispatch = useDispatch();

    const table = (func) => {
        dispatch(func());
        dispatch(showButton());
    }

    return (
        <Container className='text-center'>
            <h3 className='text-center mt-5 text-dark'>Выберите набор данных</h3>
            <ButtonGroup aria-label="Basic example" className='mt-5 text-center'>
                <Link to="/database"><Button className='mr-3' variant="secondary" onClick={()=>{table(smallData)}}>Маленький</Button></Link>
                <Link to="/database"><Button variant="secondary" onClick={()=>{table(bigData)}}>Большой</Button></Link>
            </ButtonGroup>
        </Container>
    );
}
export default Choice;