type YourRatingProps = {
  yourRating: string;
  setYourRating: (val: string) => void;
};
const YourRating = ({ yourRating, setYourRating }: YourRatingProps) => {
  return (
    <div>
      <h3>How did you like th service?</h3>
      <select
        value={yourRating}
        onChange={(e) => setYourRating(e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default YourRating;
