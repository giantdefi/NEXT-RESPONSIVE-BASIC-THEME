import React, { useEffect, useState } from "react"
import Link from 'next/link'
import Router, { useRouter } from "next/router"


import Head from 'next/head'
import LEftSidebar from "layout/LEftSidebar"
import RightSidebar from "layout/RightSidebar"

//---- REDUX STORE ---------------------
import { useSelector, useDispatch } from 'react-redux'
import { setSpinnerAtLogo } from 'redux/reducers/LoaderReducer'
import { setbackURLs } from 'redux/reducers/MainmenuReducer'
import { setMainMenuItem } from 'redux/reducers/MainmenuReducer'
import { setBordingOnMainHeader, setShoWConnectWallet } from 'redux/reducers/SettingReducer'
//--------------------------------------

export default function Home() {

 const dispatch = useDispatch()
  const router = useRouter()
  const [spinner, setSpinner] = useState(false)
  const [toggle, setToggle] = useState(false)
  const { domain, title, desc } = useSelector((state) => state.GeneralReducer)
  const { isLogin, phone, email, toggleLogin } = useSelector((state) => state.AuthReducer)
  const { rightSidebar } = useSelector((state) => state.MainmenuReducer)


  useEffect(() => {
  
    dispatch(setMainMenuItem(1))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


return (
  <>

    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Head>

    <div>

      <section className="relative min-h-screen bg-gray-400 dark:bg-[#111] animated fadeIn">

  
        <div className="_gradient_purple/90 w-full h-[600px] bg-cover bg-fixedAA pt-[50px] "
          // style={{ backgroundImage: 'url(/assets/img/mainbg.webp)' }}
        >
       

       <section className="bg-cover bg-center text-white py-20 " style={{ backgroundImage: 'url(/assets/img/bg/apartment-bg.webp)' }}>
        <div className="container mx-auto text-center ">
            <h1 className="text-5xl font-bold">Building Modern and Responsive Websites</h1>
            <p className="mt-4 text-2xl">Turning your ideas into reality with clean code and stunning designs.</p>
            <a href="#contact" className="mt-8 inline-block bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold">Hire Me</a>
        </div>
    </section>

 
    <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                We are a dedicated team of web developers and designers who are passionate about creating innovative and user-friendly websites. With years of experience in the industry, we strive to deliver high-quality digital solutions that help businesses grow and succeed online.
            </p>
        </div>
    </section>


    <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600">Meet the Team</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

               
                <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOUwBywKCoBI0ipS4Et5lN9d5ePatj-EQYA&s" alt="Project 2" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                        <p className="text-lg text-gray-700">Lead Developer</p>
                    </div>
                </div>

               
                <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOUwBywKCoBI0ipS4Et5lN9d5ePatj-EQYA&s" alt="Project 2" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                        <p className="text-lg text-gray-700">UI/UX Designer</p>
                    </div>
                </div>

              
                <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOUwBywKCoBI0ipS4Et5lN9d5ePatj-EQYA&s" alt="Project 2" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
                        <p className="text-lg text-gray-700">Project Manager</p>
                    </div>
                </div>

              

            </div>
        </div>
    </section>

   
    <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

               
                <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
                    <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                    <p className="text-lg text-gray-700">We constantly seek out new technologies and methodologies to deliver cutting-edge solutions.</p>
                </div>

            
                <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
                    <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
                    <p className="text-lg text-gray-700">We operate with honesty and transparency in all our dealings, ensuring trust with our clients.</p>
                </div>

              
                <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
                    <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                    <p className="text-lg text-gray-700">Our goal is to exceed client expectations with superior quality in everything we do.</p>
                </div>

            </div>
        </div>
    </section>
  
   
   
   
 

       
        </div>







      </section>
    </div>

  </>
)
}



