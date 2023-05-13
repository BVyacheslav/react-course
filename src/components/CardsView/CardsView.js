import style from './CardsView.module.css';

export const CardsView = ({ cards }) => {
  return (
    <div className={style.cardsList}>
      {cards.map((card) =>
        <div key={card.img} className={style.card}>
          <h2>{card.name}</h2>
          <h5>{card.color}</h5>
          <img key={card.img} className={style.foto} src={card.img} />
          <div>
            <span className={style.price}>${card.price}</span>
            <button className={style.button}>ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  )
}
