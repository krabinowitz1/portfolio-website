import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"

const KnightHacks = () => {
    return (
        <Layout>
            <Container>
                <h1>
                    Knight Hacks
                </h1>
                <p>
                    Every year, students travel from around the country to UCF for its annual hackathon Knight Hacks. Each year brought more hackers than the previous, and with growth came new challenges to face. That’s why in 2019, the Knight Hacks development team was formed, and we released the first rendition of the official Knight Hacks mobile app. The app was a success with over 250 downloads across both Android and iOS devices. 
                </p>
                <h3>
                    What It Is
                </h3>
                <p>
                    The Knight Hacks app improves the hackers’ experience by providing a user-friendly interface that delivers important information about the hackathon straight to their mobile devices. With the app, hackers can view the full weekend schedule and get updates in real-time on activities happening around campus so that they don’t have to worry about missing an event. 
                </p>
                <h3>
                    Requirements
                </h3>
                <p>
                    This year, we wanted to make some major enhancements to the app which included:
                </p>
                <ul>
                    <li>
                        Implementing a system for logging in via scanning a barcode
                    </li>
                    <li>
                        Integrating Firebase Authentication, Cloud Messaging, and Realtime Database
                    </li>
                    <li>
                        Adding a profile section that displays user-specific information
                    </li>
                </ul>
                <h3>
                    What I Did
                </h3>
                <p>
                    As lead, it was my responsibility to assign tasks to each of the Android developers and minimize any progress impediments. I held weekly meetings to make sure that we kept on track towards reaching our goals. 
                </p>
                <p>
                    To implement the login system, I used Google’s Mobile Vision API. It includes packages that enable your app to detect objects in photos and videos. Upon signing in to the event, each hacker will be given a badge and assigned a QR-code that is printed on their badge. Each QR-code has a unique ID encoded in it which is how we will identify who is logging into the app via Firebase Authentication. 
                </p>
            </Container>
        </Layout>
    )
}

export default KnightHacks