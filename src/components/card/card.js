import React from 'react';
import {Container, Card, ListGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const CardContent = () => {

    const cardInfo = useSelector(state => state.cardInfo);

    if (!cardInfo.address) {
        return (
            <Container className='mb-4'>
                <Card style={{ width: '18rem' }}>
                <Card.Header closeButton>Нет информации</Card.Header>
                </Card>
            </Container>
        )
    }

    const {streetAddress, city, state, zip} = cardInfo.address;

    return (
        <>
            <Container className='mb-4'>
                <Card style={{ width: '18rem' }}>
                <Card.Header closeButton>Выбран пользователь {cardInfo.firstName}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Описание: {cardInfo.description}</ListGroup.Item>
                    <ListGroup.Item>Адрес проживания: {streetAddress}</ListGroup.Item>
                    <ListGroup.Item>Город: {city}</ListGroup.Item>
                    <ListGroup.Item>Провинция/штат: {state}</ListGroup.Item>
                    <ListGroup.Item>Индекс: {zip}</ListGroup.Item>
                </ListGroup>
            </Card>
            </Container>
        </>
    )
};

export default CardContent;