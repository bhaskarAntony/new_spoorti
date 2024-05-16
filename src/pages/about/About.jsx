import React from 'react'
import './style.css'
import i1 from '../../assets/images/aboutus/smwaus_2.jpg'

import team from '../../data/team'
import aboutbanners from '../../data/aboutus'
import membersData from '../../data/members'

function About() {
  return (
    <div>
        <div className="contact-banner ">
            {/* <h1 className='fs-1 fw-bold text-center'>About us</h1>
            <p className="fs-6 text-center">
            SPORTI consists of a team of Senior Officers from various units of the Police Department. It also has a Working Committee who conduct various Conferences and Workshops to discuss the operations and functioning of the Institute. The team hosts periodic meetings every last Friday of the month for effective improvements of the Institute.
            </p> */}
             <div className="skew-container">
        <div className="skew-left">
            <h1 className="fs-2 fw-bold">ABOUT US</h1>
        </div>
        <div className="skew-right d-flex align-items-center">
        <h1 className="fs-2 fw-bold"></h1>
        </div>
    </div>

           
        </div>

        {/* <div className="about-card container py-5 p-3">
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
           </div> */}
          <div className="container py-5">
          <div className="text-center">
                <i class="bi bi-stars fs-2 text-warning"></i>
                <span className="fs-6 subtitle d-block text-center">SPORTI</span>
                <h1 className="fs-2 fw-bold title">Senior Police Officers Research and Training Institute</h1>
               
                </div>
          <div className="row align-items-center">
            <div className="col-12 col-md-9 mb-3">
                <div className="about-left">
              
                <p className="fs-6 text-secondary mt-4">
                SPORTI - Senior Police Officers Research and Training Institute was established in the year 1973 and has been successfully catering to the needs of Police department. It was prior known as Senior Police Officer Mess and renamed to SPORTI in 2019 to enhance the quality of services being provided. Similarly to expand scope of services and offerings to more officers, KSRP Research and Training Institute was established in 2014 and was renamed as SPORTI-2 subsequently. This evolution reflects the institute's dedication to advancing knowledge and expertise in its field while adapting to meet the evolving needs of its stakeholders. Both SPORTI 1 and SPORTI 2 are an all exclusive facility for serving and retired senior police officials only.
                </p>

                <p className="fs-6 text-secondary mt-4">
                <p className="fs-6 text-secondary mt-4">
                SPORTI fulfils the requirement of organising conferences and training, accommodation, host private and public events, celebrations and dining. It also boasts superior and quality infrastructure featuring elegant Conference rooms, Training room, extensive Event hall, state of art Mini Theatre for screening of movies and documentaries, luxurious accommodation - VIP, Family and Executive rooms, impressive indoor Dining hall and outdoor Barbecue, well equipped Gym for maintaining fitness, sporting avenues like Badminton, Table Tennis and Billiards and also a vast Hockey ground. SPORTI’s central location enables our guests to reach important official destinations with reduced travel time and also experience Bengaluru’s cosmopolitan culture post work hours. Both institutes are committed to providing high-quality experience and impeccable service to enhance the living experience.
                </p>
                </p>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <div className="about-left">
                <img src={i1} alt="" className="w-100 mt-3" />
                    <img src='./images/sporti2/About_Us_SPORTI_2.jpg' alt="" className="w-100 mt-3" />
                </div>
            </div>
           </div>

          </div>

          <div className="bg-light p-3">
          <div className="ourteam container">
           <div className="text-center">
                <i class="bi bi-stars fs-2 text-warning"></i>
                <h1 className="fs-2 fw-bold title">core COMMITTEE  of SPORTI</h1>
                <span className="fs-6 subtitle d-block">SPORTI has a working committee comprising of senior officers from various units of Karnataka State Police. They strive to provide quality facilities and services to all senior members of Karnataka State Police. The team hold meetings on the last Friday of every month to discuss various activities at SPORTI , assess feedbacks and take measures to enhance the services. The committee consists of :</span>
                </div>
                <div className="row">
                   {
                    team.map((item, index)=>(
                        <div className="col-12 col-md-3 mb-4">
                        <div className="profile-card p-2 rounded-3 h-100 ">
                            <img src={item.profile} alt={item.name} className="w-100 mb-3 rounded-3" />
                           <div>
                           <h1 className="fs-5 fw-bold title">{item.name}</h1>
                            <h1 className="fs-6 title text-muted">{item.role}</h1>
                            <small className='small d-block'>{item.desc}</small>
                            <small className='text-muted d-block'><i>{item.contact}</i></small>
                           </div>
                        </div>
                    </div>
                    ))
                   }
                </div>
           </div>
          </div>


          <div className="commity-members p-3 p-md-5">
            <div className="text-center py-4">
                <h3 className="fs-4 subtitle">SPORTI</h3>
                <h1 className="title fs-2 fw-bold">Senior police officers Research And Training Institute <br /> committee members Details </h1>
            </div>
        <table className='table'>
            <tr>
                <th>SI.No</th>
                <th>Name</th>
                <th>SPORTI</th>
            </tr>
            {
                membersData.map((item, index)=>(
                    <tr>
                        <td className='lead'>{index+1}</td>
                        <td className='lead' title={`${item.name} , ${item.role}`}>{item.name} <br /> {item.role}</td>
                        <td className='lead' title={item.desc}>{item.desc}</td>
                    </tr>
                ))
            }
        </table>
          </div>
{/* 
                   <h1 className="fs-1 fw-bold p-3 p-md-5 py-2">Wall Of Fame</h1>
           <div className="wall-frames p-3 p-md-5">
            {
                aboutbanners.map((item, index)=>(
                    <div className="frame-card">
                        <img src={item.image_url} alt="" className="w-100" />
                    </div>
                ))
            }
           </div> */}
    </div>
  )
}

export default About