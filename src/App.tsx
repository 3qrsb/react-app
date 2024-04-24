import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Astana", "Shymkent", "Almaty", "Aktau", "Oral"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
