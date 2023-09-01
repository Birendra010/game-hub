import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89e73a760afe4401a260e33d0deb6b39",
  },
});
