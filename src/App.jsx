import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Component/RootLayout/Rootlayout";
import Home from "./pages/Home";
import Buses from "./pages/Buses";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buses" element={<Buses />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
