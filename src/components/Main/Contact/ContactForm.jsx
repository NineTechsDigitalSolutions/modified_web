import React from 'react';

const ContactForm = () => {
  return (
    <section class='section'>
      <div class='container'>
        <div class='row mb-5 align-items-end'>
          <div class='col-md-6' data-aos='fade-up'>
            <h2>Contact Form</h2>
            <p class='mb-0'>Please use this form to get in touch with us</p>
          </div>
        </div>

        <div class='row'>
          <div class='col-md-4 ms-auto order-2' data-aos='fade-up'>
            <ul class='list-unstyled'>
              <li class='mb-3'>
                <strong class='d-block mb-1'>Address</strong>
                <span>
                  89E, Isurupura, Malabe, Sri Lanka
                </span>
              </li>
              <li class='mb-3'>
                <strong class='d-block mb-1'>Phone</strong>
                <span>+94 72 076 4777</span>
              </li>
              <li class='mb-3'>
                <strong class='d-block mb-1'>Email</strong>
                <span>contact@shengenholdings.com</span>
              </li>
            </ul>
          </div>

          <div class='col-md-6 mb-5 mb-md-0' data-aos='fade-up'>
            <form class='php-email-form'>
              <div class='row'>
                <div class='col-md-6 form-group'>
                  <label for='name'>Name</label>
                  <input
                    type='text'
                    name='name'
                    class='form-control'
                    id='name'
                    required
                  />
                </div>
                <div class='col-md-6 form-group mt-3 mt-md-0'>
                  <label for='name'>Email</label>
                  <input
                    type='email'
                    class='form-control'
                    name='email'
                    id='email'
                    required
                  />
                </div>
                <div class='col-md-12 form-group mt-3'>
                  <label for='name'>Subject</label>
                  <input
                    type='text'
                    class='form-control'
                    name='subject'
                    id='subject'
                    required
                  />
                </div>
                <div class='col-md-12 form-group mt-3'>
                  <label for='name'>Message</label>
                  <textarea
                    class='form-control'
                    name='message'
                    rows={100}
                    cols={50}
                    required
                  ></textarea>
                </div>

                <div class='col-md-12 mb-3'>
                  <div class='loading'>Loading</div>
                  <div class='error-message'></div>
                  <div class='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>

                <div class='col-md-6 form-group'>
                  <input
                    type='submit'
                    class='btn btn-primary d-block w-100'
                    value='Send Message'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
