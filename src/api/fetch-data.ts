import { MusicBO } from "./../BO/music";
import axios from "axios";

export const fetchData = async (
  searchQuery: string
): Promise<MusicBO[] | undefined> => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data as MusicBO[];
  } catch (error) {
    console.error(error);
  }
};
