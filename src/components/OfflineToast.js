import React from 'react'

const OfflineToast = () => {
  return (
    <div className="offlineToast">
    <div>
       <svg style={{width:24, height:24, position: "relative"}} viewBox="0 0 24 24" className="barIcon">
            <g fill="none" fillrule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <g fill="#FFF" fillrule="nonzero" opacity="{0.36}" transform="translate(4 5)">
                    <rect style={{opacity: 0.4}} width="2.286px" height="7.897px" x="4.571px" y="6.769px" rx="1.143px"></rect>
                    <rect style={{opacity: 0.4}} width="2.286px" height="11.282px" x="9.143px" y="3.385px" rx="1.143px"></rect>
                    <rect style={{opacity: 0.4}} width="2.286px" height="14.667px" x="13.714px" rx="1.143px"></rect>
                    <rect style={{opacity: 0.4}} width="2.286px" height="4.513px" y="10.154px" rx="1.143px"></rect>
                </g>
                <path fill="#D8D8D8" d="M5.13 5.288l1.569 1.57-1.57 1.568a.819.819 0 101.16 1.159l1.568-1.57 1.57 1.57a.819.819 0 101.158-1.159l-1.57-1.569 1.57-1.569A.82.82 0 009.426 4.13L7.857 5.699l-1.569-1.57A.82.82 0 005.13 5.29z"></path>
            </g>
        </svg>
    </div>
        <p>No Internet. Please check connectivity.</p>
    </div>
  )
}

export default OfflineToast