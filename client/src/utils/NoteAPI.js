import axios from "axios";

const NoteAPI = {
  getAllNotes: function () {
    return axios
      .get("/api/note/notes")
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  },
  getNote: function (id) {
    return axios.get("/api/note/notes/" + id);
  },
//   getUserHabits: function () {
//     return axios.get("/api/user/userHabits");
//   },
  deleteNote: function (id) {
    return axios.delete("/api/note/notes/" + id);
  },
  createNote: function (note) {
    return axios
      .post("/api/note/notes", note)
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  }
};

export default NoteAPI;
