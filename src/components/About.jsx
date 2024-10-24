import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div id="about" >
      <div className="container mx-auto py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          من نحن
        </h2>
        <p>
          شركة أنوار الهدى متخصصة في تقديم خدمات رش المبيدات الحشرية في المنازل
          والمستشفيات والاستراحات والمصانع والمراكز العلاجية. نحرص على استخدام
          أحدث التقنيات والمواد الآمنة لضمان بيئة خالية من الحشرات الضارة، مع
          التركيز على حماية الصحة العامة. توفر الشركة حلولاً فعّالة ومستدامة
          لمكافحة الحشرات، بما يساهم في تحسين جودة الحياة والبيئة الصحية في
          مختلف الأماكن التي تخدمها.
        </p>
      </div>
    </div>
  );
}

export default About;
 