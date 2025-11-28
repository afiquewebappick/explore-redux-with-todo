import { useLanguage } from '@/hooks/useLanguage';
import React, { useState } from 'react';

const Cart = () => {
  const { t } = useLanguage();
  const [itemCount, setItemCount] = useState(5);

  return (
    <div>
      <p>{t('item', { count: itemCount })}</p>
      {/* 
        count: 0 -> "0 items"
        count: 1 -> "1 item"
        count: 5 -> "5 items"
      */}

      <p>{t('notification', { count: 3 })}</p>
      {/* "You have 3 new notifications" */}

      <p>{t('day', { count: 1 })}</p>
      {/* "1 day ago" */}
    </div>
  );
};

export default Cart;
