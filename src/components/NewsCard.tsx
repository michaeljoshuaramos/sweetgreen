import { type News } from "../utils";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="bg-sweetgreen-sand rounded-3xl p-4 flex">
      <article className="text-sm">
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="uppercase">{news.publisher}</span>
            <header>{news.title}</header>
          </div>
          <div>
            <p>
              {news.teaser}
              <br />
              <span>Read more →</span>
            </p>
          </div>
        </div>
      </article>
      <img src={news.image} alt={news.title} className="rounded-2xl max-w-44" />
    </div>
  );
};

export default NewsCard;
