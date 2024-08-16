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

    <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-600">Portfolio</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

               
                <div className="border rounded-lg shadow-lg overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOUwBywKCoBI0ipS4Et5lN9d5ePatj-EQYA&s" alt="Project 2" className="w-full h-48 object-cover"/>

                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Project One</h3>
                        <p className="text-lg text-gray-700 mb-4">A responsive e-commerce website built with React and Tailwind CSS.</p>
                    </div>
                </div>

            
                <div className="border rounded-lg shadow-lg overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOUwBywKCoBI0ipS4Et5lN9d5ePatj-EQYA&s" alt="Project 2" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                        <p className="text-lg text-gray-700 mb-4">A sleek portfolio website designed for a photographer, using HTML, CSS, and JavaScript.</p>
                    </div>
                </div>


                
                <div className="border rounded-lg shadow-lg overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OuxhwM7--aOgZqbK-YG2YORRE_hxTTDB-rIRykijgnXVlWIafPi-EqU0roMjDujenEM&usqp=CAU" alt="Project 3" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                        <p className="text-lg text-gray-700 mb-4">A dynamic blog platform built with Node.js and Tailwind CSS.</p>
                    </div>
                </div>

             

            </div>
        </div>
    </section>

  
    <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600">Services</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              
                <div className="p-6 border rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                    <p className="text-lg text-gray-700">Custom website development using the latest technologies to ensure your site is fast, secure, and responsive.</p>
                </div>

                


                <div className="p-6 border rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-lg text-gray-700">Creating user-friendly interfaces that provide an intuitive and enjoyable user experience.</p>
                </div>

                
                <div className="p-6 border rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">SEO Optimization</h3>
                    <p className="text-lg text-gray-700">Optimizing your website to improve its visibility on search engines and attract more visitors.</p>
                </div>

            </div>
        </div>
    </section>

   
    <section id="testimonials" className="py-20 bg-white text-center">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-blue-600">Testimonials</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                
                <div className="p-6 border rounded-lg shadow-lg">
                    <p className="text-lg italic">John was amazing to work with. He delivered the project on time and exceeded my expectations!</p>
                    <p className="mt-4 font-semibold">- Client A</p>
                </div>

              
                <div className="p-6 border rounded-lg shadow-lg">
                    <p className="text-lg italic">The website John developed for my business has been fantastic. Ive seen a significant increase in traffic and sales.</p>
                    <p className="mt-4 font-semibold">- Client B</p>
                </div>

               
                <div className="p-6 border rounded-lg shadow-lg">
                    <p className="text-lg italic">Highly professional and knowledgeable. I would highly recommend John for any web development project.</p>
                    <p className="mt-4 font-semibold">- Client C</p>
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



