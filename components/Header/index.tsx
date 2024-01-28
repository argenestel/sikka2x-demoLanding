import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <header className={`w-full z-99999 py-4 bg-white dark:bg-sikkaMaroon dark:to-sikkaMaroonGrad dark:from-sikkaMaroon transition duration-100`}>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <Link href="/">
              <Image src="/images/hero/logosikka.svg" alt="logo" decoding="async" loading="eager" width={119.03} height={30} />
          </Link>
          <div className="flex md:hidden xl:hidden items-center"> {/* Updated this line */}
            <div className="relative mr-6 mt-2.5">
              <div className="border border-strokedark bg-gradient-to-r from-sikkaGold2 to-sikkaGold text-sikkaMaroon font-bold rounded-xl py-1 px-4 flex items-center"> {/* Updated this line */}
                <FaStar className="m-1" />
                <span style={{ marginLeft: '0.5rem' }}>4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
