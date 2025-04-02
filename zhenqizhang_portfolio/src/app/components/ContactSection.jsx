"use client";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const ContactSection = () => {
  
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
    };

    return (
        <section id="contact">
            <div className="md:grid md:grid-cols-2 gap-5 items-center py-8 px-4 xl:gap-40 sm:py-16 xl:px-0">
                <div>
                    <h1 className="text-white mb-10 text-xl lg:leading-normal font-extrabold">Leave me an message!</h1>
                    <p className="text-base max-w-md mb-10">
                        I&apos;m currently looking for any new opportunities, whether it is Graduate Program or Formal Job. If you have anything you want to know, please leave me a message and I will get back to you ASAP.
                        <br></br>
                        <br></br>
                        Or you can check out my GitHub and LinkedIn profile for more info!
                    </p>
                    <a
                        href="https://github.com/Jacky72"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-15 h-15 bg-white text-black rounded-full hover:bg-purple-300 transition duration-300 mr-20"
                        style={{
                            backgroundImage: `url("/image/Github.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />
                    <a
                        href="https://www.linkedin.com/in/zhenqi-zhang-680897283"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-15 h-15 bg-white text-black rounded-full hover:bg-purple-300 transition duration-300"
                        style={{
                            backgroundImage: `url("/image/Linkedin.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />
                </div>
                <div>
                <form className="flex flex-col gap-6 w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
                    <TextField
                        label="Your email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: '#FFFFFF', 
                                backgroundColor: 'transparent !important',
                            },
                            '& .MuiFormLabel-root.Mui-focused': {
                                color: '#FFFFFF', 
                            },
                        }}
                    />

                    <TextField
                        label="Subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Enter Anything"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: '#FFFFFF', 
                                backgroundColor: 'transparent !important',
                            },
                            '& .MuiFormLabel-root.Mui-focused': {
                                color: '#FFFFFF', 
                            },
                        }}
                    />

                    <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        placeholder="Leave your message here"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFFFFF ', 
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: '#FFFFFF', 
                                backgroundColor: 'transparent !important',
                            },
                            '& .MuiFormLabel-root.Mui-focused': {
                                color: '#FFFFFF', 
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Send Message
                    </Button>
                </form>
                </div>
            </div>
        </section>
    );
  };
  
  export default ContactSection;