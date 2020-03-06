import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { openDoc, closeSession } from '../qDoc.config';

export const QDocContext = React.createContext();

const QDocProvider = ({ children }) => {
  const [qDoc, setQDoc] = useState(null);
  useEffect(() => {
    (async () => {
      setQDoc(await openDoc());
    })();
    return closeSession;
  }, []);
  return (
    <>
      {!qDoc && <div>Connecting to Qlik...</div>}
      {qDoc && (
        <QDocContext.Provider value={qDoc}>
          {children}
        </QDocContext.Provider>
      )}
    </>
  );
};

QDocProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
QDocProvider.defaultProps = {
  children: null,
};

export { QDocProvider };
