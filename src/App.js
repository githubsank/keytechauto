import React, {useState} from "react";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Manager from "./pages/Manager";
import Marketing from "./pages/Marketing";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Sidenavmenubar from "./components/Sidenavmenubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  function App() {
  return (
   <Router>
      <Sidenavmenubar/>
      <Routes >
       <Route path ="/" index element = {<Dashboard/>}/>
        <Route path ="/ Manager" element = {<Manager/>}/>
        <Route path ="/Accounts" element = {<Accounts/>}/>
        <Route path ="/Marketing" element = {<Marketing/>}/>
        <Route path ="/Services" element = {<Services/>}/>
        <Route path ="/Settings" element = {<Settings/>}/>
        <Route element = {<Dashboard/>}/>
      </Routes>
   </Router>
   
  );
}
 
export default App;
