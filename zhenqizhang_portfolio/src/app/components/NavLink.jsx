import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-white underline underline-offset-2 font-sans sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </Link>
    );
};

export default NavLink;