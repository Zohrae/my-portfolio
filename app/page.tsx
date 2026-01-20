import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
      
      <Navbar />
      
      {/* Placeholder sections pour le scroll */}
      <section id="about" className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <h2 className="text-4xl text-white">About Section</h2>
      </section>
      <section id="projects" className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <h2 className="text-4xl text-white">Projects Section</h2>
      </section>
    </div>
  );
}