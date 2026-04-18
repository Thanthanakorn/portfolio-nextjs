"use client";

import {motion} from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description:
            "We build responsive, scalable websites and web applications using modern frameworks. From landing pages to complex SaaS platforms, we deliver solutions that drive business growth and user engagement."
    },
    {
        num: '02',
        title: 'Mobile App Development',
        description:
            "Our mobile app developers create high-performance solutions for iOS and Android. We build apps that are secure, user-friendly, and optimized for business success across all platforms."
    },
    {
        num: '03',
        title: 'UI/UX Design',
        description:
            "We craft intuitive, visually stunning interfaces that enhance user experience and business conversion rates. Our designs balance aesthetics with functionality to maximize user retention and satisfaction."
    },
    {
        num: '04',
        title: 'QA & Testing',
        description:
            "Comprehensive testing and quality assurance to ensure your product meets the highest standards. We identify bugs early, optimize performance, and validate that your application delivers a flawless user experience."
    },
    {
        num: '05',
        title: 'API Development & Integration',
        description:
            "Design and develop robust APIs that power your business applications. We integrate third-party services, build RESTful and GraphQL APIs, and ensure seamless communication between systems."
    },
    {
        num: '06',
        title: 'Cloud & DevOps',
        description:
            "Deployment, infrastructure management, and continuous integration solutions. We optimize your cloud architecture, automate workflows, and ensure your applications scale reliably and securely."
    },
    {
        num: '07',
        title: 'Database Design & Optimization',
        description:
            "Strategic database architecture, optimization, and management. We design schemas that support your business growth while maintaining data integrity, security, and performance."
    },
    {
        num: '08',
        title: 'Technical Consultation',
        description:
            "Expert guidance on technology strategy, architecture decisions, and best practices. We help you make informed choices that align with your business goals and technical requirements."
    },
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline
                                    text-transparent group-hover:text-outline-hover transition-all
                                    duration-500">
                                        {service.num}</div>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;