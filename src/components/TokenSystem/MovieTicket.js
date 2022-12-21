import React from 'react';

class TicketBookingForm extends React.Component {
  state = {
    movie: '',
    date: '',
    time: '',
    tickets: 0,
    name: '',
    email: '',
    phone: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data (this.state) to your backend API for processing
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Movie:
          <select name="movie" value={this.state.movie} onChange={this.handleChange}>
            <option value="">Select a movie</option>
            <option value="Movie 1">Movie 1</option>
            <option value="Movie 2">Movie 2</option>
            <option value="Movie 3">Movie 3</option>
          </select>
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" name="time" value={this.state.time} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Tickets:
          <input type="number" name="tickets" value={this.state.tickets} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Book tickets</button>
      </form>
      </>
    );
  }
}

export default TicketBookingForm;
