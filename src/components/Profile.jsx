import React from "react";

function Profile() {
    return (
        <section id="profile">
            <div className="display">
                <h2>Profile</h2>
                <hr />
                <h3>About Me</h3>
                <p>
                    I'm a college student looking for employment opportunities. I am a passionate
                    programmer with experience in web and android development. I can effectively
                    self-manage during independent projects, as well as collaborate as part of a
                    team. I like trying new things that can add value to my work and upgrade my
                    skill set. I am willing to bring forth a motivated attitude and a variety of
                    skills.
                </p>
                <hr />
                <h3>Details</h3>
                <p>
                    <span>
                        <b>Name:</b>&nbsp;&nbsp; Subhadeep Chakraborty
                    </span>
                    <br />
                    <span>
                        <b>Profession:</b>&nbsp;&nbsp; Student
                    </span>
                    <br />
                    <span>
                        <b>Location:</b>&nbsp;&nbsp; Gayeshpur, West Bengal, India
                    </span>
                    <br />
                    <span>
                        <b>Interests:</b>&nbsp;&nbsp; Coding, Cooking, Boxing
                    </span>
                    <br />
                    <br />
                </p>
                <a
                    className="button btn"
                    href="https://rafael00x.github.io/resume/"
                    target="resume">
                    Resume
                </a>
            </div>
        </section>
    );
}

export default Profile;
