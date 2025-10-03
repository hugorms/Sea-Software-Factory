import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroImage from '../assets/images/hero/image.jpg';

// Hook para contador animado
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

export default function Hero() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [100, 600], [0, 150]);
  const opacity = useTransform(scrollY, [100, 400], [1, 0]);
  const scale = useTransform(scrollY, [100, 400], [1, 0.95]);

  const { count: count40, setIsVisible: setVisible40 } = useCountAnimation(40, 2);
  const { count: count100, setIsVisible: setVisible100 } = useCountAnimation(100, 2.3);

  useEffect(() => {
    if (isInView) {
      setVisible40(true);
      setVisible100(true);
    }
  }, [isInView, setVisible40, setVisible100]);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="inicio"
      className="min-h-[500px] md:min-h-[580px] lg:min-h-[650px] xl:min-h-[750px] 2xl:min-h-screen bg-gradient-to-br from-white via-brand-mustard/10 to-brand-soft-orange/10 pt-20 md:pt-20 lg:pt-24 flex items-center overflow-hidden"
      ref={sectionRef}
    >
      <motion.div
        className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-6"
        style={{ opacity, scale }}
      >
        {/* Layout para móvil: vertical / Layout para desktop: 2 columnas independientes */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-8 items-center lg:items-center">

          {/* ==================== COLUMNA IZQUIERDA ==================== */}
          <div className="w-full flex flex-col justify-center space-y-3 sm:space-y-4 order-1 lg:order-1">

            {/* TÍTULO */}
            <motion.h1
              className="w-full text-center lg:text-left text-3xl sm:text-4xl font-bold text-gray-900 leading-tight order-1"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Haga realidad su visión digital
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-snug text-center lg:text-left w-full order-2"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Líderes en desarrollo de software para la transformación digital.
            </motion.p>

            {/* BOTONES */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full order-4 lg:order-3"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-white text-brand-dark-green border-2 border-brand-dark-green px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold hover:bg-brand-dark-green hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  className="absolute inset-0 bg-brand-dark-green"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Solicita tu consulta gratuita</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="border-2 border-brand-dark-green text-brand-dark-green px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold hover:border-brand-mustard hover:text-brand-mustard transition-all duration-200 relative overflow-hidden group"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-brand-mustard/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Ver nuestros casos de éxito</span>
              </motion.button>
            </motion.div>

            {/* ESTADÍSTICAS */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-3 lg:gap-4 w-full order-5 lg:order-4"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              ref={containerRef}
            >
              <motion.div
                className="text-center lg:text-left"
                variants={statVariants}
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-brand-dark-green mb-0.5"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {count40}%
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Reducción de costos</div>
              </motion.div>

              <motion.div
                className="text-center lg:text-left"
                variants={statVariants}
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-brand-dark-green mb-0.5"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  {count100}%
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Integración completa</div>
              </motion.div>

              <motion.div
                className="text-center lg:text-left"
                variants={statVariants}
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-brand-dark-green relative mb-0.5"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  24/7
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Soporte continuo</div>
              </motion.div>
            </motion.div>

          </div>
          {/* ==================== FIN COLUMNA IZQUIERDA ==================== */}

          {/* ==================== COLUMNA DERECHA (IMÁGENES) ==================== */}
          <motion.div
            className="relative w-full order-3 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ y }}
          >
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {/* Imagen Grande - Ocupa 2 columnas - MÁS ALTA */}
              <motion.div
                className="col-span-2 h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 2xl:h-96 overflow-hidden rounded-lg shadow-lg relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={heroImage}
                  alt="Sea Software Factory - Principal"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </motion.div>

              {/* Imágenes Medianas - 2 columnas - MÁS GRANDES */}
              <motion.div
                className="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-64 overflow-hidden rounded-lg shadow-lg relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Equipo de desarrollo"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </motion.div>

              <motion.div
                className="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-64 overflow-hidden rounded-lg shadow-lg relative group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Desarrollo web"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </motion.div>
            </div>

            {/* Elementos decorativos flotantes */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-brand-mustard/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-soft-orange/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* ==================== FIN COLUMNA DERECHA ==================== */}

        </div>
      </motion.div>
    </section>
  );
}
