import LamfigoLogo from "@/components/LamfigoLogo";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-[#0F101E] text-white min-h-screen flex flex-col p-4 md:p-8 font-sans">
      <header className="w-full max-w-7xl mx-auto">
        <LamfigoLogo />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center -mt-8 md:-mt-12">
        <div className="flex items-center space-x-2 text-lg text-indigo-300">
          <span className="w-2 h-2 bg-indigo-300 rounded-full"></span>
          <span>contact us</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
          Have a <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">project</span> idea?
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
          Feel free to send us a message via <strong className="text-white font-semibold">Telegram</strong>, if you
          have any questions or would like to discuss!
        </p>

        <div className="mt-12 flex flex-col items-center space-y-6">
          <a href="https://t.me/lamfigo" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-full p-5 group">
            <Send className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://t.me/lamfigo" target="_blank" rel="noopener noreferrer" className="text-2xl font-medium underline underline-offset-8 hover:text-gray-200 transition-colors">
            t.me/lamfigo
          </a>
        </div>
      </main>
    </div>
  );
};

export default ContactSection;