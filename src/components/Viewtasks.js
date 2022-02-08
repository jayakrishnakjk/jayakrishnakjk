import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

const Viewtasks = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    taskName: "",
    description: "",
    start: "",
    end: "",
  });

  const [editFormData, setEditFormData] = useState({
    taskName: "",
    description: "",
    start: "",
    end: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      taskName: addFormData.taskName,
      description: addFormData.description,
      start: addFormData.start,
      end: addFormData.end,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      taskName: editFormData.taskName,
      description: editFormData.description,
      start: editFormData.start,
      end: editFormData.end,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      taskName: contact.taskName,
      description: contact.description,
      start: contact.start,
      end: contact.end,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container" >
        <h2>List of Tasks</h2> 
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>TaskName</th>
              <th>Description</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Task</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="taskName"
          required="required"
          placeholder="Enter a TaskName..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="start"
          required="required"
          placeholder="Enter a Start Time..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="end"
          required="required"
          placeholder="Enter End Time..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Viewtasks;