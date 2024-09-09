import { useEffect, useState } from 'react';

const Vote = () => {
  const [votingList, setVotingList] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem('voting'));
    if (savedData) {
      return savedData;
    }
    return {
      windows: 0,
      linux: 0,
      macOs: 0,
    };
  });
  const handleVote = option => {
    // switch (option) {
    //   case 'windows':
    //     setVotingList(prev => ({
    //       ...prev,
    //       windows: prev.windows + 1,
    //     }));
    //     break;
    //   case 'linux':
    //     setVotingList(prev => ({
    //       ...prev,
    //       linux: prev.linux + 1,
    //     }));
    //     break;
    //   case 'macOs':
    //     setVotingList(prev => ({
    //       ...prev,
    //       macOs: prev.macOs + 1,
    //     }));
    //     break;
    //   default:
    //     break;
    // }
    console.log(option);
    setVotingList(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };
  useEffect(() => {
    window.localStorage.setItem('voting', JSON.stringify(votingList));
  }, [votingList]);
  return (
    <div>
      <ul>
        <li>Windows : {votingList.windows}</li>
        <li>Linux : {votingList.linux}</li>
        <li>MacOs : {votingList.macOs}</li>
      </ul>
      <button onClick={() => handleVote('windows')}>Windows</button>
      <button onClick={() => handleVote('linux')}>Linux</button>
      <button onClick={() => handleVote('macOs')}>MacOs</button>
    </div>
  );
};
export default Vote;
