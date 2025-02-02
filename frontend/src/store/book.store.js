import { create } from "zustand";
export const useBookStore = create((set) => ({
  books: [],
  setBooks: (books) => ({ books }),

  // Function get's data from the API and sets the state
  getBooks: async () => {
    const res = await fetch("/api/books");
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
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    set((state) => ({ books: [...state.books, data.data] }));
    return { success: true, message: "Book Saved Successfully" };
  },

  deleteBook: async (bookId) => {
    const res = await fetch(`/api/books/${bookId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      books: state.books.filter((book) => book._id !== bookId),
    }));
    return { success: true, message: data.message };
  },

  updateBook: async (bookId, updatedBook) => {
    const res = await fetch(`/api/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    const data = await res.json();
    if (!data.success)
      return {
        success: false,
        message: "book updated successfully",
      };

    //updating ui without refresh
    set((state) => ({
      books: state.books.map((book) =>
        book._id === bookId ? { ...book, ...updatedBook } : book
      ),
    }));

    return {
      success: true,
      message: "Book updated successfully",
    };
  },

  getOneBook: async (bookId) => {
    const res = await fetch(`/api/books/${bookId}`);
    const data = await res.json();
    return data.data;
  },
}));
