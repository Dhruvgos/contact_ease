import React, { useContext, useRef, useState } from 'react';
import { contactContext } from '../context/ContactContext';

function CardBody(props) {
  const ref = useRef(null);
  const { cnt, updatecontact } = props;
  const refClose = useRef(null);
  const { deleteContact, updateContact, contact } = useContext(contactContext);

  return (
    <div className="row-lg-4 row-md-6 mb-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src='https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png'
              // src='https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
              alt="Contact Image"
              className="card-img-top"
              style={{ width: '100%', height: '170px' }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                <strong>Email:</strong> {props.email}<br />
                <strong>Contact:</strong> {props.phone}
              </p>
              <div className="btn-group" role="group">
                <span
                  style={{ cursor: 'pointer' }}
                  data-bs-toggle="modal"
                  data-bs-target="#myModale1"
                  onClick={() => { updatecontact(cnt) }}
                  className="material-symbols-outlined btn btn-primary"
                >
                 
<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="20px" height="20px"><path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/></svg>
                </span>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() => { deleteContact(props.cnt._id); }}
                  className=" btn btn-danger mx-2"
                >
                 

                 <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 135 140" width="20px" height="20px"><path d="M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
