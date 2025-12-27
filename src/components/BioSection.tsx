const BioSection = () => {
  return (
    <section className="section-spacing bg-card/50">
      <div className="container">
        <div className="max-w-reading mx-auto space-y-8 fade-in">
          <h2 className="font-handwritten text-3xl text-primary">Về Thuần</h2>
          
          <div className="space-y-6 text-body text-text-body">
            <p>
              Mình là Thuần — một người làm nội dung, đào tạo và tư vấn chiến lược sáng tạo. 
              Suốt hành trình của mình, mình luôn tin rằng mỗi câu chuyện đều xứng đáng được 
              kể một cách trọn vẹn và chân thực.
            </p>
            <p>
              Mình làm việc với các doanh nghiệp và cá nhân để xây dựng nội dung có chiều sâu, 
              từ chiến lược kênh, ý tưởng sáng tạo đến kịch bản TVC và show. Bên cạnh đó, mình 
              cũng chia sẻ những suy nghĩ qua podcast và các khóa học về storytelling.
            </p>
          </div>

          <blockquote className="quote-block border-l-2 border-primary pl-6 py-2">
            "Nội dung tốt không phải là kể thật nhiều, mà là kể đúng điều cần kể."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
