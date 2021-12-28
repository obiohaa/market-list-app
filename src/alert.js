import React, {useEffect} from 'react'

const FlashMessage = ({msg, type, showFlashMessage})=> {
    useEffect(()=> {
        const displayIn = setTimeout(()=>{
            showFlashMessage()
        }, 3000)
        return ()=> clearTimeout(displayIn)
    })
    return (
       <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default FlashMessage
