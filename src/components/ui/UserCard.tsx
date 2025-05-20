import type { User } from "../../types/cards";

const UserCard = ({ name, email, companyName }: User) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full md:w-[32%] transition-transform hover:scale-105 hover:shadow-lg ">
      <h2 className="text-xl font-bold ttext-gray-900 dark:text-gray-300 ">
        {name}
      </h2>
      <p className="text-sm text-gray-900 dark:text-gray-500 mt-1">{email}</p>
      <p className="text-sm text-gray-900 dark:text-gray-500 font-medium mt-1">
        {companyName}
      </p>
    </div>
  );
};

export default UserCard;
