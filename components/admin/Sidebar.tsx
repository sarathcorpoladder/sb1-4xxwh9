'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Users,
  BookOpen,
  Settings,
  LogOut
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Blog Posts",
    href: "/admin/blog",
    icon: FileText
  },
  {
    title: "Trainers",
    href: "/admin/trainers",
    icon: Users
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-3 py-4 space-y-6">
      <div className="px-3 py-2">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium rounded-md",
              pathname === item.href
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex-grow" />

      <div className="px-3">
        <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}