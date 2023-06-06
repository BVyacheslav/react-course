import { useState, useEffect } from 'react';

export const Details = ({ selectedUserId }) => {

  const [info, setInfo] = useState({});

  const fetchUserById = async () => {
    const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUserId}.json`)
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    setInfo(data);
  }

  useEffect(() => {
    fetchUserById();
  }, [selectedUserId])

  return (
    <div className="details">
      <img src={info.avatar} />
      <span className="info">
        {info.name}
      </span>
      <span className="info">
        City: {info.details?.city}
      </span>
      <span className="info">
        Company: {info.details?.company}
      </span>
      <span className="info">
        Position: {info.details?.position}
      </span>
    </div>

  )
}
