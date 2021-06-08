function App() {
  const [page, setPage] = useState("home");

  const goToPage = (newPage) => {
    setPage(newPage);
  };

  const showPage = () => {
    if (page === "home") return <Home />;
    if (page === "eat") return <Eat />;
    if (page === "drink") return <Drink />;
  };

  return (
    <main>
      <nav>
        <a onClick={() => goToPage("drink")}>Drink</a>
        <a onClick={() => goToPage("eat")}>Eat</a>
        <a onClick={() => goToPage("home")}>Home</a>
      </nav>
      {showPage()}
    </main>
  );
}


export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
