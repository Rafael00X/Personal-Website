import React from "react";

function Profile() {
    return (
        <section id="profile">
            <div className="display">
            <h2>Profile</h2>
            <hr/>
            <h3>About Me</h3>
            <p>I am a passionate programmer with experience in web and android development, as well as knowledge in cybersecurity. I like to write clean and concise code which is both readable and properly structured. I also like trying new things that can add value to my work and upgrade my skill set.</p>
            <hr/>
            <h3>Details</h3>
            <p>
                <span><b>Name:</b>&nbsp;&nbsp; Subhadeep Chakraborty</span><br/>
                <span><b>Profession:</b>&nbsp;&nbsp; Student</span><br/>
                <span><b>Location:</b>&nbsp;&nbsp; Gayeshpur, West Bengal, India</span><br/>
                <span><b>Interests:</b>&nbsp;&nbsp; Coding, Cooking, Boxing</span><br/><br/>
            </p>
            <a className="button btn" href="" target="_blank">Resume</a>
            </div>
        </section>
    );
}

export default Profile;