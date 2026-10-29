import { motion } from "motion/react";
import {
  House,
  BriefcaseBusiness,
  UserRound,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "./lib/utils";
import Logo from "@/assets/logo.webp";

export type Page = "home" | "portofolios" | "about" | "contact";

export default function Layout({
  activePage,
  setActivePage,
  className,
}: {
  activePage: Page;
  setActivePage: (page: Page) => void;
  className: string;
}) {
  const pages: {
    id: Page;
    label: string;
    icon: LucideIcon;
  }[] = [
    { id: "home", label: "Beranda", icon: House },
    {
      id: "portofolios",
      label: "Portofolio",
      icon: BriefcaseBusiness,
    },
    { id: "about", label: "Tentang saya", icon: UserRound },
    { id: "contact", label: "Kontak", icon: Phone },
  ];

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-yellow-500 w-10 h-10 rounded-full relative overflow-hidden">
          <img src={Logo} alt="logo" />
          <div className="absolute inset-0 rounded-full inner-border-custom pointer-events-none"></div>
        </div>
        <p className="relative z-10 hidden md:inline text-preset-3">
          Wenning
        </p>
      </div>

      <motion.div className="flex gap-1 p-1 bg-neutral-0 rounded-full border-custom">
        {pages.map((page) => {
          const IconComponent = page.icon;
          const isActive = activePage === page.id;

          return (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className="relative flex items-center px-4 py-3 h-10 rounded-full transition-colors duration-200 z-10 focus-visible:outline-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:border focus-visible:border-neutral-900 border-transparent"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-yellow-500 rounded-full border border-neutral-900 z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <IconComponent size={20} className="relative z-10 md:hidden" />
              <span className="relative z-10 hidden md:inline text-preset-4-semibold">
                {page.label}
              </span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
