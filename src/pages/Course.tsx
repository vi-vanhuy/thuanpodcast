import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: "storytelling",
    title: "Storytelling Fundamentals",
    subtitle: "Nghệ thuật kể chuyện cho content creator",
    description: "Khóa học toàn diện về storytelling, từ lý thuyết đến thực hành. Dành cho những ai muốn nâng tầm nội dung của mình.",
    duration: "6 tuần",
    students: "500+",
    modules: "12 bài",
    outcomes: [
      "Hiểu cấu trúc của một câu chuyện hay",
      "Viết được hook thu hút trong 3 giây đầu",
      "Xây dựng narrative arc cho mọi loại content",
      "Kết nối cảm xúc với khán giả",
    ],
    forWho: [
      "Content creator muốn nâng tầm storytelling",
      "Marketer cần tạo content engagement cao",
      "Founders muốn kể câu chuyện thương hiệu",
      "Bất kỳ ai yêu thích việc kể chuyện",
    ],
    syllabus: [
      { week: "Tuần 1-2", title: "Foundations", content: "Lý thuyết storytelling, các mô hình kể chuyện cổ điển và hiện đại." },
      { week: "Tuần 3-4", title: "Structure", content: "Xây dựng hook, conflict, climax và resolution. Thực hành với case studies." },
      { week: "Tuần 5-6", title: "Application", content: "Áp dụng vào các nền tảng: social media, podcast, video. Feedback cá nhân." },
    ],
    testimonials: [
      { name: "Minh Anh", role: "Content Creator", quote: "Khóa học giúp mình thay đổi hoàn toàn cách tiếp cận content." },
      { name: "Hùng", role: "Marketing Manager", quote: "Thực tế và áp dụng được ngay. Rất đáng giá." },
    ],
  },
  {
    id: "personal-brand",
    title: "Personal Branding",
    subtitle: "Xây dựng thương hiệu cá nhân bền vững",
    description: "Từ việc xác định giá trị cốt lõi đến chiến lược content dài hạn. Khóa học dành cho những ai muốn xây dựng ảnh hưởng.",
    duration: "4 tuần",
    students: "300+",
    modules: "8 bài",
    outcomes: [
      "Xác định được unique value proposition",
      "Xây dựng content pillars phù hợp",
      "Tạo được calendar content 3 tháng",
      "Hiểu cách đo lường và tối ưu",
    ],
    forWho: [
      "Chuyên gia muốn xây dựng thought leadership",
      "Freelancer cần positioning rõ ràng",
      "Founders muốn grow personal brand",
      "Nhân viên muốn phát triển career",
    ],
    syllabus: [
      { week: "Tuần 1", title: "Discovery", content: "Tìm hiểu bản thân, xác định giá trị và unique selling point." },
      { week: "Tuần 2", title: "Strategy", content: "Chọn nền tảng, xây dựng content pillars và brand voice." },
      { week: "Tuần 3", title: "Execution", content: "Tạo content, xây dựng calendar và workflow hiệu quả." },
      { week: "Tuần 4", title: "Growth", content: "Đo lường, tối ưu và chiến lược phát triển dài hạn." },
    ],
    testimonials: [
      { name: "Lan", role: "Freelance Designer", quote: "Cuối cùng mình cũng biết mình nên nói gì và nói ở đâu." },
      { name: "Tuấn", role: "Startup Founder", quote: "Rất có hệ thống. Mình đã áp dụng ngay sau tuần đầu." },
    ],
  },
];

const Course = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-spacing pb-12">
        <div className="container">
          <div className="max-w-reading fade-in">
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Course
            </h1>
            <p className="text-body text-text-body">
              Những khóa học được thiết kế tỉ mỉ, chia sẻ kinh nghiệm thực tế từ 
              hành trình làm nội dung của mình.
            </p>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <a
                key={course.id}
                href={`#${course.id}`}
                className={`fade-in fade-in-delay-${index + 1} p-6 md:p-8 rounded-lg bg-card border border-border/50 card-hover group`}
              >
                <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-primary mb-3">{course.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {course.students} học viên
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} /> {course.modules}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      {courses.map((course) => (
        <section key={course.id} id={course.id} className="section-spacing bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Title */}
              <div className="mb-12 fade-in">
                <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {course.title}
                </h2>
                <p className="text-primary">{course.subtitle}</p>
              </div>

              {/* Outcomes */}
              <div className="mb-12 fade-in fade-in-delay-1">
                <h3 className="text-lg font-medium text-foreground mb-4">Sau khóa học, bạn sẽ</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-text-body">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Who */}
              <div className="mb-12 fade-in fade-in-delay-2">
                <h3 className="text-lg font-medium text-foreground mb-4">Khóa học phù hợp với</h3>
                <ul className="space-y-2">
                  {course.forWho.map((who) => (
                    <li key={who} className="flex items-start gap-2 text-sm text-text-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {who}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syllabus */}
              <div className="mb-12 fade-in fade-in-delay-3">
                <h3 className="text-lg font-medium text-foreground mb-4">Nội dung chi tiết</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {course.syllabus.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border/50 rounded-lg px-4 bg-background"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 text-left">
                          <span className="text-xs text-muted-foreground w-16">{item.week}</span>
                          <span className="text-sm font-medium text-foreground">{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-20 text-sm text-muted-foreground">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Testimonials */}
              <div className="mb-12 fade-in">
                <h3 className="text-lg font-medium text-foreground mb-4">Học viên nói gì</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.testimonials.map((testimonial, index) => (
                    <div key={index} className="p-5 rounded-lg bg-background border border-border/50">
                      <p className="text-sm text-text-body italic mb-3">"{testimonial.quote}"</p>
                      <div>
                        <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center fade-in">
                <Button size="lg">
                  Đăng ký khóa học
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Có câu hỏi? <a href="/work#contact" className="text-primary hover:underline">Liên hệ mình</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Course;
