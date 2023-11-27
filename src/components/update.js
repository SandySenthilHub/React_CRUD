import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);

    const [EmpId, setEmpId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPinCode] = useState('');
    const [Contry, setCountry] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))

        setEmpId(localStorage.getItem('EmpId'));
        setFirstName(localStorage.getItem('Name'));
        setAddress(localStorage.getItem('Address'));
        setCity(localStorage.getItem('city'));
        setPinCode(localStorage.getItem('pinCode'));
        setCountry(localStorage.getItem('country'));

    }, []);

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
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
        <div className='update'>
            <h1>Update Employee <b>Details</b></h1>
            <div className='ul'></div>
            <Form>
                <label> Emp Id :</label><br />
                <input placeholder='Enter ID' onChange={(e) => setEmpId(e.target.value)} /> <br/>

                <label>Name :</label><br />
                <input placeholder='Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />

                <label>Address :</label><br />
                <input placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} /><br />

                <label>City :</label><br />
                <input placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} /><br />

                <label>Pin Code :</label><br />
                <input placeholder='Pin Code' value={pincode} onChange={(e) => setPinCode(e.target.value)} /><br />

                <label>Country :</label><br />
                <input placeholder='Country' value={Contry} onChange={(e) => setCountry(e.target.value)} /><br />


                {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field> */}
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}