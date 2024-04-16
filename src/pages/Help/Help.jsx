import React from 'react'
import './style.css'
import HelpData from '../../data/help'
function Help() {
  return (
    <div className='help p-2 p-md-5'>
        <h1 className="fs-1 fw-bold">Help</h1>
        <hr />
        <br /><br />
        <p className='lead'>Viewing Information in Various File Formats This website includes some content that is available in non-HTML format. They might not be visible properly if your browser does not have the required plug-ins.
 <br /> <br />
        For example, Acrobat Reader software is required to view Adobe Acrobat PDF files. If you do not have this software installed on your computer, you can download it for free. The following table lists some plug-ins that you will require.</p>

        <div className="help-table">
            <table className='table'>
                <tr>
                    <th>Document Type</th>
                    <th>Download</th>
                </tr>
                {
                    HelpData.map((item, index)=>(
                        <tr>
                            <td className='lead'>{item.type}</td>
                            <td>
                                {
                                    item.download.map((subItem, subIndex)=>(
                                        <span className="lead bg-transparent d-block">{subItem}</span>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    </div>
  )
}

export default Help