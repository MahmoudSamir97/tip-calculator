type FriendRatingProps = {
  friendRating: string;
  setFriendRating: (val: string) => void;
};
const FriendRating = ({ friendRating, setFriendRating }: FriendRatingProps) => {
  return (
    <div>
      <h3>How did your friend like the service?</h3>
      <select
        value={friendRating}
        onChange={(e) => setFriendRating(e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default FriendRating;
