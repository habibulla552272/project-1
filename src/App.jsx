import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Component/Rootlayout";
import Home from "./pages/Home";


function App() {
   const myRouter=createBrowserRouter(
      createRoutesFromElements(
        <Route element={< Rootlayout/>}>
          <Route path="/" element={<Home />} />

        </Route>
      )
    );
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
