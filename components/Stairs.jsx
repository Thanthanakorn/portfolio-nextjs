import {motion} from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//calculate the reverse index fot staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={stairAnimation}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.1 * reverseIndex(index),
                        }}
                        className="h-full w-full bg-accent relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs;