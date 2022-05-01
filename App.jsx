function App() {
  const state = store.getState();
  return (
    <div className="App">
      <input type="text" />
      <input type="text" placeholder="Enter Todo" />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}

export default App;
