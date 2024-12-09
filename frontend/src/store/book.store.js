import { create } from "zustand";
export const useBookStore = create((set) => ({
  books: [],
  setBooks: (books) => ({ books }),

  // Function get's data from the API and sets the state
  getBooks: async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    set({ books: data.data });
  },

  saveBook: async (newBook) => {
    // check if all data was sent
    if (
      !newBook.title ||
      !newBook.author ||
      !newBook.language ||
      !newBook.price ||
      !newBook.cover_image ||
      !newBook.description
    ) {
      return { success: false, message: "Please fill all the fields" };
    }

    // let's save
    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    set((state) => ({ books: [...state.books, data.data] }));
    return { success: true, message: "Book Saved Successfully" };
  },
}));
