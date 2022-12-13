import React from 'react';
import '../../App.css';


const Contacts = () => {
  const [formStatus, setFormStatus] = React.useState()
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container-mt-5">
      <h2 className="mb-4">Please fill below to contact us.</h2>
      <form onSubmit={onSubmit}>
        
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" placeholder="Enter name" type="text" id="name" required />
     
        
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder="Enter Email" type="email" id="email" required />
     
        
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" placeholder="Enter message" id="message" required />
     
       <button >Submit</button>
          {formStatus}
       
      </form>
    </div>
  )
}
export default Contacts;