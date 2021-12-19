import React, { useState } from 'react'
import "./Home.css"
import { AuthContext } from '../context/stockContext';
import { useContext } from "react";

const admin = require("../db.json");

function Home() {
    const { handleClick } = useContext(AuthContext);
    const [admins, setAdmins] = useState(admin);


    const handlechange = (event) => {
        const { value } = event.target
        
         const data = admin.filter((el) => {
             if (el[0].includes(value.toUpperCase())) {
                 return el;
              }
         })
        setAdmins(data);
        
        
        


    }

    

    
   
    return (
    
        <div>
            
            <h1>Trinkerr</h1>
            <input className='inp' type="text" name="" id="" placeholder='search stock' onChange={handlechange}/>

            <div>
                <div>

                </div>
            </div>


            {admins.map((el) => (
                
                <div className='container'>
                    {
                       
                        Math.floor((el[1] - el[2]) / el[2]) < 0 ?
                            <>
                                
                                <div>
                                     <div style={{ "color": "red" }}><h1>{el[0].split("::")[0]}</h1></div>
                                <div style={{ "color": "grey" }}>{el[0].split("::")[1]}</div>
                                   </div>
                               
                                <div className='action'>
                                    <div className="div1">
                                        <h3 style={{ "color": "red" }}>{el[1]}</h3>
                                    <div>
                                        <img height="48px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6IU6mJbfJdIgfUEL8x00t5EHRscsn2rH9Nl3kfoowXZlbFppfhOKJCR5V0xU47faL1A&usqp=CAU" alt="" />
                                        <span style={{ "color": "red" }}>{ ((el[1] - el[2]) / el[2]).toFixed(3)}%</span>
                                    </div>
                                    </div>
                                     <div className='div2'>
                                        <button onClick={() => { handleClick(el) }}><img height="50px" src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-add-icon-png-image_323822.jpg" alt="" /></button>
                                        <div className='msg'><p>add to wishlist</p></div>
                                     </div>
                                </div>
                               

                                
                                </>
                            
                            :
                            <>
                                <div>
                                     <div style={{ "color": "teal" }}><h1>{el[0].split("::")[0]}</h1></div>
                                <div style={{ "color": "grey" }}>{el[0].split("::")[1]}</div>
                                </div>
                                <div className="action">
                                    <div className='div1'>
                                    <h3 style={{ "color": "teal" }}>{el[1]}</h3>
                                    <div><img height="48px" src="https://media.istockphoto.com/vectors/abstract-green-zigzag-up-arrow-vector-id1133861602?k=20&m=1133861602&s=170667a&w=0&h=J9pJ8r_nY3A2uhSaekXMR0KKVxwQBM5IoH1Oc4Nur0g=" alt="" />
                                        <span style={{ "color": "#0dd80d" }}>+{((el[1] - el[2]) / el[2]).toFixed(3)}%</span>
                                    </div>
                                    </div>
                                    <div className='div2'>
                                        <button onClick={() => { handleClick(el) }}><img height="50px" src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-add-icon-png-image_323822.jpg" alt="" /></button>
                                        <div className='msg'><p>add to wishlist</p></div>
                                     </div>
                                    
                                </div>


                                </>
                        
                        
                            
                       
                       
                    }
                   
                    
                   
                </div>


            ))}
            
            
        </div>
    )
}

export default Home
