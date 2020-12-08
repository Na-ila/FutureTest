import Axios from 'axios';
import React, {useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Container, Spinner} from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {addCardInfo, showCard, error, loadingData, addData} from '../../actions';
import CardContent from '../card/card';
import {DataError} from '../errors/errors';

const Table = () => {

    const dispatch = useDispatch();
    const dataURL = useSelector(state => state.dataURL);
    const persons = useSelector(state => state.persons);
    const cardDisplay = useSelector(state => state.cardDisplay);
    const isError = useSelector(state => state.error);
    const isLoading = useSelector(state => state.loading);

    const getPersonData = async (url) => {
        try {
            const data = await Axios.get(url);
            dispatch(addData(data.data));
            dispatch(error(false));
            dispatch(loadingData(false));
        } catch (e) {
            dispatch(error(true));
            dispatch(loadingData(false));
        }
    };

    const columns = [
        {dataField: 'id', text: 'ID', sort: true, filter: textFilter(), headerStyle: {
            backgroundColor: '#c8e6c9'
          }},
        {dataField: 'firstName', text: 'FIRSTNAME', sort: true, filter: textFilter(), headerStyle: {
            backgroundColor: '#c8e6c9'
          }},
        {dataField: 'lastName', text: 'LASTNAME', sort: true, filter: textFilter(), headerStyle: {
            backgroundColor: '#c8e6c9'
          }},
        {dataField: 'email', text: 'E-MAIL', sort: true, filter: textFilter(), headerStyle: {
            backgroundColor: '#c8e6c9'
          }},
        {dataField: 'phone', text: 'PHONE', sort: true, filter: textFilter(), headerStyle: {
            backgroundColor: '#c8e6c9'
          }}
    ]

    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];

    const rowEvents = {
        onClick: (e, row) => {
            dispatch(addCardInfo(row));
            dispatch(showCard());
        }
    };

    useEffect(() => {
        getPersonData(dataURL);
    }, []);

    return (
        <>
            {isError ? <DataError/> : 
                isLoading 
                ? (
                <Container className='text-center mt-5'>
                    <Spinner animation='border'/>
                </Container>) 
                : (<Container className='mt-4'>
                <BootstrapTable
                bootstrap4
                keyField='name'
                data={persons}
                columns={columns}
                pagination={paginationFactory()}
                defaultSorted={ defaultSorted } 
                filter={ filterFactory() }
                rowEvents={rowEvents}
                />
                </Container>)
            }
       
            {cardDisplay ? <CardContent/> : null}
        </>
    )
}

export default Table;