"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ToggleMode() {
  const { setTheme, theme } = useTheme(); // Access the current theme

  return (
    // <div className="rounded bg-gray-100 text-dark dark:bg-dark dark:text-gold p-3 shadow-md shadow-dark dark:shadow dark:shadow-gold cursor-pointer">
    //   {/* Moon icon for dark theme */}
    //   <Moon
    //     className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "hidden" : "flex"}`} // Hide Moon if in dark mode
    //     onClick={() => setTheme("dark")} // Set dark theme on click
    //   />
    //   {/* Sun icon for light theme */}
    //   <Sun
    //     className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? "hidden" : "flex"}`} // Hide Sun if in light mode
    //     onClick={() => setTheme("light")} // Set light theme on click
    //   />
    // </div>
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        {/* <span className="sr-only">Toggle theme</span> */}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
}
