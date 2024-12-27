"use client";
import HeadLogo from '../../public/logo/image.png'
import Link from "next/link";
import { CgFormatLineHeight } from "react-icons/cg";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle

// import { GiHamburgerMenu } from "react-icons/gi";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

 import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"

 import { useState } from 'react';
import { cn } from '@/lib/utils';

import React from 'react';
import { components } from "@/constant";
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';


export const Header = () => {
   const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <nav className="bg-background bg-gray-50 w-full h-auto shadow-lg">
      <div className="items-center justify-around h-20 hidden md:flex">
         <div className="flex items-center">
         <Link className="logo-welcome" href="/"><Image src={HeadLogo} alt=""/></Link>
        </div> 

        <div className="flex space-x-6">
        <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid-cols-1 gap-3 p-4 md:w-[220px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
              
              <ListItem href="" title="Artificial Intelligence">
              Cutting-edge AI solutions for business automation and growth
              </ListItem>
              <ListItem href="/" title="Application Development">
              Custom software solutions for web, mobile, and desktop
              </ListItem>
              <ListItem href="/" title="Cloud & Database">
              Scalable cloud infrastructure and database solutions
              </ListItem>
              <ListItem href="/" title="Compliance">         
              Regulatory compliance and security solutions
              </ListItem>
              <ListItem href="/" title="On Demand Talent">
              
              Expert developers and tech talent on demand
              </ListItem>

              <Link href='/' className='block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
            <div className="py-2 md:py-4 px-6 md:px-6  inline-block rounded-lg text-blue-500 font-medium ">
            View all services →

							</div>
             </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0 top-0  w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ">
            <ul className="grid-cols-1 gap-3 p-4  md:w-[220px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
              
              <ListItem href="/" title="Retail & E-commerce">
              Digital solutions for modern retail businesses
              </ListItem>
              <ListItem href="/" title="Healthcare">
              Innovative technology for healthcare providers
              </ListItem>
              <ListItem href="/" title="Education">
              
              Digital transformation for educational institutions
              </ListItem>
              <ListItem href="/" title="Legal">
              Technology solutions for legal professionals
              </ListItem>

              <Link href='/' className='block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
            <div className="py-2 md:py-4 px-6 md:px-6  inline-block rounded-lg text-blue-500 font-medium ">
            View all industries →
							</div>
             </Link>
            </ul>
           
          </NavigationMenuContent>
        </NavigationMenuItem>
       

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Case Studies
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
                
              ))}
             
            </ul>
            <div className='flex items-center m-4 justify-between gap-4'>
                 
                 <div className='flex items-center justify-center gap-1 select-none text-blue-500 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
              <Link href='/' className=''>
             Client Hub 
              </Link>
              <CgFormatLineHeight/>
              </div>

                <Link href='/' className='inline-block select-none space-y-1 text-blue-500 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
             View all resources →
              </Link>
 
              </div>
          </NavigationMenuContent>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
 </div>

        <Link href="/free-strategy-session">
  <button className=" text-white font-semibold py-4 px-6  bg-blue-600  transition duration-300 ease-in-out">
  Schedule a meeting
  </button>
</Link>
      </div>

 {/* Mobile Menu */}
 <div className="flex justify-center h-20 gap-20 items-center md:hidden lg:hidden">
         <div>
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image src={HeadLogo} alt="logo" width={200} height={120} />
          </Link>
        </div>  
      
        
<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
  <SheetTrigger> <GiHamburgerMenu className="h-8 w-8" color="#000" /></SheetTrigger>
  <SheetContent className='w-[450px] sm:w-[400px] h-screen overflow-scroll'>
    {/* Add an accessible title for the screen readers */}
    <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

    <div className="flex flex-col space-y-6 justify-center items-center mt-10 pb-20">
      {/* Services Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <div className="space-y-4">
          <Link href="/services/ai" className="block text-gray-600 hover:text-gray-900">Artificial Intelligence</Link>
          <Link href="/services/app-development" className="block text-gray-600 hover:text-gray-900">Application Development</Link>
          <Link href="/services/cloud-database" className="block text-gray-600 hover:text-gray-900">Cloud & Database</Link>
          <Link href="/services/compliance" className="block text-gray-600 hover:text-gray-900">Compliance</Link>
          <Link href="/services/talent" className="block text-gray-600 hover:text-gray-900">On Demand Talent</Link>
          <Link href="/services" className="block text-blue-600 hover:text-blue-700 font-medium">View all services →</Link>
        </div>
      </div>

      {/* Industries Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Industries</h2>
        <div className="space-y-4">
          <Link href="/industries/retail" className="block text-gray-600 hover:text-gray-900">Retail & E-commerce</Link>
          <Link href="/industries/healthcare" className="block text-gray-600 hover:text-gray-900">Healthcare</Link>
          <Link href="/industries/education" className="block text-gray-600 hover:text-gray-900">Education</Link>
          <Link href="/industries/legal" className="block text-gray-600 hover:text-gray-900">Legal</Link>
          <Link href="/industries" className="block text-blue-600 hover:text-blue-700 font-medium">View all industries →</Link>
        </div>
      </div>

       {/* Resources */}
       <div>
        <h2 className="text-xl font-semibold mb-4">Resources</h2>
        <div className="space-y-4">
          <Link href="/industries/retail" className="block text-gray-600 hover:text-gray-900">Digital Roadmap</Link>
          <Link href="/industries/healthcare" className="block text-gray-600 hover:text-gray-900">Technology Assessment</Link>
          <Link href="/industries/education" className="block text-gray-600 hover:text-gray-900">ROI Calculator</Link>
          <Link href="/industries/legal" className="block text-gray-600 hover:text-gray-900">Project Cost Calculator</Link>
          <Link href="/industries" className="block text-gray-600 hover:text-gray-900 font-medium">Best Practices</Link>
          <Link href="/industries" className="block text-gray-600 hover:text-gray-900 font-medium">Technologies</Link>
          <Link href="/industries" className="block text-gray-600 hover:text-gray-900 font-medium">Blog</Link>
          <Link href="/industries" className="block text-gray-600 hover:text-gray-900 font-medium">Talent Profiles</Link>
          <Link href="/industries" className="block text-blue-600 hover:text-blue-700 font-medium">View all resources →</Link>

        </div>
      </div>

      <Link href="/free-strategy-session">
        <button className=" text-white font-semibold py-4 px-6 bg-blue-600 transition duration-300 ease-in-out">
          Schedule a meeting
        </button>
      </Link>
    </div>
  </SheetContent>
</Sheet>

      </div>
    </nav>
  );
};



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"