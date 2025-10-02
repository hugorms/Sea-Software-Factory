import { Code2, Mail, Phone, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const linkVariants = {
    hover: {
      x: 5,
      color: '#f1c40f',
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="text-white overflow-hidden" style={{ backgroundColor: 'rgba(26, 77, 46, 0.95)' }} ref={footerRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <motion.div
            className="sm:col-span-2 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="bg-brand-mustard rounded-full p-2 relative"
                whileHover="hover"
                variants={iconVariants}
              >
                <Code2 className="h-8 w-8 text-brand-dark-green" />
                <motion.div
                  className="absolute inset-0 bg-brand-mustard rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-xl font-bold">Sea Software Factory</span>
            </div>
            <motion.p
              className="text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transformamos negocios con tecnología. Creamos soluciones web, móviles y cloud
              que impulsan la eficiencia, innovación y crecimiento sostenible.
            </motion.p>
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="text-2xl font-bold text-white"
                animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                40%
              </motion.div>
              <div className="text-sm text-gray-400">Reducción promedio en costos operativos</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                'Desarrollo Web',
                'Apps Móviles',
                'Sistemas Personalizados',
                'Cloud Solutions',
                'UI/UX Design',
                'Consultoría',
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                >
                  <motion.a
                    href="#"
                    className="hover:text-brand-mustard transition-colors duration-200 inline-block"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              {[
                { icon: Mail, text: 'contacto@seasoftwarefactory.com' },
                { icon: Phone, text: '+58 XXX XXX XXXX' },
                { icon: MapPin, text: 'Venezuela' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                    <item.icon className="h-5 w-5 text-white flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-brand-mustard/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              © 2024 Sea Software Factory. Todos los derechos reservados.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              {['Política de Privacidad', 'Términos de Servicio'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-brand-mustard text-sm transition-colors duration-200"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
