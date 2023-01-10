import React from 'react'

const Topnav = () => {
  return (
    <>
        <div className='topnav-main'>
            <div className='topnav-sub'>
                <ul className='topnav-ul'>
                    <li className='topnav-li'>
                        <a href='#'>Latest</a>
                    </li>
                    <li className='topnav-li'>
                        <a href='#'>Daily's Special</a>
                    </li>
                    <li className='topnav-li'>
                        <a href='#'>Trending</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Topnav