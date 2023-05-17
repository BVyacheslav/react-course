import { Star } from '..';

export const Stars = ({ count = 0 }) => {

  return (
    typeof count === 'number' && count >= 1 && count <= 5 ?
      <ul className="card-body-stars u-clearfix">
        <li>
          <Star />
        </li>
      </ul>
      :
      <></>
  )
}