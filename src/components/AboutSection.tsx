"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, BookOpen, Gamepad2 } from "lucide-react";

const timelineItems = [
  {
    title: "Master of Artificial Intelligence",
    organization: "University of Technology Sydney",
    period: "2024 - 2026",
    description: "Focusing on deep learning and computer vision. Currently working on a thesis about neural network interpretability.",
  },
  {
    title: "AI/ML Intern",
    organization: "Tech Startup in Sydney",
    period: "2024",
    description: "Built recommendation systems and learned how messy real-world data actually is. Spent 80% of time cleaning data, 20% building models.",
  },
  {
    title: "Bachelor of Computer Science",
    organization: "FPT University",
    period: "2020 - 2024",
    description: "Graduated with honors. My thesis on image classification won best project in the department (still proud of that).",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - NO SPARKLES */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-medium mb-2">Hello!</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">I'm Thong</h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I got into AI because of a Netflix recommendation that was surprisingly accurate. 
                That sparked my curiosity about how machines learn patterns. Now I'm pursuing a 
                Master's in AI at UTS in Sydney.
              </p>
              <p>
                What I love about ML is that it's the perfect mix of math, coding, and problem-solving. 
                There's something satisfying about training a model and watching it actually work.
              </p>
              <p>
                I'm currently looking for internship opportunities where I can work on real-world 
                AI problems and learn from experienced engineers. If you're hiring, let's chat!
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-6 text-slate-500">
              <MapPin className="w-4 h-4" />
              <span>Sydney, Australia</span>
            </div>

            {/* Beyond the Code Section */}
            <motion.div 
              className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 text-slate-900 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Beyond the Code
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Coffee className="w-4 h-4 mt-0.5 text-amber-600" />
                  <span>Coffee enthusiast - Currently on a quest to find Sydney's best flat white</span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 mt-0.5 text-blue-600" />
                  <span>Reading "Hands-On Machine Learning" for the 3rd time (it keeps getting better)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gamepad2 className="w-4 h-4 mt-0.5 text-purple-600" />
                  <span>Weekend competitive programmer - still trying to solve that one LeetCode hard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🏃</span>
                  <span>Training for my first half-marathon (wish me luck)</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900">My Journey So Far</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-8 pb-6 border-l-2 border-slate-200 last:pb-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow" />
                  
                  <span className="text-sm text-slate-500 font-medium">{item.period}</span>
                  <h4 className="font-bold text-slate-900 mt-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.organization}</p>
                  <p className="text-sm text-slate-600 mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
