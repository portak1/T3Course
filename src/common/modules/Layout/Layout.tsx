import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar/Navbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-gray-800 text-white">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
