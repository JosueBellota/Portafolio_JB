import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './particles.css';

function Particle() {

    const particlesInit = async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };

    const particlesLoaded = (container => {
        console.log(container);
    }, []);


    return (
        
        <Particles
        
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                zIndex: -1,
                background: {
                    color: {
                        value: "#2c2d44",
                    },
                },
                fpsLimit: 120,
                interactivity: {

                    events: {
                        onClick: {
                            enable: false,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    }, 
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 50,
                            duration: 1,
                        },
                        
                        grab: {
                            distance: 100,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 2 },
                    },
                },
                detectRetina: true,
            }}

        />
    
    )
}

export default Particle