import React from "react";
import { BiRefresh, BiLinkExternal } from "react-icons/bi";
import { MdShare, MdMoreVert } from "react-icons/md";
import NFTSubInfo from "./NFTSubInfo";

const style = {
  topContainer: `flex items-ceter justofy-between`,
  collectionTitle: `mt-5 text-lg font-semibold  `,
  actionItems: `flex divide-x divide-gray-300 rounded-lg border border-gray-300 mx-4`,
  actionItemContainer: `flex cursor-pointer items-center justofy-center p-3`,
  icon: `h-6 w-6 text-gray-500 dark:textgray-400`,
  assetTitle: `pt-6 text-3xl font-bold text-blue-500 `,
  subInfoContainer: `hidden lg:block`,
};

const NFTBasicInfo = ({ name,desc}: any) => {
  console.log(name);
  const actionItems = [
    { icon: <BiRefresh className={style.icon} /> },
    { icon: <BiLinkExternal className={style.icon} /> },
    { icon: <MdShare className={style.icon} /> },
    { icon: <MdMoreVert className={style.icon} /> },
  ];
  return (
    <div>
      <div className={style.topContainer}>
        <div className={style.assetTitle}>{name} </div>
        <div className={style.actionItems}>
          {actionItems.map((item, index) => (
            <div key={index} className={style.actionItemContainer}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className={style.collectionTitle}> {desc} </div>
      <div className={style.subInfoContainer}>
        <NFTSubInfo />
      </div>
    </div>
  );
};

export default NFTBasicInfo;
