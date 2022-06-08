import { Image } from "@chakra-ui/react";

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
};

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image
        src="https://s2.coinmarketcap.com/static/img/coins/200x200/9291.png"
        width={40}
        height={40}
      />
      <h1>Ternoa</h1>
    </div>
  );
};

export default Logo;
