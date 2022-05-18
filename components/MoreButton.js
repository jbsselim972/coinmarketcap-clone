import React from 'react'
import RightArrow from '../assets/svg/rightArrow'

const styles = {
  button: `text-[#6188FF] flex items-center cursor-pointer justify-between whitespace-nowrap`,
}

const MoreButton = () => {
  return (
    <div className={styles.button}>
      More <RightArrow />
    </div>
  )
}

export default MoreButton
