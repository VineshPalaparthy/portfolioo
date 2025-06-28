import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./fonts.css";

function Card({ children }) {
  return (
    <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-2xl border border-zinc-700 rounded-3xl p-8 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:scale-[1.03] transition-transform duration-500 ease-out overflow-hidden">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const works = [
    {
      title: "🚗 One Last Journey (Mustang Render)",
      image: "/One Last Journey In My Mustang 07(3)-2.jpg",
      description: "A cinematic render of a Mustang ‘07, highlighting dusk lighting and storytelling."
    },
    {
      title: "🌀 Monster Cycle Render",
      image: "/MONSTER - CYCLE RENDER - MAIN SHOT.png",
      description: "Stylized creature-cycle composition using advanced lighting and Blender nodes."
    },
    {
      title: "🌆 A Trip to Heaven",
      image: "/A trip to heaven. (1 of 1).jpg",
      description: "Concept art capturing serenity using gradient overlays and matte painting."
    },
    {
      title: "🏙️ Vacation 4K Matte Shot",
      image: "/VACATION 4K.png",
      description: "Matte painting and 3D overlay to create a surreal urban vacation view."
    },
    {
      title: "🔴 Photo Manipulation: Pinkuuuuu",
      image: "/pinkuuuuu.png",
      description: "Color-graded photo manipulation with layered blend modes."
    },
    {
      title: "🌄 Vectorscape",
      image: "/vectorscape.png",
      description: "Vector-style layered landscape inspired by side-scroller aesthetics."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 font-sans scroll-smooth">
      <motion.h1
        className="text-5xl font-bold text-red-600 mb-6 tracking-wide text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Vinesh Palaparthy
      </motion.h1>
      <p className="text-xl mb-16 text-gray-300 max-w-3xl mx-auto text-center font-light">
        🎮 Game & Graphic Designer | Crafting immersive visuals, cinematic edits & game-ready assets
      </p>

      <section id="about" className="mb-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-red-500 mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m Vinesh, a passionate visual storyteller who builds cinematic moments and interactive visuals.
            My specialties range from 3D modeling and UI/UX to motion graphics and photo editing.
          </p>
        </motion.div>
      </section>

      <section id="portfolio" className="space-y-20 mb-32">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <Card>
              <CardContent>
                <img src={work.image} alt={work.title} className="rounded-lg w-full mb-4 shadow-lg" />
                <h2 className="text-2xl text-red-500 font-semibold mb-2">{work.title}</h2>
                <p className="text-gray-400">{work.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section id="contact" className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-red-500 mb-4">Contact</h2>
          <p className="text-gray-400 mb-2">📧 vineshpalaparthy@gmail.com</p>
          <p className="text-gray-500 text-sm">Based in India | Open to global collaborations</p>
        </motion.div>
      </section>
    </div>
  );
}
