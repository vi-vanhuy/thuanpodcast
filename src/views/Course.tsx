"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const thanhChatImage = "/images/thanh-chat-1.png";

const Course = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-spacing pb-8">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Khóa học
            </h1>
            <p className="text-body text-text-body max-w-xl">
              Những khóa học được thiết kế tỉ mỉ, chia sẻ kinh nghiệm thực tế từ
              hành trình làm nội dung của mình.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Thanh Chất Course Card - Compact */}
      <section className="pb-24">
        <div className="container">
          <ScrollReveal>
            <Link
              href="/courses/thanh-chat"
              className="block group max-w-2xl"
            >
              <div className="p-5 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="flex gap-5">
                  {/* Image - smaller */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={thanhChatImage}
                      alt="Thanh Chất Collective"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content - compact */}
                  <div className="flex-1 min-w-0">
                    {/* Badge */}
                    <span className="inline-block px-2 py-0.5 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                      Khóa mới 2026
                    </span>

                    {/* Title */}
                    <h2 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1 truncate">
                      THANH CHẤT COLLECTIVE
                    </h2>
                    <p className="font-quote text-sm text-secondary mb-2">
                      "Âm thanh có Hồn - Nội dung có Chất"
                    </p>

                    {/* Info - compact */}
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        08/01 - 26/02
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        20 học viên
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">4.000.000đ</span>
                      <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                        Xem <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-md p-8 rounded-xl bg-card border border-border/50 text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Có câu hỏi về khóa học?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Liên hệ với mình để được tư vấn miễn phí nhé.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
              >
                Liên hệ tư vấn →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Course;
