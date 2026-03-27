import { ArrowRight } from "lucide-react";
import tittoImage from "@/assets/titto-varghese.jpg";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-full md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={tittoImage}
                alt="Titto Varghese"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/e2e8f0/475569?text=Titto+Varghese';
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Titto Varghese</h3>
            <p className="text-green-600 font-semibold mb-6 uppercase tracking-wider text-sm">Managing Director</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Titto Varghese is a visionary leader with extensive experience in international trade and distribution, steering MITSA Global Elevate towards new heights of success.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              His dedication to supreme quality, operational excellence, and lasting client relationships drives our mission to serve businesses worldwide with integrity.
            </p>
            
            <a href="#contact" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors group">
              Get in touch <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
