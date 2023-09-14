import React, { useState, useEffect } from 'react';
import CardBody from './CardBody';
import { useNavigate } from 'react-router-dom';
import AddContact from './AddContact';
import { useContext } from 'react';
import { contactContext } from '../context/ContactContext';

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const context = useContext(contactContext);
    const { contact, getAllContacts,isLoading ,updateContact} = context;

  const [contactDetails, setContactDetails] = useState([]);
  
  const [contacts,setContacts] =useState({id: "", ename: "", eemail: "", ephone: ""})
  const [search, setsearch] = useState('')
  useEffect(() => {
    if(localStorage.getItem('token')){
        //  console.log(localStorage.getItem('token'))
         getAllContacts(localStorage.getItem('token'));
    }
    else{
     navigate('/login')
    }

     
     // eslint-disable-next-line
 }, [localStorage.getItem('token')])
 const updatecontact = (currentContact) => {
  // ref.current.click();
  setContacts({id: currentContact._id,ename:currentContact.name, eemail: currentContact.email,  ephone: currentContact.phone})
}
  
  const addNewContact = (newContact) => {
    // Update the contact list with the new contact
    setContactDetails([...contactDetails, newContact]);
  };

  const handleClick = (e)=>{ 
    updateContact(contacts.id, contacts.ename, contacts.eemail,contacts.ephone);
}
const onChange = (e)=>{
  setContacts({...contacts, [e.target.name]: e.target.value})
  // setshowAlert(false)
}


  return (
    <div   className="container mt-3">
   
      <div className="mb-2 mt-2 d-flex justify-content-between ">
        <div >

          <AddContact onAddContact={addNewContact} />
        </div>
        <div className="col">

    <form className="form-inline mx-1">
        <div className="input-group">
            <input onChange={(e)=>{
              setsearch(e.target.value)
            }} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </div>
        </div>
    </form>
            </div>
</div>
      

      <div   className="container  "> 
        <div className="modal fade" id="myModale1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Enter Contact Details</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      onChange={onChange}
                      className="form-control"
                      id="eemail"
                      name='eemail'
                      placeholder="Enter email"
                      value={contacts.eemail}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      onChange={onChange}
                      className="form-control"
                      id="ephone"
                      name='ephone'
                      placeholder="Enter phone"
                      value={contacts.ephone}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      onChange={onChange}
                      className="form-control"
                      id="ename"
                      name='ename'
                      placeholder="Enter name"
                      value={contacts.ename}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Update contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <h1>All Contacts</h1>
      <div  className="row">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          contact.filter((item)=>{
            return search.toLowerCase() ===''?item:
            item.name.toLowerCase().includes(search);
          }).map((cnt, index) => (
            <CardBody
              cnt={cnt}
              key={index}
              name={cnt.name}
              phone={cnt.phone}
              email={cnt.email}
              id={cnt._id}
              updatecontact={updatecontact}
              />
              ))
              )}
      </div>
{/* //update */}
      
{/* update ovber */}

    </div>
  );
}

export default Home;

