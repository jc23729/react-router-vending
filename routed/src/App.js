function App() {
  const [page, setPage] = useState("home");

  const goToPage = (newPage) => {
    setPage(newPage);
  };

  const showPage = () => {
    if (page === "chips") return <Home />;
    if (page === "Sardines") return <Eat />;
    if (page === "Soda") return <Drink />;
  };

  return (
    <main>
      <nav>
        <a onClick={() => goToPage("chips")}>Drink</a>
        <a onClick={() => goToPage("Sardines")}>Eat</a>
        <a onClick={() => goToPage("Soda")}>Home</a>
      </nav>
      {showPage()}
    </main>
  );
}


export default App;
