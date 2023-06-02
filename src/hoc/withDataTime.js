import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ru from 'dayjs/locale/ru';

dayjs.extend(relativeTime);
dayjs.locale('ru')

export function withDataTime(Component) {
  return function DateTimePretty(props) {
    const { date, ...otherProps } = props;
    const prettyDate = dayjs(props.date).fromNow();
    return <Component date={prettyDate} {...otherProps} />;
  }
}