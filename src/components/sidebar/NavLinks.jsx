import {
  Cart,
  Chart,
  Home,
  Kanban,
  Lock,
  Profile,
} from "../../components/icons/Icons";
export const navLinks = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: <Home />,
  },
  {
    path: "marketplace",
    name: "NFT Marketplace",
    icon: <Cart />,
  },

  {
    path: "tables",
    name: "Tables",
    icon: <Chart />,
  },
  {
    path: "kanban",
    name: "Kanban",
    icon: <Kanban />,
  },
  {
    path: "profile",
    name: "Profile",
    icon: <Profile />,
  },
  {
    path: "sign-in",
    name: "Sign In",
    icon: <Lock />,
  },
];
