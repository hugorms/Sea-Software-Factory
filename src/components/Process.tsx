import { Search, PenTool, Code, GraduationCap, Headphones as HeadphonesIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Search,
      title: 'Análisis',
      description: 'Definimos objetivos, requisitos y alcance del proyecto junto contigo.',
      details: ['Reuniones de descubrimiento', 'Análisis de requerimientos', 'Definición de objetivos', 'Estimación de tiempos']
    },
    {
      icon: PenTool,
      title: 'Diseño & Arquitectura',
      description: 'Estructuramos la solución con wireframes, prototipos y arquitectura técnica.',
      details: ['Wireframes y mockups', 'Prototipo interactivo', 'Arquitectura de software', 'Stack tecnológico']
    },
    {
      icon: Code,
      title: 'Desarrollo',
      description: 'Programamos, probamos y desplegamos usando metodologías ágiles.',
      details: ['Sprints de desarrollo', 'Testing continuo', 'Code reviews', 'Deployment automatizado']
    },
    {
      icon: GraduationCap,
      title: 'Capacitación & Adopción',
      description: 'Entrenamos a tu equipo para aprovechar al máximo la nueva solución.',
      details: ['Sesiones de capacitación', 'Documentación técnica', 'Manuales de usuario', 'Workshop prácticos']
    },
    {
      icon: HeadphonesIcon,
      title: 'Soporte & Evolución',
      description: 'Brindamos mejoras continuas, mantenimiento y soporte técnico.',
      details: ['Soporte 24/7', 'Actualizaciones regulares', 'Nuevas funcionalidades', 'Monitoreo proactivo']
    }
  ];

  // Variantes de animación
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.5,
      },
    },
  };

  return (
    <section id="proceso" className="pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-22 md:pb-10 lg:pt-24 lg:pb-10 xl:pt-28 xl:pb-12 bg-brand-gray-light overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Título animado */}
        <motion.div
          className="text-center mb-3 sm:mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-brand-carbon-black mb-1.5 font-poppins"
            variants={titleVariants}
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-brand-gray-medium max-w-3xl mx-auto mt-1.5"
            variants={titleVariants}
          >
            Nuestro proceso probado garantiza resultados exitosos en cada proyecto,
            desde la concepción hasta el soporte continuo.
          </motion.p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`${index === steps.length - 1 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-brand-white p-3 sm:p-4 lg:p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-brand-gray-medium/20 h-full"
                  whileHover={{
                    y: -8,
                    borderColor: 'rgba(87, 178, 121, 0.5)',
                  }}
                >
                  {/* Efecto de brillo al hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-green-medium/10 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icon con efecto ripple */}
                  <motion.div
                    className="relative z-10 flex-shrink-0 mb-3"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-brand-green-medium rounded-full flex items-center justify-center shadow-xl relative overflow-hidden"
                      whileHover={{
                        scale: 1.15,
                        rotate: 360,
                        boxShadow: "0 20px 60px rgba(87, 178, 121, 0.6)",
                        transition: { duration: 0.6 },
                      }}
                    >
                      <step.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-brand-carbon-black relative z-10" />

                      {/* Ripple effect solo al hover */}
                      <motion.div
                        className="absolute inset-0 bg-brand-dark-green rounded-full"
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{
                          scale: [1, 1.5],
                          opacity: [0.5, 0],
                          transition: { duration: 0.6 }
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-carbon-black mb-1.5 relative z-10 group-hover:text-brand-green-medium transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-medium mb-3 text-sm sm:text-base relative z-10">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-1.5 relative z-10">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + detailIndex * 0.1 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green-medium rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-brand-gray-medium flex-1">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final con animación explosiva */}
        <motion.div
          className="mt-3 sm:mt-5 text-center"
          initial="hidden"
          animate={isTimelineInView ? "visible" : "hidden"}
          variants={ctaVariants}
        >
          <motion.div
            className="p-4 sm:p-6 bg-brand-white text-brand-carbon-black relative overflow-hidden border border-brand-gray-medium/20"
            whileHover={{
              boxShadow: '0 20px 50px rgba(87, 178, 121, 0.3)',
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10 text-brand-carbon-black"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              ¿Listo para comenzar tu transformación digital?
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base text-brand-gray-medium mb-3 sm:mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
            >
              Iniciemos con una consulta gratuita para entender tus necesidades y objetivos.
            </motion.p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-brand-green-medium text-brand-carbon-black px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold hover:bg-brand-dark-green hover:text-white transition-all duration-200 rounded-lg relative overflow-hidden group z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isTimelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.1, type: 'spring' as const, stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-brand-dark-green"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.2 }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Solicitar consulta gratuita</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
