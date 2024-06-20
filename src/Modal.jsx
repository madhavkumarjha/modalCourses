import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { dummy } from "./data";
import Card from "./Card";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Modal = ({ handleModalOpen }) => {
  const [openDetails, setOpenDetails] = useState({});
  const data = dummy;

  useEffect(() => {
    // Add the no-scroll class to the body when the modal is open
    document.body.classList.add('overflow-hidden');
    // Remove the no-scroll class from the body when the modal is closed
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const handleToggle = (index, isOpen) => {
    setOpenDetails((prevState) => ({
      ...prevState,
      [index]: isOpen,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-700 bg-opacity-20 backdrop-blur-lg">
      <div className="relative p-4 w-full max-w-4xl bg-[#E2FFF1] rounded-lg shadow dark:bg-gray-700 h-auto">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 gap-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white capitalize flex flex-col gap-1">
              {data.title}
            </h3>
            <span className="text-xl font-semibold ">
              {data.modules.length} Duration{" "}
              <span className="text-gray-400">( 40 min )</span>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-[#1DBF73] px-8 py-2 rounded-3xl text-white font-semibold text-lg ">
              Enroll Now
            </button>
            <button
              type="button"
              onClick={handleModalOpen}
              className="absolute top-1 right-1 font-bold text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              X
            </button>
          </div>
        </div>
        {/* Modal body */}
        <div className="px-[1rem] py-[2rem] md:p-5 space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
          {data.modules.map((module, index) => (
            <details
              className="cursor-pointer"
              key={index + 67}
              onToggle={(e) => handleToggle(index, e.target.open)}
            >
              <summary className="bg-[#FFE5E5] px-[1rem] py-[2rem] rounded-md text-xl font-bold capitalize flex justify-between items-center">
                <p>
                  {module.title}{" "}
                  <span className="font-light text-black">{module.duration}</span>
                </p>
                {openDetails[index] ? (
                  <MdKeyboardArrowUp className="text-2xl font-semibold" />
                ) : (
                  <MdKeyboardArrowDown className="text-2xl font-semibold" />
                )}
              </summary>
              <div className="bg-white px-4 py-3 grid grid-cols-3 gap-3 items-center justify-between">
                {module.lessons.map((lesson, index) => (
                  <Card lesson={lesson} key={index + 90} />
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
};

export default Modal;
