import "./App.css";
import { useEffect, useState } from "react";
import IncomeForm from "./components/Income/IncomeForm";
import IncomeList from "./components/Income/IncomeList";

function App() {
  const [screen, setScreen] = useState("list");
  const [selectedIncome, setSelectedIncome] = useState({});

  useEffect(() => {
    if (selectedIncome && selectedIncome._id) setScreen("form");
  }, [selectedIncome]);
  return (
    <div className="App">
      <div>
        {screen === "form" && (
          <IncomeForm
            title={selectedIncome._id ? "Update" : "Add"}
            selectedIncome={selectedIncome}
            setScreen={setScreen}
          />
        )}
      </div>
      <div>
        {screen === "list" && (
          <IncomeList
            setScreen={setScreen}
            setSelectedIncome={setSelectedIncome}
          />
        )}
      </div>
    </div>
  );
}

export default App;
