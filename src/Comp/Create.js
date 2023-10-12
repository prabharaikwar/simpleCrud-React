import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";


const Create = () => {
     const [values, setValues] = useState({
        id: '',
        title:'',
        body:''
     })
      
     const navigate = useNavigate();
     const addData=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', values)
        .then((res) => {
            console.log(res)
            navigate('/')
            
        }).catch((err) => console.log(err))

     }

    return (
        <div className="w-100 vh-100  bg-light shadow-sm d-flex justify-content-center align-items-center">
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add User</h1>
                <form>
                    <div className='mb-2 '>
                        <div className="input-group-text">
                            <label htmlFor="id" className='form-label'>Id:&nbsp;&nbsp;&nbsp; &nbsp;</label>
                            <input type="text" name='id' className='form-control' placeholder='Enter Id' 
                            onChange={e=> setValues({...values, id:e.target.value})}/>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className="input-group-text">
                            <label htmlFor="Title" className='form-label'>Title:&nbsp;</label>
                            <input type="text" name='Title' className='form-control' placeholder='Enter Title' 
                            onChange={e=> setValues({...values, title:e.target.value})}/>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className="input-group-text">
                            <label htmlFor="Body" className='form-label'>Body:</label>
                            <input type="text" name='Body' className='form-control' placeholder='Enter Body' 
                            onChange={e=> setValues({...values, body:e.target.value})}/>
                        </div>
                    </div>
                </form>
                <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-success" onClick={(e)=>{addData(e)}}>Add</button>
                    <Link to='/' className='btn btn-primary' > Back</Link>
                </div>

            </div>
        </div>
    )
}

export default Create