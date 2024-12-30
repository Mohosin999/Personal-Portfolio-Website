import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-center">
      <div className="w-11/12 flex items-center justify-center px-4 py-6">
        {/* Left side logo */}
        <div className="flex-1">
          <Link href={"/"}>
            <h4 className="text-xl">
              Mohosin <span className="text-primarycolor">.</span>
            </h4>
          </Link>
        </div>

        {/* Right side menu buttons */}
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
