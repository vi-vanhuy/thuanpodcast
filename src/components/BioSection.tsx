import thuanImage2 from "@/assets/thuan-2.jpg";

const BioSection = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="fade-in order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <img
                src={thuanImage2}
                alt="Thuần - Moments"
                className="rounded-2xl object-cover w-full h-full shadow-lift"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 fade-in fade-in-delay-1 order-1 lg:order-2">
            <h2 className="font-handwritten text-3xl md:text-4xl text-secondary">Về Thuần</h2>
            
            <div className="space-y-6 text-body text-text-body">
              <p>
                Mình là Thuần — người đứng sau <span className="highlight">Thuần Podcast</span>, 
                một kênh về self-improvement đã đồng hành cùng các bạn từ năm 2021.
              </p>
              <p>
                Với hơn <span className="font-medium text-foreground">52 tập</span> và hàng ngàn người nghe mỗi tháng, 
                mình chia sẻ những suy nghĩ về lối sống tử tế, chăm sóc bên trong, 
                và cách để sống chậm lại trong một thế giới vội vã.
              </p>
              <p>
                Phong cách của mình? <span className="italic">Nhẹ nhàng, mộc mạc, gần gũi</span> — 
                như đang tâm sự với một người bạn.
              </p>
            </div>

            <blockquote className="quote-block border-l-4 border-primary pl-6 py-2">
              "Mình tin rằng mỗi người đều xứng đáng được sống một cuộc đời tử tế — 
              với chính mình, với người khác, và với thế giới."
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="font-handwritten text-3xl text-primary">52+</p>
                <p className="text-sm text-muted-foreground">Tập podcast</p>
              </div>
              <div className="text-center">
                <p className="font-handwritten text-3xl text-primary">2021</p>
                <p className="text-sm text-muted-foreground">Bắt đầu</p>
              </div>
              <div className="text-center">
                <p className="font-handwritten text-3xl text-primary">Top</p>
                <p className="text-sm text-muted-foreground">Self-Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
