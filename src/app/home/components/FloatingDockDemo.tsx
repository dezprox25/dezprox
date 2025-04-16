import React from "react";
import { FloatingDock } from "@/Components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconBrandTiktok,
  IconBrandReddit,
  IconBrandPinterest,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://facebook.com/",
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://youtube.com/",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/",
    },
    {
      title: "TikTok",
      icon: (
        <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://tiktok.com/",
    },
    {
      title: "Reddit",
      icon: (
        <IconBrandReddit className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://reddit.com/",
    },
    {
      title: "Pinterest",
      icon: (
        <IconBrandPinterest className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://pinterest.com/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
