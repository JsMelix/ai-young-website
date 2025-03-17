import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
// Remove the incorrect import
// import logoImage from "../../../public/ai-logo.jpg";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "Sobre el Hub", active: true },
    { text: "Proyectos", active: false },
    { text: "Equipo", active: false },
    { text: "Blog", active: false },
    { text: "Como participo?", active: false },
    { text: "Contacto", active: false },
    { text: "", active: false },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between p-8 w-full bg-white border-b border-[#d9d9d9]">
      {/* Logo section */}
      <div className="flex items-center gap-6">
        <img 
          className="h-10 w-auto object-contain" 
          alt="AI Young Hub Logo" 
          src="https://imgur.com/pmr61nN" 
        />
      </div>

      {/* Navigation section */}
      <NavigationMenu className="flex-1">
        <NavigationMenuList className="flex flex-wrap items-start justify-end gap-2">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  className={`p-2 rounded-lg ${item.active ? "bg-neutral-100" : ""}`}
                >
                  <span className="font-single-line-body-base text-[#1e1e1e] whitespace-nowrap">
                    {item.text}
                  </span>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Authentication buttons */}
      <div className="flex items-center gap-3 w-[178px]">
        <Button
          variant="outline"
          className="flex-1 p-2 bg-[#e3e3e3] rounded-lg border-[#767676]"
        >
          <span className="font-single-line-body-base text-[#1e1e1e] whitespace-nowrap">
            Sign in
          </span>
        </Button>

        <Button
          variant="default"
          className="flex-1 p-2 bg-[#2c2c2c] rounded-lg"
        >
          <span className="font-single-line-body-base text-neutral-100 whitespace-nowrap">
            Register
          </span>
        </Button>
      </div>
    </header>
  );
};
