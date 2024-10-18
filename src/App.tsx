import { useState } from "react";
import BillCost from "./components/BillCost";
import FriendRating from "./components/FriendRating";
import Output from "./components/Output";
import ResetButton from "./components/ResetButton";
import YourRating from "./components/YourRating";

function App() {
  const [billCost, setBillCost] = useState("");
  const [yourRating, setYourRating] = useState("");
  const [friendRating, setFriendRating] = useState("");

  const resetTip = () => {
    setBillCost("");
    setYourRating("");
    setFriendRating("");
  };

  return (
    <div>
      <h1>Tip Calcualtor</h1>
      <BillCost billCost={billCost} setBillCost={setBillCost} />
      <YourRating yourRating={yourRating} setYourRating={setYourRating} />
      <FriendRating
        friendRating={friendRating}
        setFriendRating={setFriendRating}
      />
      <Output
        billCost={billCost}
        yourRating={yourRating}
        friendRating={friendRating}
      />
      <ResetButton onResetHandler={resetTip} />
    </div>
  );
}

export default App;
