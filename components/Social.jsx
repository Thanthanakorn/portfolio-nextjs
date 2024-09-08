import Link from "next/link";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Thanthanakorn" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/thanakorn-hoonsil/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/tha.ho.7796420" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/thanthanakorn_/" },
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}

        </div>
    );
};

export default Social;