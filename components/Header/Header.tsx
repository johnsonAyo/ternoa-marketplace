import { useState, useEffect } from "react";
import Logo from "./Logo";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import {
  SearchIcon,
  MenuIcon,
  CreditCardIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { useTheme } from "next-themes";
import MyModal from "../../pages/AddNft";

const Navbar = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <MoonIcon
          className={style.themeSwitcher}
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <SunIcon
          className={style.themeSwitcher}
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const style = {
    themeSwitcher: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300`,
    wrapper: `sticky top-0 z-50 bg-white px-4 py-2 shadow-md dark:bg-gray-900 flex items-center justify-between space-x-6`,
    logoContainer: `xl:pr-40`,
    searchContainer: `ml-8 hidden flex-1 sm:block`,
    menusContainer: `hidden pr-6 lg:block xl:pl-8,`,
    iconsContainer: `flex items-center space-x-6`,
    icons: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white`,
    desktopIcons: `hidden lg:block`,
    mobileIcons: `sm:hidden`,
    tabletIcons: `lg:hidden`,
  };

  return (
    <header className={style.wrapper}>
      <div>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div>
        <Link href="/AddNft">
          <h1>Create your NFT</h1>
        </Link>
      </div>

      <div className={style.searchContainer}>
        <SearchInput />
      </div>

      <div className={style.menusContainer}>
        <button onClick={connectWithMetamask}>
          <h1> {address ? "Wallet Connected" : "Connect Wallet"}</h1>
        </button>
      </div>
      <div className={style.menusContainer}>
        {address && (
          <button onClick={disconnect}>
            <h1>Disconnect Wallet</h1>
          </button>
        )}
      </div>

      <div className={style.iconsContainer}>
        <UserCircleIcon className={`${style.icons} ${style.desktopIcons}`} />
        {renderThemeChanger()}
        <SearchIcon className={`${style.icons} ${style.mobileIcons}`} />
        <MenuIcon className={`${style.icons} ${style.tabletIcons}`} />
      </div>
    </header>
  );
};

export default Navbar;
