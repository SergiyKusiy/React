import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const onStatus = e => {
      setStatus(e.type);
    }
    
    window.addEventListener('online', onStatus)
    window.addEventListener('offline', onStatus)

    return () => {
      window.removeEventListener('online', onStatus);
      window.removeEventListener('offline', onStatus);
    };


  }, []);

  if (status === 'online') {
    return <div className="status">{status}</div>;
  }
  if (status === 'offline') {
    return <div className="status status_offline">{status}</div>;
  }
};

export default ConnectionStatus;
