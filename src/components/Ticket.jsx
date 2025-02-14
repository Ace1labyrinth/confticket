import React from "react";
import "./Ticket.css";

const Ticket = ({ fullName, email, githubUsername, avatar}) => {
    return (
      <div className="ticket-container">
        <h1>
          Congrats, <span>{fullName}</span>!
        </h1>
        <p>Your ticket is ready.</p>
        <p>
          We've emailed your ticket to {email} and will send updates leading up
          to event.
        </p>
        <div className="ticket-card">
          <div className="ticket-header">
            <h2>Coding Conf</h2>
            <p>Jan 20, 2025 / Eti-Osa, Lagos</p>
          </div>
          <div className="ticket-body">
            <img src={avatar} alt="Avatar" className="ticket-avatar" />
            <div className="ticket-info">
              <h3>{fullName}</h3>
              <p>@{githubUsername}</p>
            </div>
          </div>
          <div className="ticket-number">#6090</div>
        </div>
      </div>
    );
}





export default Ticket;
