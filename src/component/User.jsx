import React from 'react'
import { AuthContext } from "../context/stockContext"
import { useContext } from "react";
import "./Home.css"



function User() {
    const { value } = useContext(AuthContext);
    return (
        
        <div>
            <h1>MY Wishlist</h1>
            {value.map((el) => (
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
                                    
                                    
                                </div>


                                </>
                        
                        
                            
                       
                       
                    }
                   
                    
                   
                </div>

            ))}
        </div>
    )
}

export default User
