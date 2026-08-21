import { motion } from 'framer-motion';
import { User, Download, CheckCircle2, HeartHandshake, Lightbulb, Code2, Compass, ShieldCheck } from 'lucide-react';

export default function AboutMeSection() {
  const highlights = [
    { title: 'Full-Cycle Ownership', desc: 'From whiteboarding architectures and DB modeling to production deployment and telemetry monitoring.' },
    { title: 'AI & FinTech Specialization', desc: 'Deep background designing algorithmic calculation pipelines and autonomous LLM workflows.' },
    { title: 'Pixel-Precision Frontend', desc: 'Passionate about fluid micro-animations, tactile UI controls, accessibility, and sub-100ms response times.' },
    { title: 'Team Mentorship & Growth', desc: 'Champion of clean code reviews, comprehensive testing, and empathetic engineering culture.' }
  ];

  return (
    <section id="about">
      {/* about me */}

      <div className='p-10 border-2'>

        {/* Header */}
        <span className='font-bold text-2xl text-black'>About Me</span>


        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-5">

          {/* left side */}
          <div className='border-2'>
            <span>left side</span>
          </div>

          {/* right side */}
          <div className='border-2'>
            <span>right side</span>
          </div>

        </div>
      </div>
    </section>
  );
}
