import { useDispatch } from "react-redux";
import { userActions } from "../../store/slice/user";
import TextInput from "./TextInput";
import { useState } from "react";
import type { ModalProps } from "../../types/modal";

const Modal = ({ setShowModal }: ModalProps) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    companyName: "",
  });
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(
      userActions.userDetailsAdd({
        ...formData,
        id: Math.floor(Math.random() * 1000000),
      })
    );
    alert("Successfully Added");
    setShowModal(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-2xl mb-4 font-semibold">Add New User</h3>
        <form onSubmit={handleAddUser}>
          <TextInput
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your Name"
            label="Name"
            
          />
          <TextInput
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your Email"
            label="Email"
          />
          <TextInput
            name="company_name"
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            placeholder="Enter your Company Name"
            label="Company Name"
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
