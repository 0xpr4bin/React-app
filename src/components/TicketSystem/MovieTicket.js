import React, { useState } from 'react';
import '../../App.css';

export const MovieTicket = () => {
  const [state, setState] = useState({
    movie: '',
    date: '',
    time: '',
    tickets: 0,
    name: '',
    email: '',
    phone: '',
    formVisible: false // add new state to track the form visibility
  });
  const handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data (this.state) to your backend API for processing
  }

  const toggleFormVisibility = () => {
    this.setState(prevState => ({ formVisible: !prevState.formVisible }));
  }

    return (
      <>
        <div className='movies'>
          {/* Movie posters for all options */}
          <img src={process.env.PUBLIC_URL + '/images/johnwick.jpg'} alt="Movie 1 poster" onClick={this.toggleFormVisibility} />
          <img src={process.env.PUBLIC_URL + '/images/ghosted.jpg'} alt="Movie 2 poster" onClick={this.toggleFormVisibility} />
          <img src={process.env.PUBLIC_URL + '/images/lost.jpg'} alt="Movie 3 poster" onClick={this.toggleFormVisibility} />
        </div>
        
        {/* Display the ticket booking form only if it is visible */}
        {this.state.formVisible && (
          <div className='ticket'>
            <form className='ticketForm' onSubmit={this.handleSubmit}>
              <label className='ticketLabel'>
                Movie:
                <select name="movie" value={this.state.movie} onChange={this.handleChange}>
                  <option value="">Select a movie</option>
                  <option value="Movie 1">Movie 1</option>
                  <option value="Movie 2">Movie 2</option>
                  <option value="Movie 3">Movie 3</option>
                </select>
              </label>
              <br />
              <label className='ticketLabel'>
                Date:
                <input className='inputTicket' type="date" name="date" value={this.state.date} onChange={this.handleChange} />
              </label>
              <br />
              <label className='ticketLabel'>
                Time:
                <input className='inputTicket' type="time" name="time" value={this.state.time} onChange={this.handleChange} />
              </label>
              <br />
              <label className='ticketLabel'>
                Tickets:
                <input className='inputTicket' type="number" name="tickets" value={this.state.tickets} onChange={this.handleChange} />
              </label>
              <br />
              <label className='ticketLabel'>
                Name:
                <input className='inputTicket' type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </label>
              <br />
              <label className='ticketLabel'>
                Email:
                <input className='inputTicket' type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </label>
              <br />
              <label className='ticketLabel'>
                Phone:
                <input className='inputTicket' type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </label>
              <br />
              <button className='simple-btn' type="submit">Book tickets</button>
            </form>
          </div>
        )}
      </>
    )
  }
export default  MovieTicket;
