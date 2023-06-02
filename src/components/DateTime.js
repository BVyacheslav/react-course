import { withDataTime } from "../hoc/withDataTime"

function DateTime(props) {
  return <p className="date">{props.date}</p>
}

export default withDataTime(DateTime);