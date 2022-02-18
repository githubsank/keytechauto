import React from "react";
import "./Sidenavmenubar.css";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from "react-router-dom";
function Sidenavmenubar() {
  return (
    <div className="sidenav">
      <input type="checkbox" id="menu"/>
       <label className="icon" htmlFor="menu">
         <div className="menu">
         </div>
       </label>
       <nav>
         <ul>
           <NavLink to="/" activestyle={{fontWeight : "bold" ,colour : "red"}}>
           <li>
             <HomeIcon className="icons"></HomeIcon>
             <div className="menu-text">
              Dashboard
             </div>
           </li>
           </NavLink> 
           <NavLink to="/Accounts" activestyle={{fontWeight : "bold" ,colour : "red"}}>
           <li>
            <AccountBoxIcon className="icons"></AccountBoxIcon>
             <div className="menu-text">
              Accounts
             </div>
           </li>
           </NavLink> 
           <NavLink to="/Manager" activestyle={{fontWeight : "bold" ,colour : "red"}}>
           <li>
             <AccountBalanceWalletIcon className="icons"></AccountBalanceWalletIcon>
             <div className="menu-text">
              Manager
             </div>
           </li>
           </NavLink>
           <NavLink to="/Marketing" activestyle={{fontWeight : "bold" ,colour : "red"}}>
           <li>
             <ManageAccountsIcon className="icons"></ManageAccountsIcon>
             <div className="menu-text">
              Marketing
             </div>
           </li>
           </NavLink>
           <NavLink to="/Services" activestyle={{fontWeight : "bold" ,colour : "red"}}>
           <li>
             <LocalLaundryServiceIcon className="icons"></LocalLaundryServiceIcon>
             <div className="menu-text">
              Services
             </div>
           </li>
           </NavLink>
           <NavLink to="/Settings" activestyle={{fontWeight : "bold" ,colour : "red"}}>
           <li>
             <SettingsIcon className="icons"></SettingsIcon>
             <div className="menu-text">
              Settings
             </div>
           </li>
           </NavLink>  
        </ul>
      </nav>
    </div>
  );
}

export default Sidenavmenubar;
