import { useEffect } from "react";

export const Watch = ({ watch, watchIndex, watches, setWatches }) => {

  useEffect(()=> {

    const updateTime = () => {
      const nowDate = new Date();
      let newWatches = [...watches];

      const time = new Date(nowDate.getTime() + ((nowDate.getTimezoneOffset() + watch.timezone * 60) * 60000)).toString().slice(16, 24)
      
      newWatches[watchIndex].time = time;
      setWatches(newWatches);
    }

    updateTime();
    const interval = setInterval(()=> {
      updateTime();
    }, 1000);

    return ()=>clearInterval(interval);
}, []);

  const handleRemove = (city) => () => {
    setWatches(watches.filter((watch) => watch.city !== city));
  }

  return (
    <div className="wrapper">
      <label>{watch.city}</label>
      <span className="watch">
        {watch.time}
      </span>
      <button className="deleteButton" onClick={handleRemove(watch.city)}>✘</button>
    </div>
  )
}
