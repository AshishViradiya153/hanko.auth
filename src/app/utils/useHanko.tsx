import { useEffect, useState } from "react";
import { Hanko, User } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL as string;

export const useHanko = () => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const hanko = new Hanko(hankoApi);

  // Function to fetch the current user's data
  const fetchUserData = async () => {
    try {
      const currentUser = await hanko.user.getCurrent(); // Fetch the current user
      setUser(currentUser);
    } catch (err) {
      console.error("Failed to fetch user data:", err);
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  // Function to log out the user
  const logout = async () => {
    try {
      await hanko.user.logout(); // Log out using Hanko's method
      setUser(null); // Reset user state after logout
      window.location.href = "/login"; // Redirect to the login page
    } catch (err) {
      console.error("Logout failed:", err);
      setError("Logout failed");
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data on mount
  }, []);

  return {
    user,
    loading,
    error,
    logout,
  };
};
