type ResetButtonProps = {
  onResetHandler: () => void;
};
const ResetButton = ({ onResetHandler }: ResetButtonProps) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={onResetHandler}>Reset</button>
    </div>
  );
};

export default ResetButton;
