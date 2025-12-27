import { useState } from "react";
import Layout from "@/components/Layout";
import { Play, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const moods = ["Tất cả", "Reflective", "Inspiring", "Educational", "Personal"];

const allEpisodes = [
  {
    number: "EP.42",
    title: "Về việc chậm lại trong một thế giới vội vã",
    description: "Chúng ta luôn bị cuốn vào vòng xoáy của sự bận rộn. Nhưng đôi khi, chậm lại mới là cách để đi xa hơn.",
    duration: "45 phút",
    mood: "Reflective",
    pinned: true,
  },
  {
    number: "EP.38",
    title: "Khi nào thì nên dừng lại và bắt đầu lại?",
    description: "Về những quyết định khó khăn trong cuộc sống và công việc, và cách nhận ra đâu là thời điểm phù hợp.",
    duration: "38 phút",
    mood: "Inspiring",
    pinned: true,
  },
  {
    number: "EP.35",
    title: "Storytelling: Nghệ thuật kể chuyện không phải để bán hàng",
    description: "Storytelling không phải là công cụ marketing, mà là cách chúng ta kết nối với nhau như những con người.",
    duration: "52 phút",
    mood: "Educational",
    pinned: true,
  },
  {
    number: "EP.32",
    title: "Sống với sự không chắc chắn",
    description: "Cuộc sống không bao giờ đảm bảo điều gì. Và có lẽ đó chính là điều đẹp nhất của nó.",
    duration: "41 phút",
    mood: "Reflective",
  },
  {
    number: "EP.29",
    title: "Về những mối quan hệ nuôi dưỡng tâm hồn",
    description: "Không phải ai cũng ở lại với chúng ta mãi mãi. Nhưng điều đó không có nghĩa là họ không quan trọng.",
    duration: "47 phút",
    mood: "Personal",
  },
  {
    number: "EP.25",
    title: "Làm thế nào để viết một câu chuyện hay?",
    description: "Những nguyên tắc cơ bản của storytelling mà mình học được sau 10 năm làm nội dung.",
    duration: "55 phút",
    mood: "Educational",
  },
  {
    number: "EP.22",
    title: "Khi công việc không còn là đam mê",
    description: "Đam mê có thể thay đổi. Và điều đó hoàn toàn bình thường.",
    duration: "39 phút",
    mood: "Inspiring",
  },
  {
    number: "EP.18",
    title: "Những bài học từ việc thất bại",
    description: "Mình đã thất bại nhiều lần. Và đây là những gì mình học được từ những lần đó.",
    duration: "44 phút",
    mood: "Personal",
  },
];

const Podcast = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("Tất cả");

  const pinnedEpisodes = allEpisodes.filter((ep) => ep.pinned);
  const regularEpisodes = allEpisodes.filter((ep) => !ep.pinned);

  const filteredEpisodes = regularEpisodes.filter((episode) => {
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMood = selectedMood === "Tất cả" || episode.mood === selectedMood;
    return matchesSearch && matchesMood;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="section-spacing pb-12">
        <div className="container">
          <div className="max-w-reading fade-in">
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Podcast
            </h1>
            <p className="text-body text-text-body">
              Những cuộc trò chuyện chậm rãi về cuộc sống, công việc và những điều 
              nhỏ bé nhưng ý nghĩa. Nghe để thấy nhẹ hơn một chút.
            </p>
          </div>
        </div>
      </section>

      {/* Pinned Episodes */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 fade-in">
            Nổi bật
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pinnedEpisodes.map((episode, index) => (
              <div
                key={episode.number}
                className={`fade-in fade-in-delay-${index + 1} group p-6 rounded-lg bg-card border border-border/50 card-hover cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play size={20} className="text-primary ml-0.5" />
                  </div>
                  <span className="tag-pill text-xs">{episode.mood}</span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-2">{episode.number}</p>
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                  {episode.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {episode.description}
                </p>
                <p className="text-xs text-muted-foreground">{episode.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="section-spacing bg-card/50">
        <div className="container">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 fade-in">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm tập..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`tag-pill ${
                    selectedMood === mood ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          {/* Episode List */}
          <div className="space-y-4">
            {filteredEpisodes.map((episode, index) => (
              <div
                key={episode.number}
                className={`fade-in fade-in-delay-${Math.min(index + 1, 3)} group p-6 rounded-lg bg-background border border-border/50 card-hover cursor-pointer`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Play size={16} className="text-primary ml-0.5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-xs text-muted-foreground">{episode.number}</p>
                      <span className="tag-pill text-xs py-0.5">{episode.mood}</span>
                    </div>
                    <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                      {episode.description}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground md:text-right flex-shrink-0">
                    {episode.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Không tìm thấy tập nào phù hợp.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-reading mx-auto text-center fade-in">
            <p className="font-handwritten text-2xl text-primary mb-4">
              Thích những gì bạn nghe?
            </p>
            <p className="text-muted-foreground mb-6">
              Nếu podcast giúp ích cho bạn, hãy cân nhắc làm việc cùng mình.
            </p>
            <a
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors editorial-link"
            >
              Tìm hiểu thêm về dịch vụ →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;
