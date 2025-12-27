import { Mail, Linkedin, Instagram } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-reading mx-auto text-center space-y-6 fade-in">
          <h2 className="font-handwritten text-3xl md:text-4xl">
            Kết nối với mình
          </h2>
          <p className="text-primary-foreground/80">
            Bạn có dự án muốn trao đổi? Hay đơn giản chỉ muốn nói chuyện? 
            Mình luôn sẵn lòng lắng nghe.
          </p>
          
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="mailto:hello@thuan.com"
              className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
