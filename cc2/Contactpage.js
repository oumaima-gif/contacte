import React from 'react';

 function Contactpage(props,deleteContact) {
  return (
    <tr>
        <td>{props.contact.Name}</td>
        <td>{props.contact.Phone}</td>
        <td>{props.contact.ville}</td>
        <td><input onClick={()=> deleteContact(props)} type={'button'} value="supprimer" style={{backgroundColor:"red", fontSize:"10px",cursor:"pointer"}}/></td>
    </tr>
  )
}
export default Contactpage;