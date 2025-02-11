"use client"
import BannerText from "../utils/BannerText";
import { useState } from 'react';
import Modal from 'react-modal';
import BloodBackground from "../common/BloodBackground";

function HeroSection({ dictionary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "martyrs",
    description: "",
    files: []
  });

  const handleModalOpen = () => {
    console.log("Modal Opened");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Form Data Submitted:", formData);
    
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    
    for (let file of formData.files) {
      formDataToSend.append("files", file);
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formDataToSend,
      });
      
      if (response.ok) {
        console.log("Submission successful");
        setIsModalOpen(false);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Submit Information"
        className=" p-6 rounded-lg shadow-lg w-5/12 mx-auto mt-20 outline-none z-50 max-h-[80vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
        ariaHideApp={false}
      >
        <BloodBackground>
          <form className="p-8 text-white " style={{ backgroundColor: 'rgba(133, 15, 15, 0.6)' }} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="martyrs">Martyrs</option>
                <option value="injured">Injured</option>
                <option value="murderers">Murderers</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description about the info"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="file">
                Upload File
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="file"
                type="file"
                multiple
                onChange={handleFileChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </BloodBackground>
      </Modal>

      <div className="h-44 sm:h-52 md:h-72 xl:h-96 bg-[url('/july-banner.svg')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="flex w-full  items-start md:flex-row p-[5%] pb-0 pl-0">
            <BannerText htmlContent={dictionary.bannerText} />
          </div>
          <div className="pt-8">
            <div className="w-fit">
              <div onClick={handleModalOpen} className="cursor-pointer rounded-full border-2 border-white bg-[#690508] px-8 py-3 text-white hover:opacity-95">
                <h2 className="text-xs font-semibold lg:text-xl">
                  {dictionary.submitInformation}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
