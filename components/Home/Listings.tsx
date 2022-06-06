import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import NftCard from "./NftCard";

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 
  md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
};

const Listings = () => {
  const [listings, setListings] = useState([]);
  // const marketPlace = useMarketplace(
  //   "0xc79E0B144B2C815276478b87B9DDAEF2F14dB916"
  // );

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    try {
      const list: any = await axios.get("http://localhost:4000/api/nft");
      if (list.status === 200) {
        const  nft = list.data.data.data
        setListings(nft);
        console.log(list);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(listings);
 
  return (
    <div className={style.wrapper}>
      {listings.length > 0 ? (
        <>
          {listings?.map((listing:any, index) => (
            <Link
              key={index}
              href={`/assets/${listing._id}}`}
            >
              <a>
                <NftCard listing={listing} />
              </a>
            </Link>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Listings;
