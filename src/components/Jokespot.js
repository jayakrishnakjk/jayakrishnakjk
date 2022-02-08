import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Jokespot(props) {

    const [value,setValue] =useState([])

 useEffect(()=>{

        axios.get('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
        .then(res=>{
            console.log('hhhhhhhh',res)
            setValue(res.data.jokes)
            console.log('iiiiiiiiiiii',value)
        })

 },[])

    return (
        <div>
             <table>
                <thead>
                <tr>
                    <th>category</th>
                    <th>type</th>
                    <th>joke</th>
                </tr>
                </thead>
                <tbody>
                    {
                 
                       value.map((item) => (
                            <tr key={item.id}>
                            <td style={{padding:'10px 0 10px 10px'}}>{item.category}</td>
                            <td style={{paddingLeft:'30px'}}>{item.type}</td>
                            <td style={{paddingLeft:'30px',color:'red'}}>{item.joke}</td>
                            <td/>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Jokespot;