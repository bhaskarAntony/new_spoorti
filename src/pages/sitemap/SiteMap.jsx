import React from 'react'
import './style.css'
import sitemapdata from '../../data/sitemap'

function SiteMap() {
  return (
    <div className='sitemap p-2 p-md-5'>
    <h1 className="fs-1 fw-bold">Sitemap</h1>
    <hr />
    <br /><br />
  

    <div className="help-table">
        <table className='table'>
            <tr>
                <th>Document Type</th>
                <th>Download</th>
            </tr>
            {
                sitemapdata.map((item, index)=>(
                    <tr>
                        <td className='lead'>{item.title}</td>
                        <td>
                        <a href={item.link} className="lead bg-transparent d-block">Visit to {item.title}</a>
                            
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
</div>
  )
}

export default SiteMap