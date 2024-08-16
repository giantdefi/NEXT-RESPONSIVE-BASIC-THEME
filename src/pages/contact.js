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
            <h2 className="text-3xl font-bold text-blue-600">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Wed love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

             
                <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-600">Address</h3>
                    <p className="text-lg text-gray-700">1234 Web Developer Lane, Code City, 56789</p>
                </div>

                
                <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-600">Phone</h3>
                    <p className="text-lg text-gray-700">+1 (234) 567-890</p>
                </div>

             
                <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-600">Email</h3>
                    <p className="text-lg text-gray-700">info@webdeveloper.com</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 text-center">Send Us a Message</h2>
            <form className="mt-8 max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700" >Name</label>
                    <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" type="text" id="name" placeholder="Your Name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700" >Email</label>
                    <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" type="email" id="email" placeholder="Your Email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700" >Message</label>
                    <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700">Send Message</button>
            </form>
        </div>
    </section>

  
    <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600">Our Location</h2>
            <div className="mt-8">
            <iframe className="w-full h-64 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.276478430986!2d106.8075985!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15055555555%3A0x5555555555555555!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1633744148198!5m2!1sen!2sus"
                    allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>

  

   
  
   
   
   
 

       
        </div>







      </section>
    </div>

  </>
)
}



