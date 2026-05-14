import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router";
import { cars } from "../data/cars";
import { ArrowLeft, Check, Gauge, Zap, Wind, Weight } from "lucide-react";
import { useEffect, useState } from "react";
import { ConfiguratorModal } from "./ConfiguratorModal";
import { ContactModal } from "./ContactModal";

export function CarDetail() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === carId);
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carId]);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Model Not Found</h1>
          <Link to="/models" className="text-orange-500 hover:underline">
            View All Models
          </Link>
        </div>
      </div>
    );
  }

  const otherCars = cars.filter((c) => c.id !== carId).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl sm:text-8xl font-bold mb-4">{car.model}</h1>
              <p className="text-2xl text-orange-500 mb-6">{car.tagline}</p>
              <p className="text-4xl font-bold">{car.price}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xl leading-relaxed text-gray-300">
              {car.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">PERFORMANCE SPECS</h2>
            <p className="text-xl text-gray-400">Engineering perfection in numbers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30"
            >
              <Gauge className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-sm text-gray-400 mb-2">POWER</h3>
              <p className="text-4xl font-bold">{car.specs.power}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30"
            >
              <Zap className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-sm text-gray-400 mb-2">ACCELERATION</h3>
              <p className="text-4xl font-bold">{car.specs.acceleration}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30"
            >
              <Wind className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-sm text-gray-400 mb-2">TOP SPEED</h3>
              <p className="text-4xl font-bold">{car.specs.topSpeed}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30"
            >
              <Weight className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-sm text-gray-400 mb-2">WEIGHT</h3>
              <p className="text-4xl font-bold">{car.specs.weight}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">KEY FEATURES</h2>
            <p className="text-xl text-gray-400">Cutting-edge technology and innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {car.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/5 border border-white/10"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                  <Check size={16} className="text-black" />
                </div>
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">EXPERIENCE THE {car.model}</h2>
            <p className="text-xl text-gray-400 mb-12">
              Configure your perfect {car.model} or schedule a test drive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setConfiguratorOpen(true)}
                className="px-12 py-5 bg-orange-500 text-black text-lg hover:bg-orange-400 transition-all transform hover:scale-105"
              >
                CONFIGURE NOW
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="px-12 py-5 border-2 border-white text-white text-lg hover:bg-white hover:text-black transition-all"
              >
                BOOK TEST DRIVE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Models */}
      {otherCars.length > 0 && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4">EXPLORE MORE MODELS</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherCars.map((otherCar, index) => (
                <motion.div
                  key={otherCar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/models/${otherCar.id}`} className="group block">
                    <div className="relative overflow-hidden">
                      <img
                        src={otherCar.image}
                        alt={otherCar.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10">
                      <h3 className="text-2xl font-bold mb-2">{otherCar.model}</h3>
                      <p className="text-gray-400 mb-4">{otherCar.tagline}</p>
                      <span className="text-orange-500 font-bold">{otherCar.price}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConfiguratorModal
        isOpen={configuratorOpen}
        onClose={() => setConfiguratorOpen(false)}
        car={car}
      />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}