import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"

const OverMyDeadBody = () => {
  
    return (
        <Layout>
        <Container>
            <h1>Over My Dead Body</h1>
                <p style={{fontFamily:'Arial, Helvetica, sans-serif'}}>There may be a situation where you need to tell someone something, but only after you’ve passed on to the afterlife. Perhaps you want to confess your true feelings to a lifelong crush, apologize to an old acquaintance for something you may have done, or inform someone of a dangerous mission you did not come back from. That’s where Over My Dead Body comes in.
            </p>
            <h3>What It Is</h3>
            <p>Over My Dead Body is an email service for the afterlife. It works like this:</p>
            <ol>
                <li>
                    Create a note and assign email recipients to it.
                </li>
                <li>
                    Set the interval between times when you must check in with the app confirming you’re still alive.
                </li>
                <li>
                    Check-in with app before the end of the interval, otherwise you will be presumed dead and all of your notes will get sent out.
                </li>
            </ol>
            <h3>Requirements</h3>
            <p>	We needed to have a server running that would be able to:</p>
            <ul>
                <li>
                    Save a user’s notes and recipients to a database
                </li>
                <li>
                    Query the database on a fixed interval to see if any users did not make it to their check-in
                </li>
                <li>
                    For every user returned by the query, send out all of their notes to the email recipients assigned to them.
                </li>
            </ul>
            <h3>My Approach</h3>
            <p>
                To build the server, I used Node.js and the Express framework. For the database, I went with MongoDB. Each request made by the client passes through a JWT-secured REST API before any operation is done on the database. 
            </p>
            <p>
                I relied on the SendGrid API to give the server the added email service functionality. SendGrid made sending emails simple. All I needed to do was write a function that collects all the “expired” users’ notes and configure them as email objects. Then they all get passed as an array to a function provided by the API to be sent out to the appropriate addresses. And Because the app needs to repeatedly check the database to see if any users missed their check-in deadline, I call JavaScript’s setInterval() method, passing in this function for it to execute once a day.
            </p>
        </Container>
        </Layout>
    )
}

export default OverMyDeadBody