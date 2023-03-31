import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import TopNavbarLayout from "../layouts/TopNavbarLayout";

const style = {
  wrapper: `m-20 lg:ml-80 lg:mr-80`,
};

export default function Modal() {
  const router = useRouter();
  const url = `https://ternoa-backend.onrender.com/api/nft`;
  const [state, setState] = useState<any | null>("");
  const { title, desc, img, price } = state;

  const AddNft = async (data: Object) => {
    try {
      const response = await axios.post(url, data);
      if (response.status === 201) {
        router.replace("/");
        toast.success("NFT Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    AddNft(state);
  };

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <TopNavbarLayout>
        <div className={style.wrapper}>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="title"
              >
                Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Name ..."
                onChange={handleInputChange}
                value={title}
                maxLength={40}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="desc"
              >
                Description
              </label>
              <input
                type="text"
                name="desc"
                id="desc"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter description ..."
                onChange={handleInputChange}
                value={desc}
                maxLength={40}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="img"
              >
                Img
              </label>
              <input
                type="url"
                name="img"
                id="img"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Image Link ..."
                onChange={handleInputChange}
                value={img}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the Listing Price ..."
                onChange={handleInputChange}
                value={price}
                maxLength={5}
                required
              />
            </div>

            <button
              type="submit"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              List your NFT
            </button>
          </form>
        </div>
      </TopNavbarLayout>
    </>
  );
}
