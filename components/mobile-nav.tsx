import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navlinks } from "@/constants";
import { useRouter } from "next/navigation";

export const MobileNavigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigation = (route: string) => {
    setOpen(false);
    router.push(route);
  };

  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="w-6 h-6 cursor-pointer" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-xl font-semibold"></SheetTitle>

            {navlinks &&
              navlinks.map((navlink) => (
                <Link
                  key={navlink.id}
                  href={navlink.route}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(navlink.route);
                  }}
                  className="transition-all duration-300 hover:border-b-[1px] hover:text-black hover:text-lg text-white"
                >
                  {navlink.title}
                </Link>
              ))}
            <div className="pt-10">
              <button
                onClick={() => {
                  setOpen(false);
                  router.push("/give");
                }}
                className="btn1"
              >
                Donate
              </button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
