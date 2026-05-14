import { motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";
import { useState } from "react";
import { Car } from "../data/cars";

interface ConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  car?: Car;
}

const colors = [
  { name: "McLaren Orange", hex: "#FF8000", class: "bg-orange-500" },
  { name: "Volcano Red", hex: "#C41E3A", class: "bg-red-600" },
  { name: "Azores Orange", hex: "#FF6B35", class: "bg-orange-600" },
  { name: "Silica White", hex: "#F5F5F5", class: "bg-gray-100" },
  { name: "Black", hex: "#000000", class: "bg-black" },
  { name: "Blade Silver", hex: "#C0C0C0", class: "bg-gray-400" },
];

const interiors = [
  "Carbon Black Alcantara",
  "Jet Black Leather",
  "Tan Leather",
  "Red Leather",
  "Saddle Tan",
];

const wheels = [
  "5-Spoke Lightweight - 19\"/20\"",
  "10-Spoke Diamond Cut - 19\"/20\"",
  "Ultra-Lightweight - 19\"/20\"",
  "Stealth - 19\"/20\"",
];

const packages = [
  { name: "Track Pack", price: 15000 },
  { name: "Carbon Fiber Pack", price: 25000 },
  { name: "Premium Audio", price: 8000 },
  { name: "Electrochromic Roof", price: 12000 },
];

export function ConfiguratorModal({ isOpen, onClose, car }: ConfiguratorModalProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedInterior, setSelectedInterior] = useState(interiors[0]);
  const [selectedWheels, setSelectedWheels] = useState(wheels[0]);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const togglePackage = (packageName: string) => {
    if (selectedPackages.includes(packageName)) {
      setSelectedPackages(selectedPackages.filter((p) => p !== packageName));
    } else {
      setSelectedPackages([...selectedPackages, packageName]);
    }
  };

  const getTotalPrice = () => {
    if (!car) return 0;
    const basePrice = parseInt(car.price.replace(/[$,]/g, ""));
    const packagesPrice = packages
      .filter((p) => selectedPackages.includes(p.name))
      .reduce((sum, p) => sum + p.price, 0);
    return basePrice + packagesPrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Configuration Saved!\n\nModel: ${car?.name}\nColor: ${selectedColor.name}\nInterior: ${selectedInterior}\nWheels: ${selectedWheels}\nTotal: $${getTotalPrice().toLocaleString()}`);
    onClose();
  };

  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-gray-900 border border-white/10 z-50 overflow-auto"
          >
            <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-3xl font-bold">Configure Your {car.model}</h2>
                <p className="text-gray-400">Customize every detail</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              {/* Exterior Color */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Exterior Color</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`p-4 border-2 transition-all ${
                        selectedColor.name === color.name
                          ? "border-orange-500 bg-white/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className={`w-full h-16 mb-2 ${color.class} border border-white/20`} />
                      <p className="text-sm">{color.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interior */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Interior</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interiors.map((interior) => (
                    <button
                      key={interior}
                      type="button"
                      onClick={() => setSelectedInterior(interior)}
                      className={`p-4 border-2 transition-all text-left ${
                        selectedInterior === interior
                          ? "border-orange-500 bg-white/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      {interior}
                      {selectedInterior === interior && (
                        <Check size={20} className="inline ml-2 text-orange-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wheels */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Wheels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wheels.map((wheel) => (
                    <button
                      key={wheel}
                      type="button"
                      onClick={() => setSelectedWheels(wheel)}
                      className={`p-4 border-2 transition-all text-left ${
                        selectedWheels === wheel
                          ? "border-orange-500 bg-white/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      {wheel}
                      {selectedWheels === wheel && (
                        <Check size={20} className="inline ml-2 text-orange-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Packages */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Optional Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.name}
                      type="button"
                      onClick={() => togglePackage(pkg.name)}
                      className={`p-4 border-2 transition-all text-left ${
                        selectedPackages.includes(pkg.name)
                          ? "border-orange-500 bg-white/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{pkg.name}</span>
                        <span className="text-orange-500">+${pkg.price.toLocaleString()}</span>
                      </div>
                      {selectedPackages.includes(pkg.name) && (
                        <Check size={20} className="text-orange-500 mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary and Submit */}
              <div className="sticky bottom-0 bg-gray-900 border-t border-white/10 pt-6 -mx-6 px-6 pb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-gray-400">Estimated Total</p>
                    <p className="text-4xl font-bold text-orange-500">
                      ${getTotalPrice().toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-orange-500 text-black hover:bg-orange-400 transition-all"
                    >
                      SAVE CONFIGURATION
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
