import { useState } from "react";
import { data } from "./data"
import List from "./list";
const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">       
        <h3>{people.length} Birthdays today</h3>
        <List people ={people}/>
        <button className="btn btn-block" onClick={clearAll}>
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
