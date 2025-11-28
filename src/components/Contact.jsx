import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaBehance, FaDribbble, FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: '',
            })
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = validateForm()
        if (Object.keys(newErrors).length === 0) {
            // Form is valid - handle submission
            console.log('Form submitted:', formData)
            alert('Thank you! Your message has been sent. (This is a demo - integrate with your backend)')
            setFormData({ name: '', email: '', message: '' })
        } else {
            setErrors(newErrors)
        }
    }

    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com', color: '#0077B5' },
        { name: 'Behance', icon: <FaBehance />, url: 'https://behance.net', color: '#1769FF' },
        { name: 'Dribbble', icon: <FaDribbble />, url: 'https://dribbble.com', color: '#EA4C89' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com', color: '#FFFFFF' },
        { name: 'Email', icon: <FaEnvelope />, url: 'mailto:hello@example.com', color: '#4A90E2' },
    ]

    return (
        <section id="contact" className="py-20 px-6 md:px-16 lg:px-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-6">
                        Let's Build Something Beautiful Together 💫
                    </h2>
                    <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                        Have a project, collaboration, or just want to say hi? I'm open to freelance and
                        full-time design opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-textPrimary font-button mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full glass-strong px-6 py-4 rounded-xl text-textPrimary bg-transparent border ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:outline-none transition-colors duration-300`}
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-textPrimary font-button mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full glass-strong px-6 py-4 rounded-xl text-textPrimary bg-transparent border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:outline-none transition-colors duration-300`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-textPrimary font-button mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className={`w-full glass-strong px-6 py-4 rounded-xl text-textPrimary bg-transparent border ${errors.message ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:outline-none transition-colors duration-300 resize-none`}
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary hover:bg-opacity-90 px-8 py-4 rounded-xl font-button text-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Contact Info */}
                        <div className="glass-strong p-8 rounded-2xl space-y-6">
                            <h3 className="text-2xl font-heading text-textPrimary mb-6">Get in Touch</h3>

                            <div className="flex items-start gap-4">
                                <HiMail className="text-2xl text-primary mt-1" />
                                <div>
                                    <p className="text-textSecondary text-sm">Email</p>
                                    <a href="mailto:hello@example.com" className="text-textPrimary hover:text-primary transition-colors">
                                        hello@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <HiPhone className="text-2xl text-primary mt-1" />
                                <div>
                                    <p className="text-textSecondary text-sm">Phone</p>
                                    <a href="tel:+1234567890" className="text-textPrimary hover:text-primary transition-colors">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <HiLocationMarker className="text-2xl text-primary mt-1" />
                                <div>
                                    <p className="text-textSecondary text-sm">Location</p>
                                    <p className="text-textPrimary">Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-strong p-8 rounded-2xl">
                            <h3 className="text-2xl font-heading text-textPrimary mb-6">Connect With Me</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="glass p-4 rounded-xl text-3xl hover:text-primary transition-all duration-300"
                                        style={{ color: social.color }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="glass-strong p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent">
                            <p className="text-textPrimary">
                                <span className="text-primary font-button text-lg">✨ Available for new projects!</span>
                                <br />
                                <span className="text-textSecondary text-sm">
                                    I typically respond within 24 hours
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
