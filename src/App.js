import { useState } from "react";
import ageCalculator from "./ageCalculator";


function App() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2020);
  const [alert, setAlert] = useState({msg : "", type : ""})

  const handleSumbit = (e) => {
    e.preventDefault();
 
    const date = `${month}-${day}-${year}`;
    const message = ageCalculator(date);
  
    setAlert({msg: message.msg, type: message.type})
  }

  return (
    <main>
      <h1 className="heading">Age Calculator App</h1>
      <h3>Please enter your date of birth</h3>
      <form onSubmit={handleSumbit}>
        <label>
          Day
          <input type="number"  min="1"  max="31" value={day} onChange={(e) => setDay(e.target.value)} />
        </label>
        <label>
          Month
          <input type="number" min="1" max="12" value={month} onChange={(e) => setMonth(e.target.value)} />
        </label>
        <label>
          Year
          <input type="number" min="1900" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        
        <div>
          <button type="submit">Calculate Age</button>
        </div>
       
      </form>

   
      <h2 className={`alert-${alert.type}`}>{alert.msg}</h2>
     
    </main>
  );
}

export default App;
