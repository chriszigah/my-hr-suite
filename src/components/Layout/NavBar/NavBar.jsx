import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import {  SidebarTrigger } from "@/components/ui/sidebar"


import { Button } from "../../ui/button"

const NavBar = () => {
  return (
    <header className="bg-white text-white px-24 mt-2 mb-2">
        <div className="container mx-auto flex justify-between items-center">
            <img src={Logo} alt="logo" className="h-8"/>
            <nav className="lg:flex hidden">
                <ul className="flex space-x-6 text-black gap-8">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About Us</Link></li>
                    <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </nav>
            <div className="gap-4 lg:flex hidden">
            <Button className="bg-white text-black w-32 border border-primary rounded-[6px]">Login</Button>
            <Button  variant="destructive" className="bg-primary text-white border-primary rounded-[6px] hover:bg-primary">Start a  Free Trial</Button>
            </div>
            <SidebarTrigger className="text-primary lg:hidden text-4xl" size={60} />
          
        </div>
    </header>
  );
};

export default NavBar;
