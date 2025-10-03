import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroImage from '../assets/images/hero/image.jpg';
import heroImage2 from '../assets/images/hero/imgenlista.webp';
import heroImage3 from '../assets/images/hero/imagen3lista.jpg';

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
  const y = useTransform(scrollY, [250, 750], [0, 150]);
  const opacity = useTransform(scrollY, [250, 550], [1, 0]);
  const scale = useTransform(scrollY, [250, 550], [1, 0.95]);

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
      className="min-h-[500px] md:min-h-[580px] lg:min-h-[650px] xl:min-h-[750px] 2xl:min-h-screen bg-gradient-to-br from-brand-carbon-black via-brand-anthracite to-brand-carbon-black pt-20 md:pt-20 lg:pt-24 flex items-center overflow-hidden"
      ref={sectionRef}
    >
      <motion.div
        className="max-w-full mx-auto lg:mx-0 lg:-ml-16 px-0 py-6 sm:py-8 md:py-10 lg:py-12"
        style={{ opacity, scale }}
      >
        {/* Layout para móvil: vertical / Layout para desktop: 2 columnas independientes */}
        <div className="flex flex-col lg:grid lg:grid-cols-[48%_58%] gap-6 sm:gap-8 md:gap-10 lg:gap-2 items-center lg:items-center" style={{ transform: 'scale(0.9)', transformOrigin: 'center' }}>

          {/* ==================== COLUMNA IZQUIERDA ==================== */}
          <div className="w-full flex flex-col justify-center items-center space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-1 px-3 sm:px-4 lg:pl-4 lg:pr-0">

            {/* TÍTULO */}
            <motion.h1
              className="w-full text-center text-4xl sm:text-5xl md:text-6xl font-bold text-brand-green-medium leading-tight order-1"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Haga realidad su visión digital
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-brand-gray-light leading-relaxed text-center w-full order-2"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Líderes en desarrollo de software para la transformación digital.
            </motion.p>

            {/* BOTONES */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full order-4 lg:order-3 justify-center"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-brand-white text-brand-carbon-black border-2 border-brand-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold hover:bg-brand-green-medium hover:text-brand-white hover:border-brand-green-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  className="absolute inset-0 bg-brand-green-medium"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Solicita tu consulta gratuita</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="border-2 border-brand-gray-light text-brand-gray-light px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold hover:border-brand-white hover:text-brand-white transition-all duration-200 relative overflow-hidden group"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-brand-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Ver nuestros casos de éxito</span>
              </motion.button>
            </motion.div>

            {/* ESTADÍSTICAS */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full order-5 lg:order-4 max-w-2xl mx-auto"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              ref={containerRef}
            >
              <motion.div
                className="text-center"
                variants={statVariants}
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-brand-green-medium mb-0.5"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {count40}%
                </motion.div>
                <div className="text-xs sm:text-sm text-brand-gray-medium">Reducción de costos</div>
              </motion.div>

              <motion.div
                className="text-center"
                variants={statVariants}
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-brand-green-medium mb-0.5"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  {count100}%
                </motion.div>
                <div className="text-xs sm:text-sm text-brand-gray-medium">Integración completa</div>
              </motion.div>

              <motion.div
                className="text-center"
                variants={statVariants}
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-brand-green-medium relative mb-0.5"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  24/7
                </motion.div>
                <div className="text-xs sm:text-sm text-brand-gray-medium">Soporte continuo</div>
              </motion.div>
            </motion.div>

          </div>
          {/* ==================== FIN COLUMNA IZQUIERDA ==================== */}

          {/* ==================== COLUMNA DERECHA (IMÁGENES) ==================== */}
          <motion.div
            className="relative w-full order-3 lg:order-2 lg:ml-0 lg:pr-12"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ y }}
          >
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {/* Imagen Principal - Columna izquierda completa */}
              <motion.div
                className="col-span-1 row-span-2 overflow-hidden rounded-lg shadow-xl relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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

              {/* Segunda imagen - Superior derecha */}
              <motion.div
                className="col-span-2 h-80 sm:h-96 md:h-[380px] lg:h-96 xl:h-[380px] 2xl:h-[440px] overflow-hidden rounded-lg shadow-xl relative group"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={heroImage2}
                  alt="Desarrollo de software"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </motion.div>

              {/* Tercera imagen - Medio derecha */}
              <motion.div
                className="col-span-1 h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-[310px] overflow-hidden rounded-lg shadow-xl relative group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={heroImage3}
                  alt="Equipo de trabajo"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </motion.div>

              {/* Cuarta imagen - Inferior derecha */}
              <motion.div
                className="col-span-1 h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-[310px] overflow-hidden rounded-lg shadow-xl relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Innovación tecnológica"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </motion.div>
            </div>

            {/* Elementos decorativos flotantes */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-brand-green-medium/30 rounded-full blur-xl"
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
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-green-medium/20 rounded-full blur-xl"
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
