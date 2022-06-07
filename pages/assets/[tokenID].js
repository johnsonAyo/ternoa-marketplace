import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import TopNavbarLayout from "../../layouts/TopNavbarLayout";
import NFTImage from "../../components/NFTDetails/NFTImage";
import NFTSalesInfo from "../../components/NFTDetails/NFTSalesInfo";
import NFTDetails from "../../components/NFTDetails/NFTDetails";
import NFTBasicInfo from "../../components/NFTDetails/NFTBasicInfo";
import { toast } from "react-toastify";

const style = {
  wrapper: `h-[100vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4  dark:bg-[#202226]
  lg:max-w-none lg:py-8 lg:px-24 `,
  nftContainer: `flex flex-col lg:flex-row lg:space-x-4`,
  leftContainer: `flex flex-col space-y-4`,
  leftElement: "hidden lg:block",
  rightContainer: `flex flex-1 flex-col `,
};

const NFT = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [listing, setListing] = useState([]);
  const { tokenID } = router.query;
  console.log(tokenID);

  const editNft = () => {
    router.replace(`http://localhost:3000/EditNft/${tokenID}`);
  };

  useEffect(() => {
    getListing();
  }, []);

  const deleteNft = async () => {
    try {
      const response = await axios.delete(
        `https://ternoa.herokuapp.com/api/nft/${tokenID}`
      );
      if (response.status === 204) {
        router.replace("/");
        toast.success(" Nft Successfully Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!tokenID) router.replace("/");
  }, []);

  const getListing = async () => {
    try {
      setLoading(true);
      const list = await axios.get(
        `https://ternoa.herokuapp.com/api/nft/${tokenID}`
      );
      if (list.status === 200) {
        setListing(list.data.data.data);
        setLoading(false);
        console.log(listing);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TopNavbarLayout>
      <div className={style.wrapper}>
        {loading ? (
          <div> Loading ... </div>
        ) : (
          <div className={style.nftContainer}>
            <div className={style.leftContainer}>
              <div className={style.leftElement}>
                {<NFTImage image={listing.img} />}
              </div>
              <div className={style.leftElement}>
                <NFTDetails />
              </div>
            </div>
            <div className={style.rightContainer}>
              <NFTBasicInfo name={listing?.name} />
              <div className={style.buyoutContainer}>
                <NFTSalesInfo deleteNft={deleteNft} editNft={editNft} />
              </div>
            </div>
          </div>
        )}
      </div>
    </TopNavbarLayout>
  );
};

export default NFT;
