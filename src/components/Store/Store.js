import { useState } from 'react';
import { IconSwitch, CardsView, ListView } from '../';
import { products } from './products';
import style from './Store.module.css';

export const Store = () => {
  const [icon, setIcon] = useState('view_list');

  return (
    <div className={style.store}>
      <IconSwitch icon={icon} onSwitch={setIcon} />
      {icon === 'view_list' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  )
}