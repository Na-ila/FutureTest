import React from 'react';
import {Container, Alert} from 'react-bootstrap';

const DataError = () => {
    return (
        <>
            <Container className='text-center mt-3 text-danger'>
                <Alert>
                    Что-то пошло не так.
                </Alert>
            </Container>
        </>
    )
};

const AddUserError = () => {
    return (
        <>
            <Container className='text-center mt-3 text-danger'>
                <Alert>
                    Заполните все поля.
                </Alert>
            </Container>
        </>
    )
};

export {
    DataError,
    AddUserError
};