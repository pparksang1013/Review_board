import { Link } from "react-router-dom";

export const HeaderComp = () => {
    return (
        <header className="text-3xl font-black p-8">
            <Link to={"/"}>헤더</Link>
        </header>
    );
};
