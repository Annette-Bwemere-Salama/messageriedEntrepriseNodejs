import React, { Fragment } from 'react'
import "../styles/home.scss"
export default function HomePages() {
  return (
    <Fragment>
      <div className="chat">
        <div className="chat__wrapper">
          <div className="chat__message">
            <div className="date"></div>
            <div>Message #1</div>
          </div>
          <div className="chat__message chat__message-own">
            <div className="date"></div>
            <div>Message #2</div>
          </div>
        </div>
      </div>
      <div className="chat__form">
        <form id="chat__form">
          <input id="text-message" type="text" placeholder="Type your message here ..." />
          <button type="submit">Send</button>
        </form>
      </div>
      <div id="result"></div>
    </Fragment>

  )
}
