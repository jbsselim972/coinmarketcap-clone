import Image from 'next/image'
import btc from '../assets/btc.png'
import busd from '../assets/busd.png'
import dogecoin from '../assets/dogecoin.png'
import eth from '../assets/eth.png'
import usdt from '../assets/usdt.png'
import usdc from '../assets/usdc.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'

export const coinIcon = (from, size) => {
  switch (from) {
    case 'Bitcoin':
      return (
        <Image
          src={btc}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Ethereum':
      return (
        <Image
          src={eth}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Tether':
      return (
        <Image
          src={usdt}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'BNB':
      return (
        <Image
          src={bnb}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'USD Coin':
      return (
        <Image
          src={usdc}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'XRP':
      return (
        <Image
          src={xrp}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Terra':
      return (
        <Image
          src={tera}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Solana':
      return (
        <Image
          src={solana}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Cardano':
      return (
        <Image
          src={cardano}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Avalanche':
      return (
        <Image
          src={avalanche}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Binance USD':
      return (
        <Image
          src={busd}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    case 'Dogecoin':
      return (
        <Image
          src={dogecoin}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
    default:
      return (
        <Image
          src={btc}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
  }
}
