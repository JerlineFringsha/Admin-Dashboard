import {
  BarChart2,
  ShoppingBag,
  Users,
  DollarSign,
  ClipboardList,
  BarChart,
  Settings,
  Menu
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5cF6",
    href: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#EC4899",
    href: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10B981",
    href: "/sales",
  },
  {
    name: "Orders",
    icon: ClipboardList,
    color: "#F59E0B",
    href: "/orders",
  },
  {
    name: "Analytics",
    icon: BarChart,
    color: "#3B82F6",
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    href: "/settings",
  },
  {
    name: "Set",
    icon: Settings,
    color: "#EC4899",
    href: "/set",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <div className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors ">
                <item.icon size={20} style={{color:item.color, minWidth:"20px"}}/>
              </motion.div>

              <AnimatePresence> 
              {isSidebarOpen && (
                <motion.span
                className="ml-4 whitespace-nowrap"
                initial={{opacity:0, width:0}}
                animate={{opacity:1, width:"auto"}}
                exit={{opacity:0, width:0}}
                transition={{duration:0.2, delay:0.3}}               
                >
                  {item.name}
                
                </motion.span>
              )}
              </AnimatePresence>
            </Link>
          ))}
        </div>

      </div>
    </motion.div>
  );
};
export default Sidebar;
