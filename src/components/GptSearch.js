import { BG_URL, GPT_MODE_IMG } from "../utils/constant";

import { useSelector } from "react-redux";
import { BrowseShimmer, DesktopBrowseShimmer } from "./Shimmer";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  // const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const movieResults = useSelector((store) => store?.gpt?.movieResults);
  const loading = useSelector((store) => store?.gpt?.loading);

  return (
    <>
      <div>
        <GptSearchBar />
      </div>
      <div>
        {!movieResults && (
          <>
            <div className="flex items-center justify-center bg-gray-900">
              <img
                src={GPT_MODE_IMG}
                alt="MOVIE IMAGE"
                className="shadow-lg  w-[30%] py-6"
              />
            </div>
          </>
        )}

        <div className="md:block hidden absolute z-50">
          {loading ? <DesktopBrowseShimmer /> : <GptMovieSuggestion />}
        </div>
        <div className="md:hidden absolute z-50">
          {loading ? <BrowseShimmer /> : <GptMovieSuggestion />}
        </div>
      </div>
    </>
  );
};

export default GPTSearch;
