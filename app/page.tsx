"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import styles from "./page.module.css"; // Corrected CSS import
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <nav className={styles.navbar}> {/* Fixed className here */}
        <div className="logo"><a href="#">      <img src="./images/ByteStream.png" style={{ width: "40px", height: "40px" }} alt="ByteStream" /></a></div>
        <ul>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F7BFE">
                <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F7BFE">
                <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F7BFE">
                <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F7BFE">
                <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/>
              </svg>
            </a>
          </li>
        </ul>

      </nav>
      <header className={styles.header}>
      <h1 className={styles.title}>ByteChat</h1>
        <p className={styles.subtitle}>
          Discover what your network can do for you!
        </p>
        <br />
        <div className={styles.suggestionList}>
          <div
            className={styles.suggestion}
            style={{ backgroundImage: `url('./1.jpg')` }}
          >
            <span className="material-symbols-rounded">draw</span>
            <h4>Find new ways to boost Productivity</h4>
          </div>
          <div className={styles.suggestion}>
            <span className="material-symbols-rounded">lightbulb</span>
            <h4>Get more from your Team</h4>
          </div>
          <div className={styles.suggestion}>
            <span className="material-symbols-rounded">explore</span>
            <h4>Chat securely without latency with ByteChat</h4>
          </div>
          <div className={styles.suggestion}>
            <span className="material-symbols-rounded">code</span>
            <h4>Scale Faster! Share Insights, data, analytics, code and more.</h4>
          </div>
        </div>
      </header>

      <br />

      <div
        className="container flex flex-col items-center justify-center min-h-screen"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#202020",
          borderRadius: "50px",
          height: "400px",
        }}
      >
        <div className="row">
        <div
  className="anotherside"
  style={{
    backgroundColor: "#3F7BFE",
    borderRadius: "30px",
    height: "200px",
    width: "30rem",
    scrollbarWidth: "auto",
    padding: "10px",
    marginBottom: "10px",
    color: "white",
    fontWeight: "bolder",
    fontSize: "18px",
    overflowY: "auto" // Enable vertical scrolling
  }}
>
  {messages.map((msg, index) => (
    <li
      key={index}
      className={classes["no-bullets"]}
      style={{
        display: "flex", // Use flexbox for alignment
        alignItems: "center", // Vertically center the items
        marginBottom: "10px" // Optional: add space between messages
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
      </svg>&nbsp;&nbsp;&nbsp;&nbsp;
      {msg}
    </li>
  ))}
</div>


          {/* Text message send */}
          <div
            className="myside"
            style={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "30px",
              height: "50px",
              width: "30rem",
              scrollbarWidth: "auto",
              padding: "10px",
              marginBottom: "10px",
              display: "flex", // Align input and button horizontally
              alignItems: "center", // Vertically center the items
              fontSize:"15px"
            }}
          ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F7BFE"><path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"/></svg>
            <input
              type="text"
              style={{
                borderColor: "transparent",
                backgroundColor: "transparent",
                flexGrow: 1, // Allow the input to take up available space
                padding: "10px", // Optional: Adjust padding for spacing
                fontSize:"15px",
                color:"black"
              }}
              onChange={(e) => setMessage(e.target.value)}
              className={classes["chat-input"]}
              placeholder="Chat with your Stream"
            />
            
            {/* Send Button */}
            <button
  onClick={() => sendMessage(message)}
  className={`${classes["button"]} button`} // Add the external class
>
  Send


             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F7BFE"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}