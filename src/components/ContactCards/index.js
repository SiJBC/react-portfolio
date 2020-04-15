import React from 'react';




function ContactCard() {
    return (
        <div className="bg-secondary">
            <div className="row justify-content-center">
                <div className="card">
                    <div className="col text-center">
                        <div className="mt-5">
                            <h3>Give me a call </h3>
                            <i className="fa fa-phone fa-4x " />
                            <div>
                                <br></br>
                                <a href="tel: 0403-373-588">
                                    <h2>0403 373 588</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="col text-center">
                        <div className="mt-5">
                            <h3>Send me an email </h3>
                            <i className="fas fa-envelope-square fa-4x"></i>
                            <div>
                                <br></br>
                                <a href="email: s_colman@hotmail.com">
                                    <h2>s_colman@hotmail.com</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="col text-center">
                        <div>
                            
                            <a href="https://github.com/sijbc">
                                <i className="fab fa-github-square fa-4x"></i>
                                <h3>Github </h3>
                            </a>
                            <div>

                                
                                <a href="https://www.linkedin.com/in/simon-colman-628344109/">
                                    <i className="fab fa-linkedin fa-4x"></i>
                                    <h3>Linkedin </h3>
                                </a>

                                
                                <a href="https://drive.google.com/file/d/1OCiuWBvLX9ZjTQGcNY8Wshc8BHGwIPi-/view?usp=sharing">
                                    <i className="far fa-file fa-4x"></i>
                                    <h3>Resume </h3>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard