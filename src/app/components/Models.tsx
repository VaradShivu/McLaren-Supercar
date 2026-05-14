import { motion } from "motion/react";
import { Link } from "react-router";
import { cars } from "../data/cars";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ConfiguratorModal } from "./ConfiguratorModal";
import { ContactModal } from "./ContactModal";

export function Models() {
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  const handleConfigureClick = (car: typeof cars[0]) => {
    setSelectedCar(car);
    setConfiguratorOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl sm:text-7xl font-bold mb-6">OUR MODELS</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each McLaren is a masterpiece of engineering, designed to deliver unparalleled performance and driving pleasure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-orange-500/20 blur-3xl group-hover:bg-orange-500/30 transition-all duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-[400px] object-cover shadow-2xl"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-5xl font-bold mb-3">{car.model}</h2>
                    <p className="text-xl text-orange-500 mb-4">{car.tagline}</p>
                    <p className="text-gray-400 leading-relaxed">{car.description}</p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-400 mb-1">POWER</p>
                      <p className="text-2xl font-bold">{car.specs.power}</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-400 mb-1">0-60 MPH</p>
                      <p className="text-2xl font-bold">{car.specs.acceleration}</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-400 mb-1">TOP SPEED</p>
                      <p className="text-2xl font-bold">{car.specs.topSpeed}</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-400 mb-1">WEIGHT</p>
                      <p className="text-2xl font-bold">{car.specs.weight}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      to={`/models/${car.id}`}
                      className="px-8 py-4 bg-orange-500 text-black hover:bg-orange-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      EXPLORE {car.model}
                      <ArrowRight size={20} />
                    </Link>
                    <button 
                      onClick={() => handleConfigureClick(car)}
                      className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all"
                    >
                      CONFIGURE
                    </button>
                  </div>

                  <div className="pt-4">
                    <p className="text-3xl font-bold text-orange-500">{car.price}</p>
                    <p className="text-sm text-gray-500">Starting MSRP</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">FIND YOUR PERFECT McLAREN</h2>
            <p className="text-xl text-gray-400 mb-12">
              Speak with a specialist to configure your dream supercar
            </p>
            <button 
              onClick={() => setContactOpen(true)}
              className="px-12 py-5 bg-orange-500 text-black text-lg hover:bg-orange-400 transition-all transform hover:scale-105"
            >
              CONTACT US
            </button>
          </motion.div>
        </div>
      </section>

      <ConfiguratorModal
        isOpen={configuratorOpen}
        onClose={() => setConfiguratorOpen(false)}
        car={selectedCar}
      />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}