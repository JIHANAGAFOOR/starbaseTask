import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { settingActions, useAppSelector } from "../store/slice/settings";

const Settings = () => {
  const darkMode = useAppSelector((state) => state.settings.darkMode);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    darkMode: darkMode,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Update dark mode immediately when toggled
    if (name === "darkMode") {
      dispatch(settingActions.setDarkMode(checked));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    console.log("Form submitted:", formData);
    alert("Settings updated successfully!");
  };

  return (
    <div className=" dark:bg-gray-900 min-h-screen flex items-center justify-center transition-colors ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Update your profile information
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex items-center">
              <input
                id="darkMode"
                name="darkMode"
                type="checkbox"
                checked={formData.darkMode}
                onChange={handleChange}
                className="h-4 w-4 text-blue-900 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="darkMode"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-200"
              >
                Dark Mode
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
