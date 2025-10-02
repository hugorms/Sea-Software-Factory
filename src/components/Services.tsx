import {
  Globe,
  Smartphone,
  Settings,
  Cloud,
  Palette,
  Lightbulb,
  Check
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas, responsivas y de alto rendimiento usando las tecnologías más avanzadas.',
      features: ['React, Vue, Angular', 'Progressive Web Apps', 'E-commerce', 'CMS personalizados'],
      color: 'from-brand-dark-green to-brand-mustard'
    },
    {
      icon: Smartphone,
      title: 'Desarrollo Móvil',
      description: 'Apps nativas e híbridas para iOS y Android que ofrecen experiencias excepcionales.',
      features: ['React Native', 'Flutter', 'Ionic', 'Apps nativas'],
      color: 'from-brand-mustard to-brand-soft-orange'
    },
    {
      icon: Settings,
      title: 'Sistemas Personalizados',
      description: 'Soluciones empresariales a medida que se adaptan perfectamente a tus procesos de negocio.',
      features: ['ERP/CRM', 'Automatización', 'APIs REST/GraphQL', 'Microservicios'],
      color: 'from-brand-dark-green to-brand-soft-orange'
    },
    {
      icon: Cloud,
      title: 'Soluciones en la Nube',
      description: 'Migración e implementación de infraestructura cloud escalable y segura.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Docker/Kubernetes', 'CI/CD'],
      color: 'from-brand-soft-orange to-brand-mustard'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Diseño centrado en el usuario con interfaces modernas, intuitivas y atractivas.',
      features: ['Prototipado', 'Design System', 'Figma/Adobe XD', 'Usabilidad'],
      color: 'from-brand-mustard to-brand-dark-green'
    },
    {
      icon: Lightbulb,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para optimizar tu arquitectura tecnológica y procesos.',
      features: ['Auditoría técnica', 'Arquitectura de software', 'Stack tecnológico', 'Roadmap'],
      color: 'from-brand-dark-green to-brand-dark-green'
    }
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="servicios" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-mustard/5 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Título animado */}
        <motion.div
          className="text-center mb-6 sm:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 relative inline-block"
            variants={titleVariants}
          >
            Nuestros Servicios
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
            Ofrecemos un ecosistema completo de servicios tecnológicos para impulsar
            la transformación digital de tu empresa.
          </motion.p>
        </motion.div>

        {/* Grid de servicios con stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="bg-white p-4 sm:p-6 md:p-8 shadow-lg relative overflow-hidden h-full"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Fondo decorativo animado */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 blur-2xl`}
                  whileHover={{ opacity: 0.2, scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icono con animaciones múltiples */}
                <motion.div
                  className="mb-4 sm:mb-6 relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    className="inline-block relative"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-black relative z-10" />

                    {/* Círculo decorativo detrás del icono */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-full -z-10`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                    />
                  </motion.div>
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features con animación de check progresiva */}
                <div className="space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-2 group/feature"
                      custom={featureIndex}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={featureVariants}
                    >
                      <motion.div
                        className="relative flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Círculo de fondo animado */}
                        <motion.div
                          className="w-5 h-5 rounded-full bg-brand-dark-green/10 absolute"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: featureIndex * 0.1 + 0.5, duration: 0.3 }}
                        />
                        {/* Check icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                          transition={{
                            delay: featureIndex * 0.1 + 0.6,
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <Check className="w-4 h-4 text-brand-dark-green relative z-10" />
                        </motion.div>
                      </motion.div>
                      <motion.span
                        className="text-sm text-gray-600"
                        whileHover={{ x: 3, color: '#1a4d2e' }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Botón "Saber más" con efecto de flecha */}
                <motion.button
                  className="mt-6 text-brand-dark-green font-semibold hover:text-brand-mustard transition-colors duration-200 flex items-center space-x-2 group/btn relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Saber más</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.button>

                {/* Borde brillante animado en hover */}
                <motion.div
                  className={`absolute inset-0 opacity-0 border-2 bg-gradient-to-br ${service.color}`}
                  style={{
                    maskImage: 'linear-gradient(transparent, transparent)',
                    WebkitMaskImage: 'linear-gradient(transparent, transparent)',
                  }}
                  whileHover={{
                    opacity: 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Shadow decorativa adicional */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-dark-green/5 to-brand-mustard/5 -z-10 blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
