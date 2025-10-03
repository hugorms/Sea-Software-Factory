import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@seasoftwarefactory.com',
      subtitle: 'Respuesta en menos de 2 horas',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+58 XXX XXX XXXX',
      subtitle: 'Lunes a Viernes, 9am - 6pm',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Venezuela',
      subtitle: 'Atendemos clientes globalmente',
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      subtitle: 'Soporte de emergencia 24/7',
    },
  ];

  const benefits = [
    'Consulta inicial gratuita',
    'Respuesta garantizada en 24h',
    'Metodologías ágiles probadas',
    'Soporte post-lanzamiento',
  ];

  return (
    <section
      id="contacto"
      className="pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-22 md:pb-10 lg:pt-24 lg:pb-10 xl:pt-28 xl:pb-12 bg-gradient-to-br from-gray-50 via-brand-soft-orange/8 to-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          className="text-center mb-3 sm:mb-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1.5">
            Da el Siguiente Paso Hacia tu Transformación Digital
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-1.5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Conversemos sobre tu proyecto. Te ofrecemos una consulta gratuita
            para analizar tus necesidades y definir la mejor estrategia.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-3 sm:p-4 shadow-xl relative overflow-hidden"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={formVariants}
          >
            {/* Fondo decorativo */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-brand-mustard/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 relative z-10">
              Solicita tu Consulta Gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 rounded-lg text-sm"
                    placeholder="Tu nombre completo"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 rounded-lg text-sm"
                    placeholder="tu@empresa.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              </div>

              <motion.div whileFocus="focus" variants={inputVariants}>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 rounded-lg text-sm"
                  placeholder="Nombre de tu empresa"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div whileFocus="focus" variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Cuéntanos sobre tu proyecto *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 resize-none rounded-lg text-sm"
                  placeholder="Describe tu proyecto, objetivos y qué tipo de solución necesitas..."
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitted}
                className="w-auto mx-auto bg-white text-brand-dark-green border-2 border-brand-dark-green px-6 py-2.5 text-sm font-semibold hover:bg-brand-dark-green hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:transform-none relative overflow-hidden"
                whileHover={{ scale: isSubmitted ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitted ? 1 : 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-brand-dark-green"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={contactInfoVariants}
          >
            <motion.div
              className="bg-white p-3 sm:p-4 shadow-xl relative overflow-hidden"
              whileHover={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Información de Contacto</h3>

              <div className="space-y-3">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-brand-mustard/20 p-2 rounded-full relative"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-5 w-5 text-brand-dark-green relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-brand-mustard rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.value}</p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-4 sm:p-5 text-white relative overflow-hidden"
              style={{ backgroundColor: 'rgba(26, 77, 46, 0.95)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                transition: { duration: 0.3 },
              }}
            >
              {/* Partículas */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-brand-mustard/20 rounded-full blur-xl"
                  style={{ left: `${20 + i * 30}%`, top: `${30 + (i % 2) * 40}%` }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                />
              ))}

              <h3 className="text-lg sm:text-xl font-bold mb-3 relative z-10">¿Por qué elegirnos?</h3>
              <div className="space-y-2 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-400 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
