import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-primary">About Our Contact App</h2>
          <p>
            Welcome to ContactEase! This application allows you to manage
            your contacts easily.
          </p>
          <p>
            With this app, you can create, edit, and delete contact details,
            making it convenient to keep track of your contacts.
          </p>
          <p>
            Whether you're a professional looking to organize your business
            contacts or an individual who wants to manage personal connections,
            our app has you covered.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="text-success">Key Features</h2>
          <ul className="list-group">
            <li className="list-group-item">Secure User Authentication</li>
            <li className="list-group-item">
              Create, Read, Update, Delete (CRUD) Operations
            </li>
            <li className="list-group-item">Search and Filter Contacts</li>
            <li className="list-group-item">
              Responsive Design for Any Device
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h2 className="text-info">Meet the Developer</h2>
          <p>
            Hi, I'm Dhruv Goswami, a passionate developer and a student at JECRC
            University. I created this app to enhance my skills and provide a
            useful tool for managing contacts.
          </p>
          <p>
            If you have any questions, suggestions, or feedback, feel free to
            reach out to me:
          </p>
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a
                href="mailto:dhruvgoswami603@gmail.com"
                className="text-dark text-decoration-none"
              >
                <i className="fas fa-envelope"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="40px"
                  height="40px"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  />
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  />
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  />
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  />
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  />
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/dhruvgos2801?t=yEFWZx8PR6IyNmTQXsZLYA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info text-decoration-none"
              >
                <i className="fab fa-twitter"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="35px"
                  height="35px"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/dhruv-goswami-045b35227"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none"
              >
                <i className="fab fa-linkedin"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="42px"
                  height="42px"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  />
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
