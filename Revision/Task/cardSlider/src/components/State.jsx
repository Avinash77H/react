import React, { useEffect, useRef } from 'react'
import App from '../App';
import { AnimalList } from '../Data'
import { useState } from 'react';

function State() {

    let [index, setIndex] = useState(0);

    let [isSlideRight, setIsSlideRight] = useState(false);
    let [isSlideLeft, setIsSlideLeft] = useState(false);

    let data = [AnimalList[index]];

    function handleNext() {
        if (index == 9) {
            setIndex(0)
        }
        else {
            setIndex((prev) => prev + 1)
        }
        setIsSlideRight(true)
        setTimeout(() => {
            setIsSlideRight(false)
        }, 1000)
    }

    function handlePrev() {
        if (index == 0) {
            setIndex(0)
        }
        else {
            setIndex((prev) => prev - 1)
        }
        setIsSlideLeft(true);
        setTimeout(()=>{
            setIsSlideLeft(false)
        },1000)

    }
   console.log('left',isSlideLeft);
   console.log('right',isSlideRight);

    return (
        <div className='h-screen  justify-around items-center '>
            <button className="prev btn" disabled={isSlideLeft?true:false} onClick={handlePrev}>Prev</button>
            <button className="next btn" disabled={isSlideRight ? true : false}  onClick={handleNext}>Next</button>
            <div className='w-full flex items-center justify-around border-2 border-black'>
                <div className={`card ${isSlideRight ? 'animate-right_animation' : ''} ${isSlideLeft ? 'animate-left_animation' : ''}`}>
                    {data.map((item) => (
                        <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="rounded-t-lg h-52 w-full object-cover object-top"
                                    src={item.image}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default State

