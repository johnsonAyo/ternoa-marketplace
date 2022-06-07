import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

const style = {
  container: `mt-2`,
  wrapper: `flex flex-col h-[400px]  dark:bg-[#202226] `,
};

export default function Modal() {
  const router = useRouter();
  const { tokenID } = router.query;
  const url = `http://localhost:4000/api/nft/${tokenID}`;
  let [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<any | null>("");
  const { title, desc, img, price } = state;
  

  const editNft = async (data: any) => {
    const response = await axios.patch(url, data);
  };

  useEffect(() => {
    editNft("");
  }, [url]);

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
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit NFT
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
                    as="h3"
                    className="text-lg font-medium  text-center leading-6 text-gray-900"
                  >
                    Edit your NFT
                  </Dialog.Title>
                  <div className={style.container}>
                    <form className={style.wrapper} onSubmit={handleSubmit}>
                      <label htmlFor="title">Name</label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter Name ..."
                        onChange={handleInputChange}
                        value={title}
                      />
                      <label htmlFor="desc">Description</label>
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="Enter description ..."
                        onChange={handleInputChange}
                        value={desc}
                      />
                      <label htmlFor="img">Img</label>
                      <input
                        type="text"
                        name="img"
                        id="img"
                        placeholder="Enter Image Link ..."
                        onChange={handleInputChange}
                        value={img}
                      />
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Enter the Listing Price ..."
                        onChange={handleInputChange}
                        value={price}
                      />

                      <button
                        type="submit"
                        className=" mt-10 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        List your NFT
                      </button>
                    </form>
                    <p className="text-sm text-gray-500"></p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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
