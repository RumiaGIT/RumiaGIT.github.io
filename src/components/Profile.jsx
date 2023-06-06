import profile from "../images/profile.png"

export default function Profile() {
    return (
        <div className="Profile">
            <div className="ProfileFixedFix">
                <h1>Ronnie van Meel</h1>
                <img src={profile} className="Avatar" />
                <p className="Intro">
                    Junior Data Scientist with an interest in Machine Learning, AI, Deep Learning, and more. 
                    Practicing calisthenics and keeping data of a long fitness journey.
                    <br /><br />
                    Graduated cum laude from the HZ University of Applied Sciences with a bachelor's degree in Data Science.
                </p>
                <hr />
                <a href="https://github.com/RumiaGIT">View my GitHub</a>
            </div>
        </div>
    )
}