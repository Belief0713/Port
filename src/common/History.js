const History = () => {
    return (
        <>
            <section id='history' className='Skills'>
                <div className='container'>
                    <div className='section-title' data-aos='fade-up'>
                        <h2>Resume</h2>
                    </div>
                    <h2 className="success">- Work History -</h2>
                    <div data-aos='fade-up' data-aos-delay='150' style={{display:"flex", marginBottom: "4rem",marginTop:"4rem"}}>
                        <div style={{marginRight: "2rem"}}>
                            <img src={`./assets/img/logo_fullstack.jpg`} width="300px" height="auto" alt='' style={{borderRadius:'10px'}} />
                        </div>
                        <div>
                            <h3>Full stack developer</h3>
                            <h4>March 2020 - Present</h4>
                            <ul>
                                <li>Led a team of developers in the design and development of a comprehensive CRM (Customer Relationship Management) system using Next.js on the front end and Nest.js on the back end.</li>
                                <li>Implemented RESTful APIs for seamless communication between the front-end and back-end components, improving data retrieval and manipulation efficiency 15%.</li>
                                <li>Conducted code reviews based on Golang, provided technical guidance, and mentored junior developers to ensure adherence to best practices and maintain high code quality standards.</li>
                                <li>Integrated third-party APIs such as Stripe for payment processing and Mailchimp for email marketing automation, enhancing the platform's functionality and user experience.</li>
                                <li>Used Babel And Webpack For Compiling And Bundling The Project.</li>
                                <li>Followed TDD Using Chai And Mocha For Unit Testing, Enzyme For Component-Based Testing And Cypress For End To End Testing.</li>
                                <li>Used Jira Tool For Requirement Gathering, Github And Git Lab As Version Control System.</li>
                                <li>Assisted in the development of a real-time chat application using Socket.io for WebSocket communication, React.js for the front end, and Node.js with Express.js for the back end.</li>
                                <li>Implemented user authentication and authorization features using JSON Web Tokens (JWT) and Passport.js, enhancing the security of the application.</li>
                                <li>Collaborated closely with cross-functional teams including designers, product managers, and QA engineers to gather requirements, define project scope, and deliver solutions that met business objectives.</li>
                                <li>Integrated third-party APIs such as Google Maps for location-based services and PayPal for payment processing, enhancing the application's functionality and usability.</li>
                                <li>Implemented automated testing using Jest and Selenium, resulting in improved code reliability and faster development cycles.</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='150' style={{display:"flex"}}>
                        <div style={{marginRight: "2rem"}}>
                            <img src={`./assets/img/logo_frontend.jpg`} width="300px" height="auto" alt='' style={{borderRadius:'10px'}} />
                        </div>
                        <div>
                            <h3>Frontend Developer</h3>
                            <h4>February 2016 - May 2020</h4>
                            <ul>
                                <li>Collaborated with UX/UI designers to create a visually appealing and intuitive user interface, resulting in increased user engagement and satisfaction.</li>
                                <li>Used Webpack For Bundling.</li>
                                <li>Used Mui And Antd To Build Components From Scratch.</li>
                                <li>Setup CI/CD With Jenkins, Docker And Kubernetes.</li>
                                <li>Used Jest For Unit Testing And Cypress For Integration Testing</li>
                                <li>Used ChakraUI And Material UI To Build Up React Application.</li>
                                <li>Improved Site Indexing And Loading Speed 15% By Using Next.Js.</li>
                                <li>Developed New Vue Components For The Customer Facing Application, Improving The Average User Time On Page By 2 Minutes.</li>
                                <li>Automated Image Optimization Using Grunt, Minified JS And CSS Reducing Page Load Times By 86%.</li>
                                <li>Suggested Innovative Ideas For Performance Upgrades And Attracted Huge Number Of Customers.</li>
                                <li>Used JQuery For DOM Manipulation And Created JQuery Plugins For Custom Use.</li>
                                <li>Used Media Queries And Bootstrap To Make The Application Responsive Across All The Platforms.</li>
                                <li>Used Redux To Store Data Globally And For Easy Retrieval Of Data To Any Component In The App.</li>
                                <li>Maximized Use Of Events And Promises In ES6 And React For Application Control Flow.</li>

                            </ul>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='150' style={{display:"flex", marginBottom: "4rem",marginTop:'64px'}}>
                        <div style={{marginRight: "2rem"}}>
                            <img src={`./assets/img/logo_blockchain.jpg`} width="300px" height="auto" alt='' style={{borderRadius:'10px'}} />
                        </div>
                        <div>
                            <h3>Web3 Developer</h3>
                            <h4>March 2016 - August 2020</h4>
                            <ul>
                                <li>Effectively communicate technical concepts to non-technical stakeholders, improving understanding and alignment. Achieved a 95% client satisfaction rate based on feedback.</li>
                                <li>Developed highly responsive and scalable web applications with Next.js and React.js, resulting in a 20% increase in page load speed and a 15% boost in user engagement.</li>
                                <li>Designed and developed scalable Microservices using Django, Spring Boot facilitating seamless integration with internal systems and improving data processing efficiency by 35%.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default History;