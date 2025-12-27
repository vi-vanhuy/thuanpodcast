import { Link } from "react-router-dom";
import { ArrowRight, Play, Headphones } from "lucide-react";

const episodes = [
  {
    number: "EP.52",
    title: "Về việc chậm lại trong một thế giới vội vã",
    duration: "45 phút",
    mood: "Reflective",
  },
  {
    number: "EP.48",
    title: "Khi nào thì nên dừng lại và bắt đầu lại?",
    duration: "38 phút",
    mood: "Inspiring",
  },
  {
    number: "EP.45",
    title: "Sống tử tế với chính mình trước đã",
    duration: "42 phút",
    mood: "Healing",
  },
];

const FeaturedEpisodesSection = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 fade-in">
          <div>
            <p className="font-handwritten text-xl text-primary mb-2">🎧 Nghe gì hôm nay?</p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Những tập được yêu thích
            </h2>
          </div>
          <Link
            to="/podcast"
            className="flex items-center gap-2 text-sm text-secondary hover:text-secondary-light transition-colors"
          >
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {episodes.map((episode, index) => (
            <Link
              key={episode.number}
              to="/podcast"
              className={`fade-in fade-in-delay-${index + 1} group block p-6 rounded-2xl bg-background border border-border/50 card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={20} className="text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
                <span className="tag-pill text-xs">{episode.mood}</span>
              </div>
              
              <p className="text-xs text-muted-foreground mb-2">{episode.number}</p>
              <h3 className="text-base font-medium text-foreground group-hover:text-secondary transition-colors leading-snug mb-3">
                {episode.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Headphones size={14} />
                <span>{episode.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodesSection;
