import React, { useContext } from 'react';
import { QDocContext } from './QDoc';

const SomeConsumer = () => {
  const qDoc = useContext(QDocContext);
  console.log(qDoc); // print qDoc to console to make sure everything is working
  return (
    <>

    </>
  );
};

export default SomeConsumer;
