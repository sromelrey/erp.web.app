"use client";

import {
  UserGroupIcon,
  HomeIcon,
  CircleStackIcon,
  BanknotesIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
//https://nextui.org/docs/components/tabs
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Users", href: "/dashboard/master-data/users", icon: HomeIcon },
  {
    name: "Administrator",
    href: "/dashboard/administrator",
    icon: UserGroupIcon,
  },
  {
    name: "Master Data",
    href: "/dashboard/master-data",
    icon: CircleStackIcon,
  },
  { name: "Purchasing", href: "/dashboard/purchasing", icon: BanknotesIcon },
  { name: "Sales", href: "/dashboard/sales", icon: PresentationChartLineIcon },
  {
    name: "Reporting",
    href: "/dashboard/sales",
    icon: ClipboardDocumentListIcon,
  },
  { name: "Accounting", href: "/dashboard/sales", icon: BuildingLibraryIcon },
  { name: "Accounting", href: "/dashboard/sales", icon: BuildingLibraryIcon },
  { name: "Accounting", href: "/dashboard/sales", icon: BuildingLibraryIcon },
];

export default function SubMenu() {
  const pathname = usePathname();

  return (
    <div className='flex flex-row border-solid border-2 border-sky-500 rounded-3xl p-2 w-max md:w-max'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex p-2 h-[48px] grow items-center justify-center gap-4 bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
