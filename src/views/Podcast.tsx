"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/ScrollReveal";

// Types
interface Episode {
  id: string;
  name: string;
  description: string;
  duration: string;
  durationMs: number;
  releaseDate: string;
  releaseDateFormatted: string;
  image: string;
  spotifyUrl: string;
  audioPreview: string | null;
}

interface PodcastData {
  show: {
    id: string;
    name: string;
    description: string;
    publisher: string;
    totalEpisodes: number;
    images: { url: string }[];
    externalUrl: string;
  };
  episodes: Episode[];
  fetchedAt: string;
}

const Podcast = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [podcastData, setPodcastData] = useState<PodcastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    fetch('/data/spotify-podcast.json')
      .then(res => res.json())
      .then(data => {
        setPodcastData(data);
        setSelectedEpisode(data.episodes[0] || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load podcast data:', err);
        setLoading(false);
      });
  }, []);

  const allEpisodes = podcastData?.episodes || [];

  const filteredEpisodes = allEpisodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-handwritten text-xl text-muted-foreground">đang tải podcast...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content - Split Layout */}
      <section className="min-h-screen">
        <div className="container max-w-7xl py-12 md:py-20">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-handwritten text-2xl md:text-3xl text-primary mb-3">
                Góc nhỏ tâm tình
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
                Thuần Podcast
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Những cuộc trò chuyện chậm rãi về cuộc sống, công việc và những điều
                nhỏ bé nhưng ý nghĩa. Nghe để thấy nhẹ hơn một chút.
              </p>
              <p className="font-handwritten text-lg text-secondary mt-4">
                {podcastData?.show.totalEpisodes} tập • hơn 1 triệu người đang lắng nghe
              </p>
            </div>
          </ScrollReveal>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Episode List */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ScrollReveal>
                {/* Search */}
                <div className="mb-6">
                  <Input
                    type="text"
                    placeholder="Tìm kiếm tập..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-full border-border/50 bg-background/80 backdrop-blur-sm"
                  />
                </div>

                {/* Episode List */}
                <div className="relative">
                  <div
                    className="episode-list space-y-3 max-h-[70vh] overflow-y-auto pr-4"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(0,0,0,0.15) transparent'
                    }}
                  >
                    <style>{`
                      .episode-list::-webkit-scrollbar {
                        width: 4px;
                      }
                      .episode-list::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .episode-list::-webkit-scrollbar-thumb {
                        background: rgba(0,0,0,0.15);
                        border-radius: 10px;
                      }
                      .episode-list::-webkit-scrollbar-thumb:hover {
                        background: rgba(0,0,0,0.25);
                      }
                    `}</style>
                    {filteredEpisodes.map((episode, index) => (
                      <button
                        key={episode.id}
                        onClick={() => setSelectedEpisode(episode)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border ${selectedEpisode?.id === episode.id
                          ? 'bg-primary/10 border-primary/30 shadow-sm'
                          : 'bg-background/50 border-border/30 hover:bg-card hover:border-border/50'
                          }`}
                      >
                        <div className="flex gap-4">
                          {/* Episode Number */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium ${selectedEpisode?.id === episode.id
                            ? 'bg-primary text-white'
                            : 'bg-muted text-muted-foreground'
                            }`}>
                            {allEpisodes.length - index}
                          </div>

                          <div className="flex-1 min-w-0">
                            {/* Date & Duration */}
                            <p className="text-xs text-muted-foreground mb-1">
                              {episode.releaseDateFormatted} • {episode.duration}
                            </p>

                            {/* Title */}
                            <h3 className={`text-sm font-medium line-clamp-2 leading-snug transition-colors ${selectedEpisode?.id === episode.id
                              ? 'text-primary'
                              : 'text-foreground'
                              }`}>
                              {episode.name}
                            </h3>
                          </div>
                        </div>
                      </button>
                    ))}

                    {filteredEpisodes.length === 0 && (
                      <p className="text-center text-muted-foreground py-12 font-handwritten text-lg">
                        Không tìm thấy tập nào...
                      </p>
                    )}
                  </div>
                  {/* Fade gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-4 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Selected Episode Detail */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {selectedEpisode && (
                <ScrollReveal>
                  <div className="lg:sticky lg:top-24">
                    {/* Episode Cover */}
                    <div className="relative aspect-square max-w-md mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={selectedEpisode.image}
                        alt={selectedEpisode.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Episode Number Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
                          Tập {allEpisodes.findIndex(e => e.id === selectedEpisode.id) + 1 > 0
                            ? allEpisodes.length - allEpisodes.findIndex(e => e.id === selectedEpisode.id)
                            : '—'}
                        </span>
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className="text-center max-w-lg mx-auto">
                      <p className="text-sm text-muted-foreground mb-3">
                        {selectedEpisode.releaseDateFormatted} • {selectedEpisode.duration}
                      </p>

                      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-snug">
                        {selectedEpisode.name}
                      </h2>

                      {/* Listen Button */}
                      <a
                        href={selectedEpisode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1DB954] text-white rounded-full font-medium hover:bg-[#1ed760] transition-colors shadow-lg hover:shadow-xl"
                      >
                        Nghe trên Spotify
                      </a>

                      {/* Signature */}
                      <p className="font-handwritten text-lg text-secondary mt-8">
                        - Thuần
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <blockquote className="font-handwritten text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              "Mình tin rằng đôi khi chỉ cần một giọng nói nhẹ nhàng, một câu chuyện chân thật
              cũng đủ để làm ai đó cảm thấy bớt cô đơn hơn trong cuộc sống này."
            </blockquote>

            <div className="w-20 h-px bg-primary/30 mx-auto mb-8" />

            <p className="text-muted-foreground mb-8">
              Thuần Podcast là nơi mình chia sẻ những suy nghĩ, trải nghiệm và bài học
              từ cuộc sống thường ngày. Mỗi tập là một cuộc trò chuyện chậm rãi,
              không vội vàng, như thể mình đang ngồi cạnh bạn.
            </p>

            <a
              href="https://open.spotify.com/show/1oTWO4OeEteztXXyeafF1C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Follow trên Spotify
            </a>

            <p className="font-handwritten text-lg text-secondary mt-8">
              Cảm ơn bạn vì đã lắng nghe
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;