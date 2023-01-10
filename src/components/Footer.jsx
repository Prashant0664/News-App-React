import React from 'react'

const Footer = ({footerAPI:{titles,links}}) => {
  return (
    <>
        <footer className='footer-main'>
            <div className='footer-sub'>
                <div className='footer-sub1'>
                    {titles.map((val,i)=>(
                        <div key={i} className=''>
                            <h1 className='footer-head text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
                        </div>
                    ))}
                    {links.map((list,i)=>(
                        <ul key={i} className='footer-ui2 grid items-center gap-1 '>
                            {list.map((link,i)=>(
                                <li key={i} className='footer-li2 cursor-pointer hover:text-xl hover:text-yellow-100 transition-all duration-300 text-sm sm:text-xs'>{link.link}</li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className='fc1 mt-5 text-center'>
                    <p className='fc1 text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>2022</span></p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer