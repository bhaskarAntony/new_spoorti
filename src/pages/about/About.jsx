import React from 'react'
import './style.css'
import i1 from '../../assets/images/aboutus/smwaus_2.jpg'
import i2 from '../../assets/images/aboutus/smwaus_3.jpg'
import team from '../../data/team'

function About() {
  return (
    <div>
        <div className="about-banner">
            <h1 className='fs-1 fw-bold text-center'>About us</h1>
            <p className="fs-6 text-center">
            SPORTI consists of a team of Senior Officers from various units of the Police Department. It also has a Working Committee who conduct various Conferences and Workshops to discuss the operations and functioning of the Institute. The team hosts periodic meetings every last Friday of the month for effective improvements of the Institute.
            </p>

           
        </div>

        <div className="about-card container py-5 p-3">
           <div className="row">
                <div className="col-12 col-md-6">
                    <img src={i1} alt="" className='w-100 rounded-4 h-100' />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="fs-3 fw-bold">SPORTI - Senior Police Officers Research and Training Institute</h1>
                    <p className="fs-6">SPORTI - Senior Police Officers Research and Training Institute was established in the year 1973 and has been successfully catering to the needs of Police department. It was priorly known as Senior Police Officer Mess and renamed to SPORTI in 2019 to enhance the quality of services being provided. SPORTI is an all exclusive facility for both serving and retired senior police officials only. It fulfils the requirement of organising conferences and training, accommodation, host private and public events, celebrations and dining. SPORTI boasts of superior and quality infrastructure featuring an elegant conference room, extensive event hall, state of art mini theatre for screening of movies and documentaries, luxurious accommodation - VIP, family and executive rooms, impressive indoor dining hall and outdoor barbecue, well equipped gym for maintaining fitness, sporting avenues like Badminton, Table tennis and Billiards. SPORTI’s central location enables our guests to reach important official destinations with reduced travel time and also experience Bangalore’s cosmopolitan culture post work hours.</p>
                </div>
                </div>
           </div>
           <div className="about-card container py-5 p-3">
           <div className="row">
                <div className="col-12 col-md-6">
                <h1 className="fs-3 fw-bold">Team SPORTI</h1>
                    <p className="fs-6">SPORTI has a working committee comprising of senior officers from various units of Karnataka State Police. They strive to provide quality facilities and services to all senior members of Karnataka State Police. The team meets on the last Friday of every month to discuss various activities of SPORTI , assess feedbacks and take measures to enhance the services. It’s main members are as follows</p>
                </div>
                <div className="col-12 col-md-6">
                <img src={i2} alt="" className='w-100 rounded-circle h-100' />
                 
                </div>
                </div>
           </div>


           <div className="ourteam container">
                <div className="row">
                   {
                    team.map((item, index)=>(
                        <div className="col-12 col-md-3">
                        <div className="profile-card p-2 rounded-3">
                            <img src={item.profile} alt={item.name} className="w-100 mb-2 rounded-3" />
                            <h1 className="fs-5 fw-bold">{item.name}</h1>
                            <h1 className="fs-6">{item.role}</h1>
                            <small className='text-muted'><i>{item.contact}</i></small>
                        </div>
                    </div>
                    ))
                   }
                </div>
           </div>
    </div>
  )
}

export default About