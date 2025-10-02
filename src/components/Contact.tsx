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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
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
      className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-white via-brand-mustard/5 to-brand-soft-orange/5 overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 sm:mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Da el Siguiente Paso Hacia tu Transformación Digital
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Conversemos sobre tu proyecto. Te ofrecemos una consulta gratuita
            para analizar tus necesidades y definir la mejor estrategia.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden"
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

            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
              Solicita tu Consulta Gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 rounded-lg"
                    placeholder="Tu nombre completo"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 rounded-lg"
                    placeholder="tu@empresa.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              </div>

              <motion.div whileFocus="focus" variants={inputVariants}>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 rounded-lg"
                  placeholder="Nombre de tu empresa"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div whileFocus="focus" variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition-colors duration-200 resize-none rounded-lg"
                  placeholder="Describe tu proyecto, objetivos y qué tipo de solución necesitas..."
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitted}
                className="w-auto mx-auto bg-white text-brand-dark-green border-2 border-brand-dark-green px-8 py-4 font-semibold hover:bg-brand-dark-green hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:transform-none relative overflow-hidden"
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
            className="space-y-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={contactInfoVariants}
          >
            <motion.div
              className="bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden"
              whileHover={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-brand-mustard/20 p-3 rounded-full relative"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-6 w-6 text-brand-dark-green relative z-10" />
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
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.value}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 text-white relative overflow-hidden"
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

              <h3 className="text-xl font-bold mb-4 relative z-10">¿Por qué elegirnos?</h3>
              <div className="space-y-3 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-400">{benefit}</span>
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
