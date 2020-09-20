import React, { useEffect, useState, Fragment } from 'react';
import List from './employeeList';
import { employeeActions } from '../../actions/employeeAction';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/navbar';

const Home = () => {
    const dispatch = useDispatch();
    const employeeReducer = useSelector(state => state.employee);
    const [employeeData, setEmployeeData] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        dispatch(employeeActions.fetchDetails())
    },[])

    useEffect(() => {
        setEmployeeData(employeeReducer.employees)
    },[employeeReducer])

    const changeHandle = e => {
        setSearchText(e.target.value)
        const filter = employeeReducer.employees.filter(data => {
            return data.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
        })
        setEmployeeData(filter)
    }

    return(
        <Fragment>
        <NavBar />
        <List employeeData = {employeeData} employeeReducer={employeeReducer} changeHandle={changeHandle} searchText={searchText} isLoading={employeeReducer.isLoading}/>
        </Fragment>
    )
}
export default Home