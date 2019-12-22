import React from 'react';

export default function({ coin, style }) {
  return (
    <img
      loading="lazy"
      style={style || { height: '50px' }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.CoinSymbol}
    />
  );
}
