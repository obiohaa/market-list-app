import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const List = ({listItem, deleteItem, editItem})=> {
    let total = 0;
    return (
    <div className="grocery-list">
        {listItem.map((lists)=>{
            // console.log(lists)
            const{id, list, price} = lists;
            return(
            <div>
            <article key={id} className="grocery-item">
                <p className="title">{list}</p>
                <p className="title ">{price}</p>
                <div className="btn-container">
                <button className="delete-btn" onClick={()=> deleteItem(id)}><AiFillDelete /></button>
                <button className="edit-btn" onClick={()=> editItem(id)}><AiFillEdit /></button>
                </div>
            </article>
            </div>
            )
        })}
    </div>
    )
}

export default List
