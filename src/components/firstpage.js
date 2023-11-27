import React from 'react';
import { useNavigate } from 'react-router';

export default function FirstPage() {
    let navigate = useNavigate();

    const changeCreate = () => {
       navigate("/create");
    }

    const changeView = () => {
        navigate("/View");
     }

     const changeUpdate = () => {
        navigate("/update");
     }


    return (
        <div className='index'>
              <h1>Customer <b>Deatils</b></h1>
              <div className="iul"></div>
           
          <div className="indexBtn">

            <h2 className='content'><b>Create</b> new Employee Details</h2>
            <button className='crebtn' onClick={changeCreate}>Create</button>

            <h2 className='content'><b>Read </b>/ view all Employee Details</h2>
            <button className='readbtn' onClick={changeView}>Read</button>
            
            <h2 className='content'><b>Update</b> existing Employee Details</h2>
            <button className='upbtn' onClick={changeUpdate}>Update</button>

            <h2 className='content'><b>Delete</b> existing Employee Details</h2>
            <button className='delbtn' onClick={changeView}>Delete</button>
         </div>
        </div>
    )
}