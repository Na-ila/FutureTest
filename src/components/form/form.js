import React from 'react';
import {Container, Modal, Form, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {form, addNewUser, addNewUserError} from '../../actions';
import {AddUserError} from '../errors/errors';

const AddForm = () => {

    const dispatch = useDispatch();
    const isAddNewUserError = useSelector(state => state.addNewUserError);

    const formToggle = () => {
        dispatch(form(false));
    }

    const newUser= {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    const addNewId = (e) => {
        newUser.id = e.target.value
    };

    const addNewFirstName = (e) => {
        newUser.firstName = e.target.value
    };

    const addNewLastName = (e) => {
        newUser.lastName = e.target.value
    };

    const addNewEmail = (e) => {
        newUser.email = e.target.value
    };

    const addNewPhone = (e) => {
        newUser.phone = e.target.value
    };


    const submit = (e) => {
        e.preventDefault();
        if (newUser.id && newUser.firstName && newUser.lastName && newUser.email && newUser.phone) {
            dispatch(addNewUser(newUser));
            dispatch(addNewUserError(false));
            dispatch(form(false));
        } else {
            dispatch(addNewUserError(true))
        }
    }

    return (
        <>
            <Container>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={() => formToggle()}>
                    <Modal.Title>Добавление нового пользователя</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupID">
                                <Form.Control type="id" placeholder="Enter id" name='id' value={newUser[0]} onChange={addNewId}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Control type="firstname" placeholder="Enter firstname" name='firstName' value={newUser[1]} onChange={addNewFirstName}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupLastName">
                                <Form.Control type="lastName" placeholder="Enter lastname" name='lastName' value={newUser[2]} onChange={addNewLastName}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter e-mail" name='email' value={newUser[3]} onChange={addNewEmail}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Control type="phone" placeholder="Enter phone" name='phone' value={newUser[4]} onChange={addNewPhone}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="dark" type='submit' onClick={submit}>Добавить в таблицу</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Container>
            {isAddNewUserError ? <AddUserError/> : null}
        </>
    )
};

export default AddForm;