import React from "react"
import { SidebarProvider } from "../../components/ui/sidebar"
import { AppSidebar } from "../Layout/Sidebar/AppSideBar"
import NavBar from "./NavBar/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="w-full">
        <NavBar/>
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}

export default Layout