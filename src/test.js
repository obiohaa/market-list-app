import React, {useState} from 'react';

const arr1 = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

const NewArr = ()=> {
   const boo = arr1.map(obj => {
       const {id, name}=obj;
       if(obj.id === 1){
           console.log(obj)
        return {...obj, name: 'John'}
       }
       return obj;
    });
    console.log(boo)
    return (
        <div>
            
        </div>
    )
}

export default NewArr