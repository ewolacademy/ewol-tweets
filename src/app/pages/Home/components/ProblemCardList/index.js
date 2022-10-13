import React from 'react';
import ProblemCard from '../ProblemCard';
import ProblemCardLoader from '../ProblemCardLoader';

const ProblemCardList = ({ list = [], loading, error }) => {

  if (loading) {
    return <ProblemCardLoader />
  }
  
  if (error) {
    return <span>Error :(</span>;
  }

  return (
    <>
      {list.map((problemItem, index) => <ProblemCard key={index} {...problemItem} />)}
    </>
  );
}

export default ProblemCardList;

