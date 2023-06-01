import { useEffect, useState } from "react";

export const Watch = ({ watch }) => {

  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const nowDate = new Date();
      const time = new Date(nowDate.getTime() + ((nowDate.getTimezoneOffset() + watch.timezone * 60) * 60000)).toString().slice(16, 24)
      setTime(time)
    }

    updateTime();
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="wrapper">
      <label>{watch.city}</label>
      <span className="watch">
        {time}
      </span>
    </div>
  )
}
