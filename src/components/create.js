import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
    let history = useNavigate();

    const [EmpId, setEmpId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPinCode] = useState('');
    const [Contry, setCountry] = useState('');

    // const [checkbox, setCheckbox] = useState(false);
    // console.log(checkbox)
    const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            EmpId,
            firstName,
            address,
            city,
            pincode,
            Contry

        }).then(() => {
            history("/View");
        })
    }
    return (
        <div className='create'>
            <h1>Add New Employee <b>Details</b> </h1>
            <div className='ul'></div>
            <Form>
                    <label> EmpId :</label><br/>
                    <input placeholder='Enter ID' onChange={(e) => setEmpId(e.target.value)}/> <br/>

                    <label> Name :</label><br/>
                    <input placeholder='Enter Name' onChange={(e) => setFirstName(e.target.value)}/><br/>
              
                    <label>Address :</label><br/>
                    <input placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)}/><br/>
             
                    <label>City :</label><br/>
                    <input placeholder='Enter City' onChange={(e) => setCity(e.target.value)}/><br/>
               
                    <label>Pin Code :</label><br/>
                    <input placeholder='Enter Pin Code' onChange={(e) => setPinCode(e.target.value)}/><br/>
              
                    <label>Country :</label><br/>
                    <input placeholder='Enter Country' onChange={(e) => setCountry(e.target.value)}/><br/>
               
                <Button onClick={postData} type='submit'>CREATE EMPLOYEE</Button>
            </Form>
        </div>
    )
}