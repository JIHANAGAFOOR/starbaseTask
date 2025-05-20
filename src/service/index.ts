const URL: string = "https://jsonplaceholder.typicode.com";
type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.map((user: User) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      companyName: user.company.name,
    }));
    
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};
