import React, { useState } from 'react';

const EventListingPage = () => {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [filter, setFilter] = useState('');

    const addEvent = (e) => {
        e.preventDefault();
        const newEvent = { title, date, category };
        setEvents([...events, newEvent]);
        setTitle('');
        setDate('');
        setCategory('');
    };

    const filteredEvents = events.filter(event => 
        filter === '' || event.category === filter
    );

    return (
        <div style={{ textAlign:'center',padding: '20px' }}>
            <h1>Event Listing</h1>
            <label>
                Filter by Category:
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
            </label>
            <ul>
                {filteredEvents.map((event, index) => (
                    <li key={index}>
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>Category: {event.category}</p>
                    </li>
                ))}
            </ul>
            <h2>Add New Event</h2>
            <form onSubmit={addEvent}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default EventListingPage;