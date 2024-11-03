import React from "react"
import { Home, UserPlus, Snowflake, UsersRound, Gem, Headset } from "lucide-react"
 
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton

  } from "../../ui/sidebar"

  // Menu items.
const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About Us",
      url: "/addmember",
      icon: UsersRound,
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: Gem,
    },
    {
      title: "Contact Us",
      url: "/duespayment",
      icon: Headset,
    },
    {
      title: "Login",
      url: "/login",
      icon: UserPlus,
    },
    {
      title: "Start A Free Trial",
      url: "/trial",
      icon: Snowflake,
    },
  ]
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MY HR-SUITE</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  