import React from 'react';
import c from './MiniHeader.module.css';

const MiniHeader = ({setIsSidebarActive}) => {
  return (
    <div className={c.miniHeader}>
      <div>
        <button className={c.miniheader__btns} onClick={() => {setIsSidebarActive(true)}}>All</button>
        <button className={c.miniheader__btns}>Today's deals</button>
        <button className={c.miniheader__btns}>Customer Service</button>
        <button className={c.miniheader__btns}>Registry</button>
        <button className={c.miniheader__btns}>Gift Cards</button>
        <button className={c.miniheader__btns}>Sell</button>
      </div>
      <div>
        <button className={c.miniheader__btn}>Shop holiday fashion deals</button>
      </div>

    </div>
  )
}

export default MiniHeader