import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const GetData = () => {
    const [userdata, setUserdata] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                setUserdata(res.data)
            }).catch((err) => console.log(err))

    }, [])

    // Delete
    const deleteData=(id)=>{
        const confirm= window.confirm('Would you like to delete?');
        if(confirm)(
          axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res)=>{
            // setUserdata((i)=>{i.filter((userdata)=>userdata.id!==id)})
            setUserdata((prevPosts) => prevPosts.filter((userdata) => userdata.id !== id));
            console.log(userdata)
            //   navigate('/');
            // document.location.reload();
          }).catch((err)=>console.log(err))
        )
        
     }

  

    return (
        <div className='container mx-auto'>
            <h1>All data of the users</h1>
            {/* <button className='btn btn-success'>Add Data</button> */}
            <Link to='/create' className='btn btn-success'> Add+</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    {/* <td>{item.id}</td> */}
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td> <Link to={`/update/${item.id}`} className='btn btn-success'> Edit</Link></td>
                                    <td><button type="button" className="btn btn-danger" onClick={e=> deleteData(item.id)}>Delete</button></td>
                                </tr>
                            )

                        })



                    }

                </tbody>
            </table>
        </div>
    )
         
}

export default GetData;