import { create } from "zustand";

const useUserId = create((set) => ({
  userId: "",
}));

export default useUserId;
