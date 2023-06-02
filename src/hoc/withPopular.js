import { Popular, New } from "../components";

export function withPopular(Component) {
  return function (props) {
    if (props.views <= 100) return <New><Component {...props} /></New>;
    if (props.views >= 1000) return <Popular><Component {...props} /></Popular>;
    return <Component {...props} />;
  }
}