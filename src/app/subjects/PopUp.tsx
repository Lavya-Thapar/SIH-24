import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";

const PopupForm = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-96">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-[50%] p-1.5 m-2"
          onClick={onClose}
        >
          <CloseOutlinedIcon />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-black text-center">
          Add Subject
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="subjectName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter Subject Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="teacherName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter Teacher Name"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
