import React from 'react'
import Image from 'next/image'
import Rate from './cmc-table/Rate'
import { coinIcon } from '../utilities/coinInfo'
import RateFilled from './buttons/RateFilled'
import DropdownBtn from './buttons/DropdownBtn'

const styles = {
  coinDetails: `min-h-screen text-white`,
  coinDetailsLinks: `flex mt-3 flex-wrap`,
  grayBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
  borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
  title: `text-gray-400 whitespace-nowrap mr-2`,
  coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
  coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
  coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
  coinRates: `w-full flex items-start justify-between`,
  flexBetween: `flex justify-between`,
}

const CoinDetails = ({ coinName, coinSymbol, price }) => {
  return (
    <main className={styles.coinDetails}>
      <div>
        <div className={styles.coinDetailsWrapper}>
          <div className="flex w-fit flex-col">
            <div className="flex items-center">
              {coinIcon(coinName, 50)}
              &nbsp;&nbsp;
              <div>
                <div className="flex">
                  <p className="text-3xl">{coinName}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p className={styles.coinSymbol}>{coinSymbol}</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.coinDetailsLinks}>
              <div className={styles.grayBtn}>solana.com</div>
              <div className={styles.grayBtn}>Explorers</div>
              <div className={styles.grayBtn}>Community</div>
              <div className={styles.grayBtn}>Chat</div>
              <div className={styles.grayBtn}>Source code</div>
              <div className={styles.grayBtn}>Whitepaper</div>
            </div>
            <br />
            Topics
            <div className={[styles.coinDetailsLinks, 'topics']}>
              <div className={styles.grayBtn}>Mineable</div>
              <div className={styles.grayBtn}>PoW</div>
              <div className={styles.grayBtn}>SHA-256</div>
              <div className={styles.grayBtn}>Store of Value</div>
            </div>
          </div>

          <div className="">
            <div className={styles.coinRates}>
              <div>
                <p className="textgray-400">
                  {coinName} ({coinSymbol})
                </p>
                <div className="my-3 flex">
                  <h1 className="text-4xl">${price}</h1>
                  <RateFilled />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400">15.26 ETH</p>
                  &nbsp;&nbsp;&nbsp;
                  <Rate isIncrement={false} rate="0.53%" />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400">24.33 ETH</p>
                  &nbsp;&nbsp;&nbsp;
                  <Rate isIncrement={true} rate="0.99%" />
                </div>
              </div>

              <div className="flex">
                <DropdownBtn label="Buy" />
                <DropdownBtn label="Exchange" />
                <DropdownBtn label="Gaming" />
                <DropdownBtn label="Earn crypto" />
              </div>
            </div>

            <div className={styles.coinInfo}>
              <div>
                <small className={styles.title}>Market Cap</small>
                <small>$731,955,983,865</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>
              <div className={styles.borderLeft}>
                <div>
                  <small className={styles.title}>
                    Fully Diluted Market Cap
                  </small>
                </div>
                <small>$811,236,224,810</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <div>
                    <small className={styles.title}>
                      Volume &nbsp;
                      <small className={coinSymbol}>{coinSymbol}</small>
                    </small>
                  </div>
                  <small>$24,143,176,324</small>
                  <Rate isIncrement={true} rate="0.92%" />
                </div>
                <br />
                <div>
                  <div>
                    <small className={styles.title}>Volume / Market Cap</small>
                  </div>
                  <small>0.03315</small>
                </div>
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <div>
                    <small className={styles.title}>Circulating Supply</small>
                  </div>
                  <small>18,978,850.00 BTC</small>
                </div>
                <br />
                <div>
                  <div className={styles.flexBetween}>
                    <div>
                      <small className={styles.title}>Max Supply</small>
                    </div>
                    <div>
                      <small>21,000,000</small>
                    </div>
                  </div>
                  <div className={styles.flexBetween}>
                    <div>
                      <small className={styles.title}>Total Supply</small>
                    </div>
                    <div>
                      <small>18,983,912</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CoinDetails
