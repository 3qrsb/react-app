import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visible, check] = useState(false);
  return (
    <div>
      {visible && <Alert onClose={() => check(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => check(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
