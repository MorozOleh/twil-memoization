import { IChildren } from "@/types/props";
import { Navigation } from "./Navigation";

const Layout = ({ children }: IChildren) => {
    return (
        <div>
            <Navigation />
            <main className="p-3 mx-auto max-w-5xl">{children}</main>
        </div>
    );
};

export default Layout;
