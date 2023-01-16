import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export default function BackgroundAnimated () {
        const particlesInit = useCallback(async engine => {
            await loadFull(engine);
        }, []);
        return (
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "white",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 0,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#2a68db",
                        },
                        links: {
                            color: "#b8b8b8",
                            distance: 150,
                            enable: true,
                            opacity: .5,
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
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.4,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 4, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
};