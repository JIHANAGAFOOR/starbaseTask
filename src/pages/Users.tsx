import { fetchUsers } from "../service";
import UserCard from "../components/ui/UserCard";
import { useEffect, useState } from "react";
import Modal from "../components/ui/Modal";
import { useDispatch } from "react-redux";
import { useAppSelector, userActions } from "../store/slice/user";

const Users = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const userData = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    if (userData.length === 0) {
      const loadUsers = async () => {
        const data = await fetchUsers();
        dispatch(userActions.userDetailsSeelcted(data));
      };
      loadUsers();
    }
  }, []);

const sortHandler = () => {
  // Create a copy of the current user data
  const sortedUsers = [...userData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Toggle sort order for next click
  setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  // Update user data in Redux store
  dispatch(userActions.userDetailsSeelcted(sortedUsers));
};

  // Search users based on search input (name or email)
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <div className="p-5">
      <h2 className="text-3xl mb-10 text-gray-900 dark:text-white">Users</h2>
      <div className="flex justify-between items-center mb-4 mr-10">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white dark:bg-gray-800 w-full sm:w-1/2 p-3 mx-5 border border-gray-300 rounded-lg  dark:placeholder-gray-200 placeholder-gray-500 dark:text-white"
        />
        <div>
          <button
            onClick={sortHandler}
            className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700"
          >
            Sort {sortOrder === "asc" ? "↓" : "↑"}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {filteredUsers.map((item) => (
          <UserCard
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            companyName={item.companyName}
          />
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default Users;
