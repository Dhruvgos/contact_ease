import React, { useState, useContext } from "react";
import { contactContext } from "../context/ContactContext";

function AddContact(props) {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { addContact, contact } = useContext(contactContext);

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.id]: e.target.value });
  };

  const handleAddContact = async () => {
    addContact(contactDetails.email, contactDetails.phone, contactDetails.name);
    setContactDetails({name:'',email:'',phone:''})
  };

  return (
    <span>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        
<svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="100 -960 1000 1000" width="20"><path fill="currentcolor" d="M458-456v135q0 9.25 6.825 16.125 6.824 6.875 16 6.875Q490-298 497-304.875T504-321v-135h135q9.25 0 16.125-6.825 6.875-6.824 6.875-16Q662-488 655.125-495T639-502H504v-137q0-9.25-6.825-16.125-6.824-6.875-16-6.875Q472-662 465-655.125T458-639v137H321q-9.25 0-16.125 6.825-6.875 6.824-6.875 16Q298-470 304.875-463T321-456h137Zm22.45 340q-75.09 0-141.488-28.411-66.399-28.412-116.234-78.188-49.836-49.777-78.282-116.053Q116-404.929 116-480.284q0-75.612 28.47-141.736 28.471-66.123 78.348-116.126 49.878-50.002 116.052-77.928Q405.045-844 480.284-844q75.602 0 141.718 27.891 66.115 27.892 116.13 77.848 50.016 49.957 77.942 116.243Q844-555.732 844-480.366q0 75.366-27.891 141.424-27.892 66.059-77.835 115.996-49.943 49.936-116.211 78.441Q555.795-116 480.45-116Zm-.45-46q132.513 0 225.256-92.744Q798-347.487 798-480t-92.744-225.256Q612.513-798 480-798t-225.256 92.744Q162-612.513 162-480t92.744 225.256Q347.487-162 480-162Zm0-318Z"/></svg>
        New
      </button>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Enter Contact Details</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={contactDetails.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    onChange={handleChange}
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone"
                    value={contactDetails.phone}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={contactDetails.name}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleAddContact}
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                Add contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default AddContact;
