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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      rotateY: index % 2 === 0 ? -20 : 20,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2,
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: index * 0.2 + 0.2,
      },
    }),
  };

  const detailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section id="proceso" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Título animado */}
        <motion.div
          className="text-center mb-6 sm:mb-16"
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
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 relative inline-block"
            variants={titleVariants}
          >
            Cómo Trabajamos
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-brand-dark-green via-brand-mustard to-brand-soft-orange"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            variants={titleVariants}
          >
            Nuestro proceso probado garantiza resultados exitosos en cada proyecto,
            desde la concepción hasta el soporte continuo.
          </motion.p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line animada */}
          <motion.div
            className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-brand-dark-green to-brand-mustard origin-top"
            variants={timelineVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
          />

          <div className="space-y-1 sm:space-y-2 lg:space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col-reverse lg:space-x-8 mb-3 lg:mb-0`}
                custom={index}
                initial="hidden"
                animate={isTimelineInView ? "visible" : "hidden"}
                variants={stepVariants}
                style={{ perspective: 1000 }}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} mt-1 lg:mt-0 lg:mb-0`}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-brand-mustard/10 to-brand-soft-orange/10 p-3 sm:p-4 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
                    whileHover={{
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: 0.2 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Número del paso */}
                    <motion.div
                      className={`absolute ${index % 2 === 0 ? 'lg:right-4' : 'lg:left-4'} top-4 text-6xl font-bold text-brand-dark-green/10`}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={isTimelineInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                      transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                    >
                      {index + 1}
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center lg:text-left relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2 text-base sm:text-lg text-center lg:text-left relative z-10">
                      {step.description}
                    </p>

                    {/* Details con animación progresiva */}
                    <div className="space-y-2 relative z-10">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className={`flex items-center space-x-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}
                          custom={detailIndex}
                          initial="hidden"
                          animate={isTimelineInView ? "visible" : "hidden"}
                          variants={detailVariants}
                          whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-brand-dark-green rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: detailIndex * 0.2,
                            }}
                          />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress bar para cada step */}
                    <motion.div
                      className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={isTimelineInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-dark-green to-brand-mustard"
                        initial={{ width: 0 }}
                        animate={isTimelineInView ? { width: '100%' } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2 + 1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Icon con efecto ripple */}
                <div className="relative z-10 mb-6 sm:mb-8 lg:mb-0">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-dark-green/95 rounded-full flex items-center justify-center shadow-xl relative overflow-hidden"
                    custom={index}
                    variants={iconVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10" />

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-brand-mustard rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />

                    {/* Segundo ripple desfasado */}
                    <motion.div
                      className="absolute inset-0 bg-brand-soft-orange rounded-full"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3 + 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Círculo decorativo exterior */}
                  <motion.div
                    className="absolute inset-0 border-2 border-brand-dark-green/30 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-full lg:w-1/2 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final con animación explosiva */}
        <motion.div
          className="mt-3 sm:mt-6 text-center"
          initial="hidden"
          animate={isTimelineInView ? "visible" : "hidden"}
          variants={ctaVariants}
        >
          <motion.div
            className="p-6 sm:p-8 text-white relative overflow-hidden"
            style={{ backgroundColor: 'rgba(26, 77, 46, 0.95)' }}
            whileHover={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              ¿Listo para comenzar tu transformación digital?
            </motion.h3>
            <motion.p
              className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 relative z-10"
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
              className="bg-white text-brand-dark-green border-2 border-brand-dark-green px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-brand-dark-green hover:text-white transition-all duration-200 rounded-lg relative overflow-hidden group z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isTimelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-brand-mustard"
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
