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
       

       <section class="bg-cover bg-center text-white py-20 " style={{ backgroundImage: 'url(/assets/img/bg/apartment-bg.webp)' }}>
        <div class="container mx-auto text-center ">
            <h1 class="text-5xl font-bold">Building Modern and Responsive Websites</h1>
            <p class="mt-4 text-2xl">Turning your ideas into reality with clean code and stunning designs.</p>
            <a href="#contact" class="mt-8 inline-block bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold">Hire Me</a>
        </div>
    </section>

    <section id="portfolio" class="py-20 bg-white">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center text-blue-600">Portfolio</h2>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

               
                <div class="border rounded-lg shadow-lg overflow-hidden">
                    <img src="data:image/jpeg;base64,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" alt="Project 1" class="w-full h-48 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold mb-2">Project One</h3>
                        <p class="text-lg text-gray-700 mb-4">A responsive e-commerce website built with React and Tailwind CSS.</p>
                    </div>
                </div>

            
                <div class="border rounded-lg shadow-lg overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOUwBywKCoBI0ipS4Et5lN9d5ePatj-EQYA&s" alt="Project 2" class="w-full h-48 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold mb-2">Project Two</h3>
                        <p class="text-lg text-gray-700 mb-4">A sleek portfolio website designed for a photographer, using HTML, CSS, and JavaScript.</p>
                    </div>
                </div>

                
                <div class="border rounded-lg shadow-lg overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OuxhwM7--aOgZqbK-YG2YORRE_hxTTDB-rIRykijgnXVlWIafPi-EqU0roMjDujenEM&usqp=CAU" alt="Project 3" class="w-full h-48 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold mb-2">Project Three</h3>
                        <p class="text-lg text-gray-700 mb-4">A dynamic blog platform built with Node.js and Tailwind CSS.</p>
                    </div>
                </div>

             

            </div>
        </div>
    </section>

  
    <section id="services" class="py-20 bg-gray-100">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-blue-600">Services</h2>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              
                <div class="p-6 border rounded-lg shadow-lg">
                    <h3 class="text-2xl font-semibold mb-2">Web Development</h3>
                    <p class="text-lg text-gray-700">Custom website development using the latest technologies to ensure your site is fast, secure, and responsive.</p>
                </div>

                
                <div class="p-6 border rounded-lg shadow-lg">
                    <h3 class="text-2xl font-semibold mb-2">UI/UX Design</h3>
                    <p class="text-lg text-gray-700">Creating user-friendly interfaces that provide an intuitive and enjoyable user experience.</p>
                </div>

                
                <div class="p-6 border rounded-lg shadow-lg">
                    <h3 class="text-2xl font-semibold mb-2">SEO Optimization</h3>
                    <p class="text-lg text-gray-700">Optimizing your website to improve its visibility on search engines and attract more visitors.</p>
                </div>

            </div>
        </div>
    </section>

   
    <section id="testimonials" class="py-20 bg-white text-center">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-blue-600">Testimonials</h2>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                
                <div class="p-6 border rounded-lg shadow-lg">
                    <p class="text-lg italic">"John was amazing to work with. He delivered the project on time and exceeded my expectations!"</p>
                    <p class="mt-4 font-semibold">- Client A</p>
                </div>

              
                <div class="p-6 border rounded-lg shadow-lg">
                    <p class="text-lg italic">"The website John developed for my business has been fantastic. I’ve seen a significant increase in traffic and sales."</p>
                    <p class="mt-4 font-semibold">- Client B</p>
                </div>

               
                <div class="p-6 border rounded-lg shadow-lg">
                    <p class="text-lg italic">"Highly professional and knowledgeable. I would highly recommend John for any web development project."</p>
                    <p class="mt-4 font-semibold">- Client C</p>
                </div>

            </div>
        </div>
    </section>

   
    <section id="contact" class="py-20 bg-gray-100">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-blue-600">Contact Me</h2>
            <p class="mt-4 text-lg text-gray-700">Interested in working together? Fill out the form below to get in touch!</p>

            <form class="mt-8 max-w-lg mx-auto">
                <div class="mb-4">
                    <label class="block text-lg font-semibold text-gray-700" for="name">Name</label>
                    <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" type="text" id="name" placeholder="Your Name"/>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-semibold text-gray-700" for="email">Email</label>
                    <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" type="email" id="email" placeholder="Your Email"/>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-semibold text-gray-700" for="message">Message</label>
                    <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button class="w-full bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700">Send Message</button>
            </form>
        </div>
    </section>


       
        </div>







      </section>
    </div>

  </>
)
}



