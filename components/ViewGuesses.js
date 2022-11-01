export default function ViewGuesses({ guesses, correctGuesses }) {
  console.log("correctGuesses", correctGuesses);
  console.log("guesses", guesses);
  return (
    <>
      {guesses.map((guess, i) => {
        const color =
          correctGuesses[0]["Words"].indexOf(guess) > -1
            ? "bg-green-700"
            : "bg-yellow-400";
        return (
          <>
            <div className={`${color} m-3 rounded p-1 text-center`}>
              {`${guess}`}
            </div>
          </>
        );
      })}
    </>
  );
}
