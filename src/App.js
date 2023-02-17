import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import MyRoutes from "./routes/routes";

export default function App () {  
  useEffect(()=> {
    AOS.init();
  }, []);

  return (
    <MyRoutes />
  );
}