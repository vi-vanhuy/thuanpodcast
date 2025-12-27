import { Mail, Instagram, Youtube } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="section-spacing bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="max-w-reading mx-auto text-center space-y-6 fade-in">
          <p className="font-handwritten text-2xl text-primary-light">
            Cảm ơn cậu vì đã ở đây ♡
          </p>
          <h2 className="text-2xl md:text-3xl font-medium">
            Kết nối với Thuần
          </h2>
          <p className="text-secondary-foreground/80">
            Cậu có thể tìm thấy mình ở những nơi này. 
            Nếu muốn hợp tác hoặc chỉ đơn giản là tâm sự, 
            mình luôn sẵn lòng lắng nghe.
          </p>
          
          <div className="flex items-center justify-center gap-8 pt-4">
            <a
              href="mailto:hello@thuanpodcast.com"
              className="flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://instagram.com/thepodcastofthuan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Instagram size={20} />
              </div>
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Youtube size={20} />
              </div>
              <span className="text-sm">YouTube</span>
            </a>
          </div>

          <p className="font-handwritten text-xl pt-4">loveu 💛</p>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
