import React from "react";
import "./homepage.css"

const Homepage = () => {
    return (
        <div className="homepage">
            <div>
      <header>
        <h1>
          AnswerVoyage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="websitelogo.png" alt="Site Logo" width="100" height="80" />
        </h1>
      </header>
      <nav>
        <ul>
          {/* Navigation list items */}
        </ul>
      </nav>
      <br />
      <form>
        <div>
          <label htmlFor="a">
            <p id="xyz">&nbsp;&nbsp;Ask a Question</p>
          </label>
          &nbsp;
          <textarea cols="140" rows="3" name="Mytext" id="askqn"></textarea>
        </div>
        <div className="submitbutton">
          &nbsp;&nbsp;
          <input type="submit" value="Submit" name="submitkrnahai" />
        </div>
        <br />
      </form>
      <h2>Stories</h2>
      <div className="row">
        <textarea cols="101" rows="20" name="Mytext" id="a"></textarea>
        <textarea cols="40" rows="20" name="Mytext" id="a"></textarea>
      </div>
      Upvote
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <i onClick={myFunction} className="fa fa-thumbs-up"></i>
      <br />
      <br />
      {/* Repeat the story content and upvote button as needed */}
      <div>
        View more....
        <br />
        <br />
        <br />
      </div>
      <h3>&nbsp;Contacts</h3>
      <address className="address1" id="contacts">
        &nbsp;Managed by AnswerVoyage pvt limited.
        <br />
        &nbsp;Visit us at:<br />
        &nbsp;vikeshkumar3640@gmail.com<br />
        &nbsp;Contact: 7903288699
        &nbsp;Valthan, Surat, Gujarat<br />
        &nbsp;India
      </address>
    </div>
     <div className="button">Logout</div>
        </div>
    )
}

export default Homepage