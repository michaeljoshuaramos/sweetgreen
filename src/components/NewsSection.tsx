import { NewsCard } from "../components";
import { news } from "../utils";

const NewsSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto my-12 text-sweetgreen-green-black">
      <div className="flex justify-between mb-4">
        <h1 className="text-base font-light uppercase tracking-wider">
          The Latest
        </h1>
        <div className="text-base font-light uppercase tracking-wider ">
          <a className="hover:border-b hover:border-sweetgreen-green-primary hover:cursor-pointer">
            Read more →
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 font-light">
        {news.map((newsItem) => {
          return <NewsCard key={newsItem.title} news={newsItem} />;
        })}
      </div>
    </div>
  );
};

export default NewsSection;
