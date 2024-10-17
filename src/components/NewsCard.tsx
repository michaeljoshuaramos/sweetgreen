import { type News } from "../utils";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="bg-sweetgreen-sand rounded-3xl p-4 flex group hover:cursor-pointer">
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
              <span className="group-hover:border-b group-hover:border-sweetgreen-green-primary">
                Read more →
              </span>
            </p>
          </div>
        </div>
      </article>
      <div className="max-w-44 overflow-hidden rounded-2xl">
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-auto transform transition duration-300 group-hover:scale-110 group-hover:brightness-90"
        />
      </div>
    </div>
  );
};

export default NewsCard;
