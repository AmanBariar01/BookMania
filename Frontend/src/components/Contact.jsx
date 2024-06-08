import React, { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    console.log(name,email,subject,message);

    const sendEmail = async(e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:3000/contact", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,
                email,
                subject,
                message
            })
        });

        const data = await res.json();
        console.log(data);

        if(data.status == 401 || !data){
            console.log("error");
            toast.error("Unable to send email");
            setTimeout(() => {}, 2000);
        }else{
            toast.success("Email Sent Successfully");
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")

            setTimeout(() => {
                //window.location.reload();
            }, 2000);
            
        }
    }


    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl mb-6">
                    Contact <strong className="text-orange-500">Us :)</strong>
                </h1>
                <form  className="space-y-6 max-w-lg mx-auto text-left">
                    <div>
                        <label htmlFor="name"  className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name} 
                            onChange={(e) => setName(e.target.value) }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email"  className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value) }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject"  className="block text-sm font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Enter subject"
                            value={subject} 
                            onChange={(e) => setSubject(e.target.value) }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows={4}
                            value={message} 
                            onChange={(e) => setMessage(e.target.value) } 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            onClick={sendEmail}
                            className="bg-orange-500 text-white rounded-md px-6 py-2 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
