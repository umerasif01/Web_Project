import React, { useState } from 'react';
import './delete.css'
import { useEffect } from 'react';
import axios from "axios"


let x=0;

const DeleteBook = () => {
    const [allBooks, setBook] = useState([{}]);
    const [n,setN]=useState(0);
    const options = {
        url: "http://localhost:3001/getBook",
        method: "POST",
    };
    useEffect(()=>{
        
        axios(options)
        .then((response) => {
            const a = response.data;
            console.log(a)
            setBook(a);
            console.log("kaksaks",x);
        })
        .catch((err) => {
            console.log("err",err);
        });

    },allBooks)
        
    function Show(obj) {
        return <OneBook title={obj.title} author={obj.author} ISBN={obj.ISBN} description={obj.description} />;
    }

    return (
        <>
            <h1 id='title'>Delete BOOk</h1>
            <div className="box">
                <table className='table table-striped'>
                    <thead>
                       
                        <th>title</th>
                        <th>author</th>
                        <th>ISBN</th>
                        <th>Description</th>
                       
                    </thead>

                    <tbody>
                        {allBooks.map(Show)}
                    </tbody>
                </table>

            </div>

        </>
    )
}


const OneBook = (props) => {
    
    const delHandel = () => {

        x++;
        console.log(x);
        const request = {
            url: "http://localhost:3001/api/deleteBook",
            method: "POST",
            data: props
        };

        axios(request).then((response) => {
        console.log(response)
        }).catch((err) => {
        console.log(err)
        })

        
    }
        
    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.description}</td>
                <td><button className='dellbutt' onClick={delHandel}>delete</button></td>
            </tr>
        </>
    )
}

export default DeleteBook;