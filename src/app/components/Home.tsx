import { motion } from "motion/react";
import { ChevronDown, Gauge, Zap, Wind } from "lucide-react";
import { Link } from "react-router";
import { cars } from "../data/cars";
import { useState } from "react";
import { ConfiguratorModal } from "./ConfiguratorModal";
import { ContactModal } from "./ContactModal";

export function Home() {
  const featuredCar = cars[0]; // 720S
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <img
            src={featuredCar.image}
            alt={featuredCar.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl sm:text-8xl font-bold tracking-wider mb-4">
              {featuredCar.model}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 tracking-wide">
              {featuredCar.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={`/models/${featuredCar.id}`}
                className="px-8 py-4 bg-orange-500 text-black hover:bg-orange-400 transition-all transform hover:scale-105"
              >
                EXPLORE NOW
              </Link>
              <Link
                to="/models"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all transform hover:scale-105"
              >
                VIEW ALL MODELS
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <Gauge className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">{featuredCar.specs.power}</h3>
              <p className="text-gray-400">Maximum Power</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">{featuredCar.specs.acceleration}</h3>
              <p className="text-gray-400">Acceleration</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <Wind className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">{featuredCar.specs.topSpeed}</h3>
              <p className="text-gray-400">Top Speed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Models Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">EXPERIENCE EXCELLENCE</h2>
            <p className="text-xl text-gray-400">Discover our legendary lineup</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.slice(0, 6).map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/models/${car.id}`} className="group block">
                  <div className="relative overflow-hidden bg-black">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-bold mb-2">{car.model}</h3>
                    <p className="text-gray-400 mb-4">{car.tagline}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500 font-bold">{car.price}</span>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        LEARN MORE →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              READY TO EXPERIENCE<br />PURE PERFORMANCE?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Configure your dream McLaren today and join the legacy of racing excellence
            </p>
            <button 
              onClick={() => setConfiguratorOpen(true)}
              className="px-12 py-5 bg-orange-500 text-black text-lg hover:bg-orange-400 transition-all transform hover:scale-105"
            >
              START YOUR JOURNEY
            </button>
          </motion.div>
        </div>
      </section>

      <ConfiguratorModal
        isOpen={configuratorOpen}
        onClose={() => setConfiguratorOpen(false)}
        car={featuredCar}
      />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}