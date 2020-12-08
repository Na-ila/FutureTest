import React from 'react';
import {Button, Container, Navbar} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import logo from './logo.png';
import Form from '../form/form';
import {form} from '../../actions';
import './header.css';

const Header = () => {

    const dispatch = useDispatch();
    const isForm = useSelector(state => state.form);
    const isButton = useSelector(state => state.button);

    const formToggle = () => {
        dispatch(form(true));
        console.log(isForm);
    }

    return (
        <>
            <Navbar collapseOnSelect expand='md' className='navbar'>
                <Container>
                    <Navbar.Brand href='/' className='text-dark'>
                        <img
                            src={logo}
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='logo'
                        /> MY DATABASE
                    </Navbar.Brand>
                    {isButton ? (<Button variant="dark" onClick = {() => formToggle()}>Добавить</Button>) : null}
                </Container>
            </Navbar>
            {isForm ? (<Form/>) : null}
        </>
    );
};

export default Header;