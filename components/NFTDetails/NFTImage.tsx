import React from "react";
import { Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  wrapper: ` rounded-lg border dark:border-transparent dark:bg-[#323339]`,
  nftHeader: `flex items-center justify-between p-4`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-5 w-5 text-gray-500 dark:text-gray-400`,
  likesCount: `text-sm font-semibold text-gray-500 dark:text-gray-400`,
  nftImage: `rounded-b-lg object-cover`,
  imageContainer: ``,
};

const NFTImage = ({ image }: any) => {
  return (
    <div className={style.wrapper}>
      <div className={style.nftHeader}>
        <Image height={20} width={20} alt="eth" src="/eth-logo.svg" />
        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likesCount}> 200</div>
        </div>
      </div>
      <div className={style.imageContainer}>
        {image && <Image src={image} alt="nft" height="350" width="350" />}
        {console.log(image)}
      </div>
    </div>
  );
};

export default NFTImage;
