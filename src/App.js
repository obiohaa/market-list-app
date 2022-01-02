import React, {useState, useEffect, useRef} from 'react';
import List from './list'
import FlashMessage from './alert'
import Total from './total'

function App() {
  const refContainer = useRef(null);
  const [input, setInput] = useState({ marketItem: '', marketPrice: ''});
  const [listItem, setListItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [flashMessage, setFlashMessage] = useState({show: false, msg: '', type:''})

  const handleChange = (e)=>{
  const name = e.target.name;
  const value= e.target.value;
  setInput({...input, [name]:value});
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!input.marketItem || !input.marketPrice){
    //display alert
    showFlashMessage(true, 'please enter a list and price', 'danger')
  } else if (input && isEditing) {
    //alert
    showFlashMessage(true, 'Item has been edited', 'success')
    const abc = listItem.map((newList)=> {
      if(newList.id === editID){
        return {...newList, list:input.marketItem, price:input.marketPrice}
      }
      return newList;
    })
    setListItem(abc);
    setInput({marketItem: '', marketPrice: ''});
    setEditId(null);
    setIsEditing(false);
    //alert
  } else{
    //display alert
    refContainer.current.focus();
    showFlashMessage(true, 'item added to the list', 'success')
    const addListItem = {id: new Date().getTime().toString(), list:input.marketItem, price:input.marketPrice};
    setListItem([...listItem, addListItem]);

    setInput({marketItem: '', marketPrice: ''});
  }
}

const showFlashMessage = (show, msg, type) => {
  setFlashMessage({show, msg, type})
}


//clear the whole list
const clearList = ()=>{
  //alert
  showFlashMessage(true, 'Items cleared', 'danger')
  setListItem([]);
}

//delete one item
const deleteItem = (id)=>{
//show alert
showFlashMessage(true, 'item deleted', 'danger')
setListItem(listItem.filter((list)=> list.id !== id))
}

const editItem = (id)=>{
  //show alert
  showFlashMessage(true, 'Edit Item', 'success')
  const edit = listItem.find((item)=> item.id === id);
  // console.log(edit);
  setIsEditing(true);
  setEditId(id);
  setInput({marketItem: edit.list, marketPrice: edit.price});
}

useEffect(()=>{
  refContainer.current.focus();
},[])

  return (
    <div>
    <section className="section-center">
      <form action="" className="grocery-form">
        {flashMessage.show && < FlashMessage {...flashMessage} showFlashMessage={showFlashMessage} />}
        <h3>Market List</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="List" value={input.marketItem} name="marketItem" onChange={handleChange} ref={refContainer}/>
          <input type="number" className="grocery" placeholder="Price" value={input.marketPrice} name="marketPrice" onChange={handleChange}/>
          <button type="submit" onClick={handleSubmit} className="submit-btn">{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
    </section>
    {listItem.length > 0 && (
      <section className="section-down">
      <div className="grocery-container">
        <List listItem={listItem} deleteItem={deleteItem} editItem={editItem}/>
        <article className="total">
          <p className="title">Total</p>
          < Total listItem={listItem}/>
        </article>
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
    </section>
    )}
    </div>
  );
}

export default App;
