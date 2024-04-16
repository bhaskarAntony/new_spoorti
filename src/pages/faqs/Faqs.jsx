import React from 'react'
import faqs from '../../data/faqs'
import './style.css'

function Faqs() {
  return (
    <div>
          <div className="faqs-page p-3 p-md-5">
            <h1 className="fs-1 fw-bold text-center">Faqs</h1>

            <div className="row">
            <div class="accordion" id="accordionExample">

         <div className="row">
         {
                faqs.map((item, index)=>(
                    <div class="accordion-item  mb-3">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="true" aria-controls="collapseOne">
                       {item.query_en}
                      </button>
                    </h2>
                    <div id={index} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                       {item.answer_en}
                      </div>
                    </div>
                  </div>
                ))
            }
         </div>
</div>
            </div>
        </div> 
    </div>
  )
}

export default Faqs