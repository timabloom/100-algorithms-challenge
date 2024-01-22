export function electionsWinners(votes: number[], k: number): number {
  let mostVotes = 0;
  votes.filter((votes) => {
    if (votes > mostVotes) mostVotes += votes;
  });
  const mostVotesEqual = votes.filter((votes) => votes === mostVotes);
  if (mostVotesEqual.length > 1) {
    return 0;
  }
  const MaxVotesArray: number[] = [];
  for (let i = 0; i < votes.length; i++) {
    const maxVotes = (votes[i] += k);
    if (maxVotes > mostVotes) {
      MaxVotesArray.push(maxVotes);
    }
  }

  return MaxVotesArray.length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
