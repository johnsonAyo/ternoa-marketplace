import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

const style = {
  container: `mt-2`,
  wrapper: `flex flex-col h-[400px]  dark:bg-[#202226] `,
};

const initialState = {
  title: "",
  price: "",
  desc: "",
  img: "",
};

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<any | null>(initialState);
  const { title, desc, img, price } = state;
  const router = useRouter();
  const { tokenID } = router.query;

  console.log("tokenId", tokenID);
  const editNft = async (data: Object) => {
    try {
      const response = await axios.patch(
        `https://ternoa-backend.onrender.com/api/nft/${tokenID}`,
        data
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    editNft(state);

    setIsOpen(false);

    toast.success("NFT Edited Successfully");
  };

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button type="button" onClick={openModal}>
          Edit your Nft
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-lg font-medium  text-center leading-6 text-gray-900"
                  >
                    Edit your NFT
                  </Dialog.Title>
                  <div className={style.container}>
                    <form className={style.wrapper} onSubmit={handleSubmit}>
                      <label
                        className="block ml-2 mt-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="title"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className=" m-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Name ..."
                        onChange={handleInputChange}
                        value={title}
                        required
                        maxLength={40}
                      />

                      <label
                        className="block ml-2 mt-1  text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="desc"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="Enter description ..."
                        className=" m-2 mt-1  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleInputChange}
                        value={desc}
                        required
                        maxLength={40}
                      />

                      <label
                        className="block ml-2 mt-1  text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="img"
                      >
                        Img
                      </label>
                      <input
                        type="url"
                        name="img"
                        id="img"
                        className=" m-2 mt-1  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Image Link ..."
                        onChange={handleInputChange}
                        value={img}
                        required
                      />
                      <label
                        className="block ml-2 mt-1  text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="price"
                      >
                        Listing Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className=" m-2  mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your Listing Price ..."
                        onChange={handleInputChange}
                        value={price}
                        maxLength={5}
                      />

                      <button
                        type="submit"
                        className=" m-2 mt-5  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        List your NFT
                      </button>
                    </form>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
