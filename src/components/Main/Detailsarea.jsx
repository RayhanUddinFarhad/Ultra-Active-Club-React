import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detailsarea = ({detail}) => {

    const [time, setTime] = useState  (detail)
    const [breakTimes, setBreakTime] = useState (0);



    useEffect (() => {


        const time = localStorage.getItem('time');

        setTime (time)


        const getBreaktime = localStorage.getItem ('breaktime');

        if (getBreaktime) {

            setBreakTime (getBreaktime)



        }

        else {


            setBreakTime (0)
        }





    }, [detail])

    const breakTime = (bt) => {

       localStorage.setItem ('breaktime', bt)


       setBreakTime (bt)





     }





     const completed = (t, bt) => {


        

        const totalExerciseTime = t - bt;
        toast(`Your total Exercise Time: ${totalExerciseTime}`);









     }




    return (
        <div className='space-y-5 my-5'>
            <div className='flex space-x-5 items-center'>

                <div>

                    <img className='w-10 rounded-lg' src="/src/assets/Profile.jpg" alt="" />


                </div>

                <div>

                    <p className='font-bold'>Rayhan Uddin Farhad</p>
                    <p className='flex text-xs'> <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                    </span>

                        Dhaka, Bangladesh</p>



                </div>



            </div>

            <div className='flex justify-around bg-gray-200 p-3'>


                <div className='text-center'>

                    <h3 className='text-2xl font-semibold'>56 KG</h3>
                    <p>Weight</p>



                </div>
                <div className='text-center'>

                    <h3 className='text-2xl font-semibold'>5.7</h3>
                    <p>Height</p>



                </div>
                <div className='text-center'>

                    <h3 className='text-2xl font-semibold'>21</h3>
                    <p>Age</p>



                </div>








            </div>

            <div>



                <p className='text-xl font-bold '>Add a break</p>

                <div className='bg-gray-300 p-3 space-x-5'>

                    <button onClick={() => breakTime (10)} className='btn p-3 rounded-full bg-white text-black border-none'>10s</button>
                    <button onClick={() => breakTime (20)} className='btn p-3 rounded-full bg-white text-black border-none'>20s</button>
                    <button onClick={() => breakTime (30)} className='btn p-3 rounded-full bg-white text-black border-none'>30s</button>
                    <button onClick={() => breakTime (40)} className='btn p-3 rounded-full bg-white text-black border-none'>40s</button>



                </div>
            </div>

            <div>

                <p className='text-xl font-bold '>Exercise Details</p>


                <label className="label">
                    <span className="label-text text-xl font-semibold">Exercise Time</span>
                </label>
                <input type="number" placeholder="Type here" value={time} className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text text-xl font-semibold">Break Time</span>
                </label>
                <input type="number" placeholder="Type here" value={breakTimes} className="input input-bordered w-full max-w-xs" />









            </div>

            <button onClick={() => completed(time, breakTimes)} className='btn-primary w-9/12 m-auto'>Completed</button>




        </div>
    );
};

export default Detailsarea;