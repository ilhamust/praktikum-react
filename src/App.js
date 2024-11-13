import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form setelah submit
    setName("");
    setMessage("");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      navigate("/contact"); // Navigasi kembali ke halaman Contact
    }, 3000);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {isSubmitted && (
        <p style={{ color: "green" }}>Terima kasih, sudah mengirim pesan!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama Anda"
            required
          />
        </div>
        <div>
          <label>Pesan:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Masukkan pesan Anda"
            required
          />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
