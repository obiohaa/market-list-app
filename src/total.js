import React, {useState} from 'react'

const Total = ({listItem})=> {
    var prices = listItem.map(({price})=> parseInt(price)).reduce((a,b)=>a+b, 0)
    return(
        <p className="title">{prices}</p>
    )
 }

export default Total
