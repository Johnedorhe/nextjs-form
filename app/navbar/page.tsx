"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Sign In', path: '/auth/sign-in' },
  { name: 'Sign Up', path: '/auth/sign-up' },
]

const Navbar = () => {
  const pathname = usePathname()
  const { setTheme } = useTheme()

  return (
    <div className='flex justify-between'>
        <nav>
            <Button variant="ghost" size="sm">
                <Link href="/">LOGO</Link>
            </Button>
        </nav>
      <nav className="flex items-center space-x-4">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <Button
              variant={pathname === route.path ? "default" : "ghost"}
              size="sm"
            >
              {route.name}
            </Button>
          </Link>
        ))}
      </nav>
      <nav>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
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
      </nav>
    </div>
  )
}

export default Navbar
