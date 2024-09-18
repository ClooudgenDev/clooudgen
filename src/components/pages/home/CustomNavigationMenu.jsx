"use client"

import * as React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function CustomNavigationMenu({ ...rest }) {
    return (
        <NavigationMenu {...rest}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/#" legacyBehavior passHref>
                        <NavigationMenuLink className={`bg-transparent mix-blend-difference ${navigationMenuTriggerStyle()}`}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 2xl:w-[600px] ">
                            {servicesData.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-transparent'>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2 2xl:w-[600px] ">
                            {companyData.map((company) => (
                                <ListItem
                                    key={company.title}
                                    title={company.title}
                                    href={company.href}
                                >
                                    {company.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                    <Link href="/special-offer" legacyBehavior passHref>
                        <NavigationMenuLink className={`bg-transparent font-semibold ${navigationMenuTriggerStyle()}`}>
                           Our Campaigns
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                    <Link href='/subscription#plan' legacyBehavior passHref>
                        <NavigationMenuLink className={`bg-transparent font-semibold  ${navigationMenuTriggerStyle()}`}>
                            Subscription Plans
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="">
                    <Link href="/make-your-team" className="" legacyBehavior passHref>
                        <NavigationMenuLink className={`relative overflow-hidden gradient-theme text-background transition-colors duration-1000 hover:text-background !font-extrabold ${navigationMenuTriggerStyle()}`}>
                            <div className="absolute w-full h-2 rotate-12 run">
                                <div className="w-full h-5 -rotate-45 bg-gradient-to-t from-white/0 via-white to-white/0 opacity-30"></div>
                            </div>
                            Make Your Team
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}








import Link from "next/link"
import { cn } from "@/lib/utils"
import servicesData from "@/lib/data/servicesData";
import companyData from "@/lib/data/companyData";

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"