type BillCostProps = {
  billCost: string;
  setBillCost: (val: string) => void;
};

const BillCost = ({ billCost, setBillCost }: BillCostProps) => {
  return (
    <div>
      <h3>how much was the bill ?</h3>
      <input
        type="text"
        value={billCost}
        onChange={(e) => setBillCost(e.target.value)}
      />
    </div>
  );
};

export default BillCost;
