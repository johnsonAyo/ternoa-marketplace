import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import TopNavbarLayout from "../../layouts/TopNavbarLayout";
import NFTImage from "../../components/NFTDetails/NFTImage";
import NFTSalesInfo from "../../components/NFTDetails/NFTSalesInfo";
import NFTBasicInfo from "../../components/NFTDetails/NFTBasicInfo";
import { toast } from "react-toastify";

const style = {
  wrapper: `h-[100vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4  dark:bg-[#202226]
  lg:max-w-none lg:py-8 lg:px-24 `,
  nftContainer: `flex flex-col lg:flex-row lg:space-x-4`,
  leftContainer: `flex flex-col space-y-4`,
  leftElement: "hidden lg:block",
  rightContainer: `flex flex-1 flex-col `,
  buyoutContainer: ``,
};

const NFT = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [listing, setListing] = useState<any | null>([]);
  const { tokenID } = router.query;
  console.log(tokenID);

  useEffect(() => {
    getListing();
  }, []);

  const deleteNft = async () => {
    try {
      const response = await axios.delete(
        `https://ternoa-backend.onrender.com/api/nft/${tokenID}`
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
        `https://ternoa-backend.onrender.com/api/nft/${tokenID}`
      );
      if (list.status === 200) {
        setListing(list.data.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TopNavbarLayout>
      <div className={style.wrapper}>
        {loading ? (
          <button
            disabled
            type="button"
            className=" justify-center text-white bg-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-lg rounded-lg text-lg px-5 py-2.5 text-center mr-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        ) : (
          <div className={style.nftContainer}>
            <div className={style.leftContainer}>
              <div className={style.leftElement}>
                {<NFTImage image={listing?.img} />}
              </div>
            </div>
            <div className={style.rightContainer}>
              <NFTBasicInfo name={listing?.title} desc={listing.desc} />
              <div className={style.buyoutContainer}>
                <NFTSalesInfo deleteNft={deleteNft} price={listing?.price} />
              </div>
            </div>
          </div>
        )}
      </div>
    </TopNavbarLayout>
  );
};

export default NFT;
