import React, { useState } from 'react';
import axios from 'axios';
import { User, Mail, Calendar, MapPin } from 'lucide-react';

function App() {
  const [student, setStudent] = useState({ name: '', email: '' });

  const register = async (e) => {
    e.preventDefault();
    try {
      // This sends the data to your backend on port 5055
      await axios.post('http://localhost:5055/register', student);
      alert("Registration Successful! Data saved to MongoDB Atlas.");
    } catch (err) {
      alert("Error: Make sure your server is running on port 5055!");
    }
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', margin: 'auto', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>🎓 Event Portal</h1>
        <p style={{ textAlign: 'center', color: '#7f8c8d' }}>Register for upcoming campus workshops</p>
        
        <form onSubmit={register}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}><User size={16}/> Student Name</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
              onChange={(e) => setStudent({...student, name: e.target.value})} required />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}><Mail size={16}/> College Email</label>
            <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
              onChange={(e) => setStudent({...student, email: e.target.value})} required />
          </div>
          
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Confirm Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;