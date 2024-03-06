import { socialLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className ='bg-dark w-full text-gray-100 p-3 mt-3 pb-1'>
      <div className="flex flex-col w-full pt-3 pb-2">
        <div className ='flex items-center justify-between px-2'>
          <div className="flex flex-col flex-shrink-0 space-x-3 items-center">
            <Image
              src={"/assets/my-profile-picture-transparent-bg.png"}
              alt="my-image"
              width={50}
              height={50}
              className="object-contain rounded-full"
            />
            <span className="text-base mt-3 text-gray-100 tracking-wider font-black">
              ADEKOLA ADEDEJI
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <h3>SOCIALS</h3>
            <div className="flex items-center space-x-3 mt-2">
              {socialLinks.map(({ name, Icon, path }) => (
                <Link key={name} href={`${path}`}>
                  <Icon className="h-4 w-4 text-gray-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <h3 className ='text-sm text-center mt-12 overline'>&copy; Copyrights 2024. All Rights Reserved</h3>
      </div>
    </footer>
  );
}

export default Footer;