import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
// import "semantic-ui-css";

export default function Read() {
    let navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {
        let { id, firstName, address, city, pincode, Country  } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', firstName);
        localStorage.setItem('Address', address);
        localStorage.setItem('city', city);
        localStorage.setItem('pinCode', pincode);
        localStorage.setItem('country', Country);

}
const onDelete = (id) => {
    axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
 .then(() => {
    getData();
    navigate("/read");
})

}
  const getData = () => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}


    return (
        <div className='rdbox'>
            <h1>Customer Deatils</h1>
            <Table className='tRow' >
                <Table.Header> 
                    <Table.Row >
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Pin Code</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>

                        {/* <Table.HeaderCell>Actions</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row >
          <Table.Cell className='tRow'>{data.firstName}</Table.Cell>
           <Table.Cell>{data.address}</Table.Cell>
           <Table.Cell>{data.city}</Table.Cell>
           <Table.Cell>{data.pincode}</Table.Cell>
           <Table.Cell>{data.Contry}</Table.Cell>

        
           <Link to='/update'>
           <Table.Cell> 
           <Button onClick={() => setData(data)}>Update</Button>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
            </Table.Cell>
            </Link>
        </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}