import React, { useEffect, useState } from 'react';
import navdata from '../data/nav_data.js'
import { Bars3CenterLeftIcon, SunIcon, XCircleIcon } from '@heroicons/react/24/outline'


const Navbar = () => {


    const [navState, setNavState] = useState(false);
    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);


    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentdate = new Date();
    var Time = currentdate.getDate() + " "
        + (month[currentdate.getMonth()]) + " 2023 "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes();

    const [clicked, setClicked] = useState(false);

    const sided = (props) => {
        return (
            <li className='side-item tooltip' key={props.head}>
                {/* <span className='tooltiptext'>{props.head}</span> */}
                {props.head}
                
            </li>
        )
    }
    
    const litem = navdata[0].map((data) => {
        return sided(data)
    })
    const litem2 = navdata[1].map((data) => {
        return sided(data)
    })

    return (
        <>
            <header className={!navState ? 'header1' : 'header2'}>
                <nav className='nav'>
                    <div className='menubar'>
                        <Bars3CenterLeftIcon className='menuicon' onClick={()=>{setClicked(!clicked)}}/>
                    </div>
                    <div className='mnav'>
                        <div className='mhead'>
                            NEWS
                        </div>
                        <div className='hsub'>
                            <div className='Ehsub'>
                                English Edition
                            </div>
                            <div className='Dhsub'>
                            &nbsp;{Time} &nbsp;
                            </div>

                            <div className='Thsub'>
                                Today's News
                            </div>
                        </div>
                    </div>
                    <div className='nsub'>
                        SUBSCRIBE
                    </div>
                </nav>
            </header>
            <div className={clicked?`side-main-box`:'side-main-box hide-side'}>
                <div className='side-main-box-inside'>
                    <div className='side-nav-logos'>
                        <div className='side-logo2'>
                            DARKMODE <SunIcon className='darkmoon' />
                        </div>
                        
                        <div className='side-logo1'>
                            <XCircleIcon className='xmark' onClick={()=>{setClicked(!clicked)}}/>
                        </div>
                    </div>
                    <div className='side-content'>
                        <ul className='side-list'>
                            {litem}
                        </ul>
                    </div>
                    <hr className='' />
                    <div className='side-content'>
                        <ul className='side-list'>
                            {litem2}
                        </ul>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Navbar