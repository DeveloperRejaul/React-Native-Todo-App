import React, {useState} from 'react';

export default () => {
  const [data, setdata] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(null);

  // get data
  const getData = async url => {
    setLoading(true);
    await fetch(url)
      .then(res => {
        setStatus(res.status);
        return res.json();
      })
      .then(res => {
        setdata(res);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
      });
  };
  return {getData, data, loading, error, status};
};
