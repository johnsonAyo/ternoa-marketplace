import React from "react";
import { Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  wrapper: `relative flex h-[450px] w-[340px] cursor-pointer 
  flex-col rounded-lg bg-white shadow-lg transition-all 
  duration-300 hover:shadow-2xl dark:bg-[#333333]`,
  imageContainer: `h-3/4 overflow-hidden`,
  nftImage: `rounded-t-lg object-cover`,
  nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
  nftInfoContainer: `flex justify-between`,
  collectionTitle: `text-sm text-gray-500 dark:text-gray-400`,
  nftTitle: `text-sm font-bold`,
  priceContainer: `flex flex-col items-end justify-center space-y-1`,
  priceTitle: `text-xs font-light`,
  wethImageContainer: `flex items-center justify-end space-x-2`,
  likesContainer: `flex items-center justify-end space-x-2`,
};

const NftCard = ({ listing }: { listing: any }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image
          alt="nft"
          className={style.nftImage}
          height={350}
          width={340}
          src={listing.img}
        />
      </div>
      <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
          <div>
            {listing && (
              <div className={style.collectionTitle}>{listing.title}</div>
            )}
            <div className={style.nftTitle}>{listing.desc}</div>
          </div>
          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image height={16} width={16} alt="weth" src="/weth-logo.svg" />
              <div>{listing.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
