import React from 'react'

const OnlineToast = () => {
  return (
    <div className="onlineToast">
    <div>
    <svg width="24" height="24" viewBox="0 0 24 24" class="barIcon"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="#FFF" fill-rule="nonzero" opacity="0.9" transform="translate(4 4)"><rect width="2.286" height="7.867" x="4.571" y="6.743" rx="1.143"></rect><rect width="2.286" height="11.238" x="9.143" y="3.371" rx="1.143"></rect><rect width="2.286" height="14.609" x="13.714" rx="1.143"></rect><rect width="2.286" height="4.495" y="10.114" rx="1.143"></rect></g></g></svg>
    </div>
        <p>Back Online</p>
    </div>
  )
}

export default OnlineToast