import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>My Project</h2>
      </nav>
      
      <main className="content">
        <h1>Welcome to My App</h1>
        <p>This is where your amazing content goes.</p>
        <button onClick={() => alert('Clicked!')}>Get Started</button>
      </main>
    </div>
  );
}

export default App;
