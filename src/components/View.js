import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import * as Icon from 'react-bootstrap-icons';


// import "semantic-ui-css";

export default function View() {
    let navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {
        let { id, EmpId, firstName, address, city, pincode, Country } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('#',EmpId);
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
                navigate("/View");
            })

    }
    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }


    return (

        <div className='View'>
            <div className='Inner'>
                <h1>Customer <b>Deatils</b></h1>


                <input type='text' placeholder='Search' className='search'></input>
                <div class="icon"><Icon.Search /></div>

                <table className='viewTable'>

                    <tr>
                        <th className='id'><Icon.Hash/></th>
                        <th className='name'>Name</th>
                        <th className='add'>Address</th>
                        <th className='city'>City</th>
                        <th className='code'>Pin Code</th>
                        <th className='country'>Country</th>
                        <th className='actions'>Actions</th>


                    </tr>



                    {APIData.map((data) => {
                        return (
                            <tr >
                                <td>{data.EmpId}</td>
                                <td>{data.firstName}</td>
                                <td>{data.address}</td>
                                <td>{data.city}</td>
                                <td>{data.pincode}</td>
                                <td>{data.Contry}</td>


                                <Link to='/update'>
                                    <td>
                                        <Button onClick={() => setData(data)} className="edit"><Icon.PenFill /></Button>
                                    </td>
                                    <td>
                                        <Button onClick={() => onDelete(data.id)} className="del"><Icon.TrashFill /></Button>
                                    </td>
                                </Link>
                            </tr>
                        )
                    })}

                </table>
                <h3> Showing <b>5</b> out of <b>25</b> Entries</h3>
                <div className='pg'>
                    <Button><Icon.ArrowLeft/></Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button><Icon.ArrowRight/></Button>

                </div>
            
            </div>
        </div>
    )


}