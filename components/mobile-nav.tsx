import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navlinks } from "@/contants";

export const MobileNavigation = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 cursor-pointer" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-xl font-semibold "></SheetTitle>

            {navlinks &&
              navlinks.map((navlink) => (
                <Link
                  key={navlink.id}
                  href={navlink.route}
                  className=" transition-all duration-300  hover:border-b-[1px] hover:text-black hover:text-lg text-white"
                >
                  {navlink.title}
                </Link>
              ))}
            <div className="pt-10">
              <button className="btn1">Donate</button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
