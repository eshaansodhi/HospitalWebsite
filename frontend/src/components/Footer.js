import React, { useState } from 'react';

const Footer = () => {
    const [query, setQuery] = useState('');

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSendQuery = () => {
        // Logic to send the query via email
        // You can implement the email sending functionality here
        console.log('Sending query:', query);
    };

    return (
        <footer>
            <div>
                <input type="text" value={query} onChange={handleQueryChange} placeholder="Enter your query" />
                <button onClick={handleSendQuery}>Send Query</button>
            </div>
        </footer>
    );
};

export default Footer;