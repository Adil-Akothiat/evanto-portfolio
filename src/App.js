import React, { Suspense, lazy } from "react";
import Loader from "./components/loader/loader";
const MyRoutes = lazy(()=> import("./routes/routes"));

export default function App () {  
  return <Suspense fallback={<Loader />}><MyRoutes /></Suspense>
}