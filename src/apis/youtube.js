import axios from "axios";

const KEY = "AIzaSyCVK_PcLggloHBBeLPrIoecWC8-UBSSYdU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
