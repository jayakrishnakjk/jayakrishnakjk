import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td style={{color:'red',paddingLeft:'40px'}} >{contact.taskName}</td>
      <td style={{color:'red',paddingLeft:'40px'}}>{contact.description}</td>
      <td style={{color:'red',paddingLeft:'20px'}}>{contact.start}</td>
      <td style={{color:'red',paddingLeft:'20px'}}>{contact.end}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          style={{marginLeft:'20px'}}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}  style={{marginLeft:'8px'}}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;