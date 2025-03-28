import Image from "next/image";
import SidebarLink from "./sidebar-link";
import Logo from "@/public/TheLogo.png";
import { ChartArea, CirclePlus, Settings, Vault } from "lucide-react";

export default function Sidebar({ user }) {
  return (
    <aside className="bg-zinc-950 text-white border-1 border-zinc-900 max-w-72 w-72 h-screen flex flex-col justify-between px-4">
      <div className="flex gap-4 items-center montserrat h-1/10">
        <Image
          className="h-13 w-13"
          src={Logo}
          width={100}
          height={100}
          alt="App's Logo"
        />
        <div>
          <h1 className="font-semibold text-[#ee6711] text-lg">GoVault</h1>
          <p className="text-zinc-600 text-sm">Be Safe & Stay Safe</p>
        </div>
      </div>
      <nav className="w-full">
        <SidebarLink href="/overview">
          <ChartArea size={22} />
          Overview
        </SidebarLink>
        <SidebarLink href="/vault">
          <Vault size={22} />
          My Vault
        </SidebarLink>
        <SidebarLink href="/generate">
          <CirclePlus size={22} />
          Generate
        </SidebarLink>
        {/* <SidebarLink href="/security">
          <MdOutlineSecurity size={22} />
          <p>Security</p>
        </SidebarLink> */}
        <SidebarLink href="/settings">
          <Settings size={22} />
          Settings
        </SidebarLink>
      </nav>

      <p className="text-zinc-800 text-xs mx-auto">
        Made by Murga. All Rights Reserved.
      </p>
    </aside>
  );
}
