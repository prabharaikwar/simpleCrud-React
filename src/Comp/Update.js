import React,{useEffect, useState} from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    // const [data, setData] = useState([])
    const{id} = useParams();
    
    const [values, setValues] = useState({
      id: '',
      title:'',
      body:''
   })

   const navigate = useNavigate();

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/' +id)
      .then(res => setValues(res.data))
      .catch(err=> console.log(err));
    },[id])

    const handleUpdate=(e)=>{
      // e.preventDefault();
      axios.put('https://jsonplaceholder.typicode.com/posts/'+id, values)
      .then((res) => {
          console.log(res)
          navigate('/')
          
      }).catch((err) => console.log(err))
    }

  return (
    <div className="w-100 vh-100  bg-light shadow-sm d-flex justify-content-center align-items-center">
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Edit Data</h1>
        <form >
            <div className='mb-2 '>
                <div className="input-group-text">
                    <label htmlFor="id" className='form-label'>Id:&nbsp;&nbsp;&nbsp; &nbsp;</label>
                    <input type="text" name='id' className='form-control'  value={values.id} onChange={e=> setValues({...values, id:e.target.value})}/>
                </div>
            </div>
            <div className='mb-2'>
                <div className="input-group-text">
                    <label htmlFor="Title" className='form-label'>Title:&nbsp;</label>
                    <input type="text" name='title' className='form-control'  value={values.title} onChange={e=> setValues({...values, title:e.target.value})}/>
                </div>
            </div>
            <div className='mb-2'>
                <div className="input-group-text">
                    <label htmlFor="Body" className='form-label'>Body:</label>
                    <input type="text" name='body' className='form-control'  value={values.body} onChange={e=> setValues({...values, body:e.target.value})}/>
                </div>
            </div>
        </form>
        <div className="btn-group" role="group" aria-label="Third group">
            <button type="button" className="btn btn-success" onClick={()=>{handleUpdate(values.id)}}>Edit</button>
            <Link to='/' className='btn btn-primary' > Back</Link>
        </div>

    </div>
</div>
  )
}

export default Update