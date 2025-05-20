import type { CardProps } from "../../types/cards";

const Card = ({ data, label }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full md:w-[31%]">
      <div className="text-gray-900 dark:text-gray-300 text-sm font-bold">
        {label}
      </div>
      <div className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
        {data}
      </div>
    </div>
  );
};

export default Card;
