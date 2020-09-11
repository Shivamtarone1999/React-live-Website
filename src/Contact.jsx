import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <>

      <h2 className="mt-5 text-center">Contact Us</h2>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {/* Form Start */}
            <form action="https://formspree.io/mdowrjpz" method="POST">
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" class="form-control" name="name" value="" placeholder="David Mark" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" name="email" value="" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="number" class="form-control" name="phone" value="" placeholder="9191919500" />
              </div>


              <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" name="message" value="" placeholder="Type your message here..." rows="4"></textarea>
              </div>

              <div>
                <NavLink to="#" className="submit_btn btn">Submit</NavLink>
              </div>

            </form>
            {/* Form Ends */}
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;