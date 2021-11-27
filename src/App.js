import "./styles.css";
import { Counter } from "./comps/Counter";
import { useEffect, useState } from "react";
import { dbRef } from "./counterAPI";
import { runTransaction, onValue } from "firebase/database";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return onValue(
      dbRef,
      (snapshot) => {
        const value = snapshot.val() || 0;
        setCount(value);
      },
      {
        onlyOnce: false
      }
    );
  }, []);
  function incrementTrans() {
    //Transaction functions
    runTransaction(dbRef, (value) => {
      value = value + 1;
      setCount(value);
      return value;
    });
  }
  function decrementTrans() {
    runTransaction(dbRef, (value) => {
      value = value - 1;
      setCount(value);
      return value;
    });
  }

  const handleClick = (n) => {
    if (n === 1) {
      incrementTrans();
    } else {
      decrementTrans();
    }
  };
  return (
    <div className="App">
      <Counter count={count} handleClick={handleClick} />
    </div>
  );
}
