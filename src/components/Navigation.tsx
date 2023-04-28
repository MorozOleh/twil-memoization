import { NAVIGATION_HEADER } from "@/constants/data";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = () => {
    const { pathname } = useRouter();
    return (
        <nav className="bg-gray-600">
            <ul className="flex gap-3 p-3 mx-auto max-w-5xl">
                {NAVIGATION_HEADER.map(({ href, title }) => (
                    <li key={href}>
                        <Link
                            className={`${href === pathname ? "text-red-300" : ""
                                } hover:text-red-300 transition-colors`}
                            href={href}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
