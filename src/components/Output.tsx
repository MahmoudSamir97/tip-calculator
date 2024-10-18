type OutputProps = {
  billCost: string;
  yourRating: string;
  friendRating: string;
};
const Output = ({ billCost, yourRating, friendRating }: OutputProps) => {
  const totalTip = (Number(yourRating) + Number(friendRating)) / 2 || 0;
  console.log(totalTip, "totalTip");
  const calcTotal = (): number => {
    const total = Number(billCost) + totalTip;
    return total;
  };
  return (
    <div>
      {billCost && (
        <h2>
          You pay {calcTotal()}$ ({billCost}$ + ${totalTip} tip)
        </h2>
      )}
    </div>
  );
};

export default Output;
