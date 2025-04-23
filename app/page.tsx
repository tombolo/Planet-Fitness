'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaDumbbell, FaHeartbeat, FaRunning, FaCalendarAlt, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { GiMuscleUp } from "react-icons/gi";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* White Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/gym.png"
              alt="Elite Fit Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {['Home', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: '#f59e0b', y: -2 }}
                transition={{ duration: 0.2 }}
                className="font-medium text-gray-700 hover:text-amber-500 transition-colors"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#f59e0b' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium"
            >
              Join Now
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-6 pb-4"
          >
            <div className="flex flex-col gap-4">
              {['Home', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: '#f59e0b', x: 5 }}
                  className="font-medium text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#f59e0b' }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium mt-2"
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section with Image Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gym1.jpg" // Replace with your image path
            alt="Fitness gym"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            TRANSFORM YOUR <span className="text-amber-400">BODY</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join the most elite fitness community and achieve results you never thought possible
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(245, 158, 11, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              GET STARTED TODAY
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              EXPLORE CLASSES
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <FaArrowRight className="rotate-90 text-3xl text-amber-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE US
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            We offer world-class facilities, expert trainers, and a supportive community to help you reach your fitness goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FaDumbbell className="text-4xl mb-4" />, title: "Modern Equipment", desc: "State-of-the-art machines and free weights" },
            { icon: <IoIosFitness className="text-4xl mb-4" />, title: "Expert Trainers", desc: "Certified professionals to guide you" },
            { icon: <FaHeartbeat className="text-4xl mb-4" />, title: "Health Focus", desc: "Nutrition and wellness programs" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 p-8 rounded-xl text-center shadow-md border border-gray-100"
            >
              <motion.div
                className="text-amber-500 mb-6 inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">OUR CLASSES</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From high-intensity to mindful movement, we have something for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CrossFit",
                desc: "High-intensity functional training",
                bg: "bg-[url('/crossfit-class.jpg')]",
                icon: <GiMuscleUp className="text-3xl" />
              },
              {
                title: "Yoga",
                desc: "Improve flexibility and mindfulness",
                bg: "bg-[url('/yoga-class.jpeg')]",
                icon: <FaHeartbeat className="text-3xl" />
              },
              {
                title: "HIIT",
                desc: "Maximum results in minimum time",
                bg: "bg-[url('/hiit-class.jpg')]",
                icon: <FaRunning className="text-3xl" />
              }
            ].map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`${cls.bg} bg-cover bg-center h-96 rounded-xl relative overflow-hidden group shadow-xl`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <motion.div
                    className="flex items-center gap-3 mb-3"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-amber-500">{cls.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{cls.title}</h3>
                  </motion.div>
                  <motion.p
                    className="text-gray-200 mb-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {cls.desc}
                  </motion.p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-amber-400 font-bold flex items-center gap-2 group-hover:text-amber-300 transition-all"
                  >
                    VIEW SCHEDULE <FaCalendarAlt />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">MEMBERSHIP PLANS</h2>
              <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              <p className="text-lg text-gray-300 mb-8">
                Choose the perfect plan for your fitness journey with flexible options for every lifestyle.
              </p>

              <div className="space-y-4">
                {['Basic', 'Premium', 'Elite'].map((plan, index) => (
                  <motion.div
                    key={plan}
                    whileHover={{ x: 10 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                  >
                    <h3 className="text-xl font-bold text-amber-400 mb-2">{plan} Membership</h3>
                    <p className="text-gray-300">${29 + (index * 30)}/month</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 bg-white p-8 rounded-xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">GET YOUR FREE TRIAL</h3>
              <p className="text-gray-600 mb-6">Experience our facilities with a 7-day free trial.</p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#f59e0b' }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold"
                >
                  CLAIM FREE TRIAL
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">SUCCESS STORIES</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our members about their transformation journeys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CrossFit Member",
                quote: "I've lost 25lbs and gained so much confidence! The trainers are amazing.",
                image: "/member1.jpg"
              },
              {
                name: "Michael Chen",
                role: "Elite Member",
                quote: "Best decision I ever made. The community keeps me motivated every day.",
                image: "/member2.jpg"
              },
              {
                name: "Emma Rodriguez",
                role: "Yoga Member",
                quote: "Not just a gym, but a lifestyle change. I'm in the best shape of my life.",
                image: "/member3.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-amber-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            READY TO BEGIN YOUR FITNESS JOURNEY?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-amber-100 mb-10"
          >
            Join now and get your first month free with a personal training session included.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white font-bold py-4 px-12 rounded-full text-lg"
            >
              JOIN TODAY
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-6 text-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
              <FaDumbbell className="text-amber-500" /> ELITE FIT
            </h3>
            <p className="mb-4">
              The premier fitness destination for those committed to excellence.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, color: '#f59e0b' }}
                  className="text-xl"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fa fa-${social}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">CONTACT</h4>
            <address className="not-italic">
              123 Fitness Ave<br />
              New York, NY 10001<br />
              <a href="tel:+15551234567" className="hover:text-amber-500">(555) 123-4567</a><br />
              <a href="mailto:info@elitefit.com" className="hover:text-amber-500">info@elitefit.com</a>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">NEWSLETTER</h4>
            <p className="mb-4">Subscribe to get fitness tips and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
              />
              <motion.button
                whileHover={{ backgroundColor: '#f59e0b' }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-amber-600 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} Elite Fit Gym. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}