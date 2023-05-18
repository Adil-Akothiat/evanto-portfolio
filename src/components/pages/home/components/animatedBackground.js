import React, { useCallback, memo } from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
const particlesConfig = require("./particles.json");
particlesConfig.background.color.value="#fffff";
particlesConfig.particles.color=document.documentElement.style.getPropertyValue("--main-color");


export default memo(function BackgroundAnimated () {
        const particlesInit = useCallback(async engine => {
            await loadFull(engine);
        }, []);
        return (
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
            />
        );
});