import { LinkProps } from "@/utils/typings";
import Link from "next/link";

function NavLink({ name, Icon, path }: LinkProps) {
  return (
   <Link href={`${path}`}>
	  <div className="flex items-center cursor-pointer duration-200">
      <div className="p-2 rounded-full cursor-pointer hover:animate-bounce">
        <Icon className="h-6 w-6 text-purple-500" />
      </div>
    </div>
   </Link>
  );
}

export default NavLink;
