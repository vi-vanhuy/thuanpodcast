import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const episodes = [
  {
    number: "EP.42",
    title: "Về việc chậm lại trong một thế giới vội vã",
    duration: "45 phút",
    mood: "Reflective",
  },
  {
    number: "EP.38",
    title: "Khi nào thì nên dừng lại và bắt đầu lại?",
    duration: "38 phút",
    mood: "Inspiring",
  },
  {
    number: "EP.35",
    title: "Storytelling: Nghệ thuật kể chuyện không phải để bán hàng",
    duration: "52 phút",
    mood: "Educational",
  },
];

const FeaturedEpisodesSection = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="flex items-end justify-between mb-12 fade-in">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Featured Episodes
            </h2>
            <p className="text-muted-foreground mt-2">Những tập podcast được yêu thích</p>
          </div>
          <Link
            to="/podcast"
            className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
          >
            Tất cả tập <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {episodes.map((episode, index) => (
            <Link
              key={episode.number}
              to="/podcast"
              className={`fade-in fade-in-delay-${index + 1} group block p-6 rounded-lg bg-card border border-border/50 card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play size={16} className="text-primary ml-0.5" />
                </div>
                <span className="tag-pill text-xs">{episode.mood}</span>
              </div>
              
              <p className="text-xs text-muted-foreground mb-2">{episode.number}</p>
              <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                {episode.title}
              </h3>
              <p className="text-xs text-muted-foreground">{episode.duration}</p>
            </Link>
          ))}
        </div>

        <Link
          to="/podcast"
          className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm text-primary"
        >
          Tất cả tập <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedEpisodesSection;
