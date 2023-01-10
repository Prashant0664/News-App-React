import React from 'react'
import { truncate } from "lodash";
import newsd from '../data/news.js'
import parse from 'html-react-parser'
import iim from '../Assets/image1.png'
import { setOpenCart, setCloseCart } from './utils/cartslice.jsx';
import { selectCartState, stitle, scontent, simgl } from './utils/cartslice.jsx'
import { useSelector, useDispatch } from 'react-redux';

const News = () => {

  const [isOpen, SsetSTATE] = React.useState(true);

  const dispatch = useDispatch();  //redux tool kit

  const tstate = useSelector(selectCartState);
  const ttitle = useSelector(stitle);
  const timgl = useSelector(simgl);
  const tcontent = useSelector(scontent);

  const Changestate = (props) => {
    dispatch(setOpenCart({
      cartState: true,
      title: props.title,
      imgl: props.imgl,
      content: props.content,
    }))
  }
  const Closestate = () => {
    dispatch(setCloseCart({
      cartState: false,
      title: '',
      imgl: '',
      content: '',
    }))
  }

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var currentdate = new Date();
  var Time = currentdate.getDate() + " "
    + (month[currentdate.getMonth()]) + " 2023 "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes();

  const parser = new DOMParser();
  const times = `English Edition | ${Time} | Today's NEWS`
  const document = parser.parseFromString('<p></p>', "text/html");

  const showd = (props) => {
    const text = props.content
    return (
      <div className='news-main-box' onClick={() => { SsetSTATE(!isOpen); Changestate(props) }}>
        <div className='news-main-box-content'>
          <div className='grid-main-box-text'>
            <img src={props.imgl} alt={props.imgl} className='grid-img' />
            <div className='news-head'>
              {props.title}
            </div>
            <div className='news-content'>
              {truncate(text, { length: 350 })}<b><p style={{ color: 'black' }}>more</p></b>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const data = newsd.map((d) => {
    return showd(d);
  })
  return (
    <>
      <div className={isOpen ? `news-main` : 'shide'}>
        <div className='news-main-in'>
          {data}
        </div>
        <div className='cup'>You Are Up to Date !</div>
      </div>
      <div className={!isOpen ? `news-main` : 'shide'}>
        <div className='pp' onClick={() => { SsetSTATE(!isOpen); Closestate() }}>
          PREVIOUS PAGE
        </div>
        <div className='dnews-sub-container'>
          <div className='head-con'>
            <div className='news-head-con'>
              {ttitle}
            </div>
            <div className='subhead-news'>
              {times}
            </div>
          </div>
          <img src={timgl} alt={iim} className='news-img-main' />
          <div className='content-con'>
            <span className='news-content-con'>
              {parse(tcontent)}
            </span>
          </div>
        </div>
      </div>


    </>
  )
}

export default News