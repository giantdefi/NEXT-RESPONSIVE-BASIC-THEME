import React, { useEffect, useState } from "react"
import Link from 'next/link'
import Router, { useRouter } from "next/router"
import Head from 'next/head'
import LEftSidebar from "layout/LEftSidebar"
import RightSidebar from "layout/RightSidebar"
//---- REDUX STORE ---------------------
import { useSelector, useDispatch } from 'react-redux'
import { setMainMenuItem } from 'redux/reducers/MainmenuReducer'
import {setToggleLogin } from 'redux/reducers/AuthReducer'
import { setRightSidebar } from 'redux/reducers/MainmenuReducer'
//--------------------------------------

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { domain, title, desc, crypto } = useSelector((state) => state.GeneralReducer)
  const { isLogin, phone, email, toggleLogin, wallet } = useSelector((state) => state.AuthReducer)
  const { rightSidebar } = useSelector((state) => state.MainmenuReducer)


//   useEffect(() => {
  
//     dispatch(setMainMenuItem(1))
 
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const handleToggle = () => {
//     dispatch(setToggleLogin(false))
// }

const handleToggle = () => {
  // if(toggleLogin){
  //     dispatch(setModalLogin(true))
  //     dispatch(setToggleLogin(false))
  // }else{
  //     dispatch(setModalRegister(true))
  //     dispatch(setToggleLogin(true))
  // }

  if(rightSidebar){
      dispatch(setRightSidebar(false))
  }else{
      dispatch(setRightSidebar(true))
  }
 
  
}

return (
  <>



    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Head>

    
{/* bg-[#ffd4d5] */}
    <section className="min-h-screen pb-5 dark:text-white animated fadeIn mt-[90px]">
 
      <div className="w-full mt-20 mx-auto mb-10 text-white">

 <h1>MOBILE INDEX</h1>
 <p>You can put your code here apart from large device content</p>
 <p>The file to edit is MobileIndex.js</p>

 






      </div>

    

    </section>

  </>
)
}



