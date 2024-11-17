"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+66) 89 936 1588",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "thanakorn.hon@student.mahidol.edu",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Bangkok, Thailand",
    },
];

const Contact = () => {
    const [state, handleSubmit] = useForm("xzzbvbry"); // Replace "xzzbvbry" with your actual Formspree form ID.

    if (state.succeeded) {
        return <p className="text-green-500">Thanks for contacting me! I'll get back to you soon.</p>;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.2,
                    duration: 0.4,
                    ease: "easeIn",
                },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Fill out the form below and I will get back to you as soon as possible.
                            </p>

                            {/* Input Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Firstname" required />
                                <Input type="text" name="lastname" placeholder="Lastname" required />
                                <Input type="email" name="email" placeholder="Email address" required />
                                <Input type="tel" name="phone" placeholder="Phone number" />
                            </div>

                            {/* Select Dropdown */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="internship">Internship</SelectItem>
                                        <SelectItem value="frontend">Software Engineer (Front-end)</SelectItem>
                                        <SelectItem value="backend">Software Engineer (Back-end)</SelectItem>
                                        <SelectItem value="fullstack">Full-Stack Developer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* Textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here..."
                                name="message"
                                required
                            />
                            <ValidationError field="message" errors={state.errors} />

                            {/* Submit Button */}
                            <Button size="md" className="max-w-40" type="submit" disabled={state.submitting}>
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center"
                                    >
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;