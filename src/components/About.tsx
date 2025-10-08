import { Award, Users, Rocket, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Hook contador animado
function useCountAnimation(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
}

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const { count: count40, setIsVisible: setVisible40 } = useCountAnimation(40, 2);
  const { count: count100, setIsVisible: setVisible100 } = useCountAnimation(100, 2.3);

  useEffect(() => {
    if (isStatsInView) {
      setVisible40(true);
      setVisible100(true);
    }
  }, [isStatsInView, setVisible40, setVisible100]);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
  };

  const iconCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
        delay: i * 0.15,
      },
    }),
  };

  const values = [
    { icon: Award, title: 'Excelencia', desc: 'Calidad garantizada en cada proyecto' },
    { icon: Users, title: 'Colaboración', desc: 'Trabajo en equipo y comunicación constante' },
    { icon: Rocket, title: 'Innovación', desc: 'Tecnologías de vanguardia' },
    { icon: Shield, title: 'Seguridad', desc: 'Soluciones robustas y seguras' },
  ];

  return (
    <section id="nosotros" className="pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-22 md:pb-10 lg:pt-24 lg:pb-10 xl:pt-28 xl:pb-12 bg-brand-gray-light overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          className="text-center mb-3 sm:mb-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-brand-carbon-black mb-1.5 font-poppins">
            Acerca de Nosotros
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-brand-gray-medium max-w-3xl mx-auto mt-1.5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            En Sea Software Factory transformamos negocios con tecnología.
            Creamos aplicaciones web y móviles, sistemas a medida y soluciones cloud
            que se adaptan a tu operación.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center mb-4 md:mb-6">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={imageVariants}
          >
            <motion.img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipo de desarrollo"
              className="w-full h-96 object-cover shadow-lg rounded-lg"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="space-y-2.5"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={contentVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-brand-carbon-black">Lo que nos hace únicos</h3>
            <p className="text-brand-gray-medium leading-relaxed text-sm sm:text-base">
              Nuestra combinación de expertise técnico, metodologías ágiles y visión innovadora
              nos permite convertirnos en un socio estratégico para nuestros clientes.
              No solo construimos software: brindamos soporte, mantenimiento y evolución continua.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-2 group"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={iconCardVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="bg-brand-green-medium/20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-1.5 relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-dark-green relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-brand-green-medium rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                  <h4 className="font-semibold text-brand-carbon-black text-sm sm:text-base">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-gray-medium">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="p-3 sm:p-4 md:p-5 relative overflow-hidden bg-gradient-to-br from-brand-carbon-black via-brand-anthracite to-brand-carbon-black"
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Partículas de fondo */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-brand-green-medium/10 rounded-full blur-xl"
              style={{ left: `${20 + i * 30}%`, top: `${30 + (i % 2) * 40}%` }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}

          <div className="text-center relative z-10">
            <motion.h3
              className="text-lg sm:text-xl font-bold text-brand-white mb-1.5"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              Casos de éxito que hablan por sí solos
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base text-brand-gray-light mb-3 sm:mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              En Sea Software Factory, somos expertos en desarrollo de software a medida, ayudando
              a las empresas a construir soluciones tecnológicas
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              <motion.div
                className="bg-brand-anthracite p-2.5 sm:p-4 shadow-lg border border-brand-gray-medium/20 text-center relative overflow-hidden group"
                custom={0}
                variants={statVariants}
                initial="hidden"
                animate={isStatsInView ? 'visible' : 'hidden'}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(87, 178, 121, 0.3)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-green-medium/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-brand-green-medium mb-1 relative z-10"
                  animate={isStatsInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {count40}%
                </motion.div>
                <p className="text-xs sm:text-sm text-brand-gray-light relative z-10">
                  Reducción promedio en costos operativos
                </p>
              </motion.div>

              <motion.div
                className="bg-brand-anthracite p-2.5 sm:p-4 shadow-lg border border-brand-gray-medium/20 text-center relative overflow-hidden group"
                custom={1}
                variants={statVariants}
                initial="hidden"
                animate={isStatsInView ? 'visible' : 'hidden'}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(87, 178, 121, 0.3)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-green-medium/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-brand-green-medium mb-1 relative z-10"
                  animate={isStatsInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  {count100}%
                </motion.div>
                <p className="text-xs sm:text-sm text-brand-gray-light relative z-10">
                  Integración de procesos críticos
                </p>
              </motion.div>

              <motion.div
                className="bg-brand-anthracite p-2.5 sm:p-4 shadow-lg border border-brand-gray-medium/20 text-center sm:col-span-2 md:col-span-1 relative overflow-hidden group"
                custom={2}
                variants={statVariants}
                initial="hidden"
                animate={isStatsInView ? 'visible' : 'hidden'}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(87, 178, 121, 0.3)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-green-medium/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-brand-green-medium mb-1 relative z-10"
                  animate={isStatsInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  24/7
                </motion.div>
                <p className="text-xs sm:text-sm text-brand-gray-light relative z-10">
                  Acceso a datos en tiempo real
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
