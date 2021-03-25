import axios from "axios";

const HabitAPI = {
  getAllHabits: function () {
    return axios
      .get("/api/habit/habits")
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  },
  getHabit: function (id) {
    return axios.get("/api/habit/habits/" + id);
  },
  getUserHabits: function () {
    return axios.get("/api/user/userHabits");
  },
  deleteHabit: function (id) {
    return axios.delete("/api/habit/habits/" + id);
  },
  createHabit: function (habit) {
    return axios
      .post("/api/habit/habits", habit)
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  }
};

export default HabitAPI;
