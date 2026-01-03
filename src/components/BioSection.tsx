"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const bioImages = [
  "/images/thuan-1.jpg",
  "/images/thuan-2.jpg",
  "/images/thuan-3.jpg",
];

const BioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bioImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-spacing bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Slideshow */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lift">
              {bioImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Trịnh Phan Thuỳ Nhung - Thuần ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                             ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              {/* Progress dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bioImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                               ${index === currentImageIndex
                        ? 'bg-white w-6 shadow-md'
                        : 'bg-white/50 hover:bg-white/80'
                      }`}
                    aria-label={`Xem ảnh ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <ScrollReveal delay={100}>
              <div>
                <h2 className="font-handwritten text-3xl md:text-4xl text-secondary">Về Thuần</h2>
                <p className="text-lg text-muted-foreground mt-2">Trịnh Phan Thuỳ Nhung</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6 text-body text-text-body">
                <p>
                  Mình tên thật là <span className="font-medium text-foreground">Thùy Nhung</span>, mọi người gọi mình là <span className="highlight">Thuần</span> từ năm 2019
                  khi mình bắt đầu làm nội dung trên mạng xã hội. Chỉ những người bạn chơi với mình từ rất lâu rồi thì mới gọi mình là Thùy Nhung thôi.
                </p>
                <p>
                  Từ năm 18 tuổi, khi mà mình là Thuần ấy, mình được thoải mái thể hiện những khía cạnh khác của bản thân,
                  thoải mái nói ra quan điểm của mình. Và điều may mắn là sau một chặng đường dài,
                  nó trở thành công việc mà mình yêu thích.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <blockquote className="quote-block border-l-4 border-primary pl-6 py-2 font-quote text-xl">
                "Mình mong rằng cuộc sống sẽ nhẹ nhàng với chúng mình hơn. Và kể cả khi không được như vậy,
                thì mình mong bạn hãy nhẹ nhàng hơn với chính bản thân mình."
              </blockquote>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={500}>
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
                  <p className="text-sm text-muted-foreground">Podcast VN</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
