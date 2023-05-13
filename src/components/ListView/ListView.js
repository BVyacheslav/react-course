import style from './ListView.module.css';

export const ListView = ({ items }) => {

  return (
    <div className={style.itemsList}>
      {items.map((item) =>
        <div key={item.img} className={style.item}>
          <img key={item.img} className={style.foto} src={item.img} />
          <h2>{item.name}</h2>
          <span>{item.color}</span>
          <span className={style.price}>${item.price}</span>
          <button className={style.button}>ADD TO CART</button>
        </div>
      )}
    </div>
  )
}
