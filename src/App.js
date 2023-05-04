import React, { Suspense } from "react";
import MyRoutes from "./routes/routes";
import Loader from "./components/loader/loader";

export default function App () {  
  return <Suspense fallBack={<Loader />}><MyRoutes /></Suspense>
}