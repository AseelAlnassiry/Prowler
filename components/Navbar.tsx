import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white flex px-2 py-2">
      {/* Logo & Title */}
      <Link href='/' className="flex items-center space-x-1">
        <img src="/ProwlerLogo.svg" alt="" className="h-14" />
        <span className="akashi text-3xl">Prowler</span>
      </Link>
      {/* Navigation Items */}
    </nav>
  );
};
export default Navbar;
