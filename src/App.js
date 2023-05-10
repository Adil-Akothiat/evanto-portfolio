import React, { 
  Suspense, 
  lazy
} from "react";
import Loader from "./components/loader/loader";
import Themes from "./components/themes/themes";
const MyRoutes = lazy(()=> import("./routes/routes"));

export default function App () { 
  return (
    <Suspense fallback={<Loader />}>
      <Themes />
      <MyRoutes />
    </Suspense>
  )
}