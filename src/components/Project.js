import React from 'react';

export default function Project() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.gifer.com/HKVW.gif" className="d-block w-100" alt="" style={{ width: '100%', height: '500px' }} />
            <div className="carousel-caption ">
              <h1>Smart Pillbox</h1>
              <h4>(FLUTTER,FIREBASE)</h4>
              <p >The Smart Pillbox is an IoT based system that can help individuals manage their medication
schedules. The system consists of a physical pill box with compartments for storing pills and
a mobile application that communicates with the pill box over the internet. The Smart
Pillbox application allows users to set reminders for taking their medication.</p>
<a href="https://github.com/geetakotur/pillbox" className="btn btn-dark">Github</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.gifer.com/HKVW.gif" className="d-block w-100" alt="" style={{ width: '100%', height: '500px' }} />
            <div className="carousel-caption ">
              <h1>TrackMe,Vehicle tracking system</h1>
              <h4>(FLUTTER,FIREBASE)</h4>
              <p>An IoT-based school bus tracking system enables better communication between schools,
parents, and students. Parents can receive notifications and alerts regarding bus arrivals,
departures, delays, or any other relevant information. This improves parental engagement and
allows parents to plan their schedules accordingly, ensuring that their children are picked up or
dropped off at the appropriate times.</p>
<a href="https://github.com/geetakotur/vehicletracking" className="btn btn-dark">Github</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.gifer.com/HKVW.gif" className="d-block w-100" alt=""  style={{ width: '100%', height: '500px' }} />
            <div className="carousel-caption ">
              <h1>NewsNow-NewsApp</h1>
              <h4>(REACTJS,NODEJS)</h4>
              <p>A news application developed using React.js typically involves creating a web application 
that fetches news data from the News API provided by newsapi.org. React components are 
utilized to structure the user interface, and HTTP client is used to make API requests. The 
application can display a list of news articles with details such as headlines, descriptions, 
and sources. Users can navigate through the news and stay updated with the latest 
information.</p>
<a href="https://github.com/geetakotur/newsnow" className="btn btn-dark">Github</a>
            </div>
          </div>
          {/* Add three more carousel items below */}
          <div className="carousel-item">
            <img src="https://i.gifer.com/HKVW.gif" className="d-block w-100" alt="" style={{ width: '100%', height: '500px' }} />
            <div className="carousel-caption ">
              <h1>TextUtils</h1>
              <h4>(REACTJS,NODEJS)</h4>
              <p>It is a ReactJs website built primarily to do various operations on regular typed text. You can 
safely use WordPad or NotePad for text drafting and saving, but TextUtils offers much more 
than simple text drafting and formatting. TextUtils can convert your text to any case in just 
one simple click of a button, reverse the given text and removes extra space from the 
provided text</p>
<a href="https://github.com/geetakotur/textutils" className="btn btn-dark">Github</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.gifer.com/HKVW.gif" className="d-block w-80"  alt="" style={{ width: '100%', height: '500px' }} />
            <div className="carousel-caption ">
              <h1>INoteBook</h1>
              <h4>(MERN)</h4>
              <p>The INotebook project is a full-stack web application developed using React.js for the 
frontend, Node.js and Express for the backend, and MongoDB as the database. This project 
facilitates the creation, retrieval, updating, and deletion (CRUD) of notes through a RESTful 
API.</p>
<a href="https://github.com/geetakotur/inotebook" className="btn btn-dark">Github</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.gifer.com/HKVW.gif" className="d-block w-100" alt="" style={{ width: '100%', height: '500px' }} />
            <div className="carousel-caption  ">
              <h1>Karnataka Conveyors Management System</h1>
              <h4>(HTML,CSS,JAVASCRIPT,PHP)</h4>
              <p>• Admin service-A website to manage the company sales, purchases, Employee salary details,
                  and stock.<br></br>
                  • Customer Service-Placing their order, approval of the quotation amount sent by the company
                  and payment related details etc.</p>
                  <a href="https://github.com/geetakotur/karnatakaconveyor" className="btn btn-dark">Github</a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
