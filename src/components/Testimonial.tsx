import { Star, Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Hook contador animado
function useCountAnimation(end: number, duration: number = 2, suffix: string = '') {
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

  return { count: count + suffix, setIsVisible };
}

export default function Testimonial() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.8 });

  const { count: count50, setIsVisible: setVisible50 } = useCountAnimation(50, 2, '+');
  const { count: count98, setIsVisible: setVisible98 } = useCountAnimation(98, 2.3);

  useEffect(() => {
    if (isStatsInView) {
      setVisible50(true);
      setVisible98(true);
    }
  }, [isStatsInView, setVisible50, setVisible98]);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateY: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
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
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: i * 0.2,
      },
    }),
  };

  const testimonials = [
    {
      stars: 5,
      text: '"Con Sea Software Factory logramos una plataforma integral que unificó nuestros procesos y generó ahorros reales del 40%. Su equipo no solo desarrolló el software, sino que se convirtió en nuestro socio tecnológico."',
      name: 'María González',
      role: 'CEO, TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      stars: 5,
      text: '"La app móvil que desarrollaron superó nuestras expectativas. Los usuarios la aman y hemos visto un incremento del 200% en engagement. Su proceso ágil y comunicación constante fue excepcional."',
      name: 'Carlos Rodríguez',
      role: 'CTO, InnovateLab',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      stars: 5,
      text: '"Su consultoría tecnológica nos ayudó a modernizar completamente nuestra infraestructura. Pasamos de sistemas legacy a una arquitectura cloud moderna. El ROI ha sido impresionante."',
      name: 'Ana Martínez',
      role: 'Directora IT, GlobalSolutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-brand-soft-orange/5 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 sm:mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 relative inline-block">
            Lo que Dicen Nuestros Clientes
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-brand-dark-green via-brand-mustard to-brand-soft-orange"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Testimonios reales de empresas que han transformado su negocio con nosotros.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 shadow-lg relative overflow-hidden group"
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000 }}
            >
              {/* Gradiente decorativo */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-mustard/20 to-brand-soft-orange/20 rounded-full blur-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.4 }}
              />

              {/* Estrellas animadas */}
              <div className="flex items-center mb-4 relative z-10">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                      delay: index * 0.15 + i * 0.1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Icono de Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
              >
                <Quote className="h-8 w-8 text-brand-dark-green mb-4 relative z-10" />
              </motion.div>

              <motion.p
                className="text-gray-600 mb-6 italic relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
              >
                {testimonial.text}
              </motion.p>

              <motion.div
                className="flex items-center space-x-4 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>

              {/* Borde animado */}
              <motion.div
                className="absolute inset-0 border-2 border-brand-mustard/0"
                whileHover={{ borderColor: 'rgba(255, 193, 7, 0.3)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats bottom */}
        <motion.div
          className="mt-16 text-center"
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-8 bg-white p-8 shadow-lg relative overflow-hidden"
            whileHover={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 },
            }}
          >
            {/* Fondo decorativo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-mustard/10 via-transparent to-brand-soft-orange/10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <motion.div
              className="text-center relative z-10"
              custom={0}
              variants={statVariants}
              initial="hidden"
              animate={isStatsInView ? 'visible' : 'hidden'}
            >
              <motion.div
                className="text-3xl font-bold text-brand-dark-green"
                animate={isStatsInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {count50}
              </motion.div>
              <div className="text-sm text-gray-600">Proyectos exitosos</div>
            </motion.div>

            <motion.div
              className="text-center relative z-10"
              custom={1}
              variants={statVariants}
              initial="hidden"
              animate={isStatsInView ? 'visible' : 'hidden'}
            >
              <motion.div
                className="text-3xl font-bold text-brand-dark-green"
                animate={isStatsInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {count98}%
              </motion.div>
              <div className="text-sm text-gray-600">Clientes satisfechos</div>
            </motion.div>

            <motion.div
              className="text-center relative z-10"
              custom={2}
              variants={statVariants}
              initial="hidden"
              animate={isStatsInView ? 'visible' : 'hidden'}
            >
              <motion.div
                className="text-3xl font-bold text-brand-dark-green flex items-center"
                animate={isStatsInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                5.0
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 + i * 0.1 }}
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                  </motion.div>
                ))}
              </motion.div>
              <div className="text-sm text-gray-600">Rating promedio</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
