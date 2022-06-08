import { Image } from "@chakra-ui/react";

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
};

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image
        src="https://www.ternoa.com/static/images/home/Ternoa-logo.svg"
        width={100}
        height={60}
      />
    </div>
  );
};

export default Logo;
