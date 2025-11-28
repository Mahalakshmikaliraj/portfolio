import { motion } from 'framer-motion'
import { HiPencil, HiLightBulb, HiSearch, HiCog, HiPhotograph, HiLightningBolt, HiColorSwatch } from 'react-icons/hi'

const About = () => {
    const strengths = [
        { icon: <HiPencil />, title: 'User Interface Design' },
        { icon: <HiLightBulb />, title: 'User Experience Strategy' },
        { icon: <HiSearch />, title: 'Research & User Journey Mapping' },
        { icon: <HiCog />, title: 'Wireframing & Prototyping' },
        { icon: <HiPhotograph />, title: 'Visual Identity & Branding' },
        { icon: <HiLightningBolt />, title: 'Interaction & Motion Design' },
    ]

    const tools = [
        {
            name: 'Figma',
            logo: (
                <svg viewBox="0 0 38 57" className="w-12 h-12">
                    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
                    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
                    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
                </svg>
            ),
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Adobe XD',
            logo: (
                <svg viewBox="0 0 240 234" className="w-12 h-12">
                    <path fill="#FF61F6" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
                    <path fill="#FFF" d="M145.5 126.8l33.8 58.5c.5.8.3 1.8-.4 2.3-.5.3-1 .4-1.5.4H158c-3.3 0-4.8-.7-6.3-3.5-6.5-11-13-23-19.8-35h-.3c-5.8 11-12 23-18.3 35-1.3 2.5-2.5 3.5-5.3 3.5H90.3c-.7 0-1.5-.3-2-.7-.7-.7-.8-1.7-.3-2.5l33.3-56.8-31.3-55.3c-.7-.8-.3-2 .7-2.5.3-.2.6-.3 1-.3h19.7c2.8 0 4 1 5.3 3.3 6.3 12 12.8 24.2 18.8 36h.3c5.8-11.7 12-23.7 18-36 1.2-2.3 2.5-3.3 5-3.3H178c.8 0 1.3.3 1.8.8.5.7.5 1.5 0 2.2l-34.3 55.2zm-85.8-57.3c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z" />
                </svg>
            ),
            color: 'from-pink-500 to-purple-600'
        },
        {
            name: 'Illustrator',
            logo: (
                <svg viewBox="0 0 240 234" className="w-12 h-12">
                    <path fill="#FF9A00" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
                    <path fill="#FFF" d="M116.5 140.8H91.3c-.5 0-1 .3-1.2.8l-10.7 34.7c-.2.5-.5.7-1 .7H62.2c-.7 0-1-.5-.8-1.2L87 61.3c.2-1 .5-1.8.7-3 .5-2.5.8-5 .8-7.7 0-.5.3-.7.7-.7h23.7c.5 0 .8.2.8.5l29.2 96.3c.2.7 0 1-.5 1h-17.5c-.5 0-.8-.2-1-.5l-11-35.3c-.2-.5-.5-.7-1-.7h.4zm-23-17h20.8c-.5-1.8-1-3.8-1.7-6-.7-2.2-1.3-4.5-2-7-.7-2.5-1.3-5-2-7.7-.7-2.7-1.3-5.3-1.8-8-.5-2.7-1-5.2-1.5-7.7h-.2c-.3 2.5-.8 5-1.3 7.7s-1 5.3-1.7 8c-.7 2.7-1.3 5.2-2 7.7-.7 2.5-1.3 4.8-2 7-.5 2.2-1.2 4.2-1.7 6h.1v.3l-2.8-.3zm90.2 19.3c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-3-2.5-5.5-5.5-5.5z" />
                </svg>
            ),
            color: 'from-orange-500 to-yellow-500'
        },
        {
            name: 'Photoshop',
            logo: (
                <svg viewBox="0 0 240 234" className="w-12 h-12">
                    <path fill="#31A8FF" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
                    <path fill="#FFF" d="M54 164.1V61.2c0-.7.3-1 1-1 1.8 0 3.7-.1 5.7-.2 2-.1 4.1-.1 6.3-.2 2.2-.1 4.4-.1 6.7-.2 2.3 0 4.5-.1 6.6-.1 7.4 0 13.8 1.1 19.2 3.2 5.4 2.2 9.9 5.1 13.4 9 3.5 3.8 6.1 8.4 7.8 13.6 1.7 5.2 2.6 10.8 2.6 16.7 0 6.2-.9 12.2-2.6 17.6-1.7 5.5-4.4 10.2-8.1 14.2-3.7 4-8.3 7.2-13.8 9.5-5.5 2.3-12.2 3.5-19.9 3.5-2.3 0-4.3 0-5.9-.1-1.6-.1-3.3-.2-5-.4V164.1zm16.2-47.4c1.4.2 3 .3 4.6.3 3.3 0 6.3-.5 9.1-1.6 2.8-1.1 5.2-2.6 7.3-4.7 2.1-2 3.7-4.5 4.9-7.5 1.2-3 1.8-6.4 1.8-10.1 0-3.5-.5-6.7-1.6-9.7-1.1-3-2.7-5.6-4.9-7.8-2.2-2.2-4.9-3.9-8.1-5.1-3.2-1.2-6.9-1.8-11-1.8-1.6 0-3.1 0-4.4.1-1.3.1-2.5.2-3.6.3l-.1 48.6zm72.7 51.1c-6.9 0-12.3-2.1-16.2-6.3-3.9-4.2-5.8-10.4-5.8-18.5s2.1-14.4 6.2-18.7c4.1-4.3 9.6-6.5 16.6-6.5 6.3 0 11.3 2 15 6.1s5.5 9.9 5.5 17.6c0 8.3-2 14.6-6 19.1-4 4.4-9.4 6.7-16.3 6.7v.5zm.5-11.2c3.3 0 5.8-1.3 7.5-3.9 1.7-2.6 2.6-6.8 2.6-12.7 0-5.5-.8-9.5-2.4-12-1.6-2.5-4.1-3.7-7.4-3.7-3.5 0-6.1 1.3-7.9 3.8s-2.6 6.7-2.6 12.5c0 5.6.8 9.7 2.4 12.3 1.7 2.6 4.2 3.9 7.6 3.9l.2-.2z" />
                </svg>
            ),
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'After Effects',
            logo: (
                <svg viewBox="0 0 240 234" className="w-12 h-12">
                    <path fill="#9999FF" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
                    <path fill="#FFF" d="M90.1 65.1c.2-.7.7-1 1.3-1h16c.6 0 1 .3 1.1.8l27.3 87.5c.2.6 0 1-.6 1h-14.3c-.7 0-1.1-.3-1.3-.9l-6-19.6H82.4l-5.9 19.6c-.2.5-.6.8-1.2.8H61.4c-.6 0-.8-.3-.6-.9L90 65.1h.1zm6.4 26.3c-1.1-3.6-2.2-7.9-3.4-12.9-.5-2.5-1.1-5.2-1.6-8.1h-.2c-.4 2.8-.9 5.5-1.4 8.1-1.1 4.8-2.3 9.2-3.5 12.9l-5.8 19.3h21.5l-5.6-19.3zm69.3-24.7c-6.5 0-11.9 2.1-16.1 6.2-4.2 4.1-6.3 9.9-6.3 17.2 0 7.7 1.9 13.7 5.8 18.1s9.3 6.6 16.3 6.6c3.8 0 7.3-.3 10.6-.8.9-.1 1.3-.6 1.3-1.3v-10.2c0-.6-.4-.9-1.1-.9h-11c-.7 0-1-.3-1-1v-9.4c0-.7.3-1 1-1h23.7c.7 0 1 .3 1 1v32.9c0 1.1-.3 2-1 2.7-4.3 1.9-9.8 2.8-16.5 2.8-6.2 0-11.5-1-15.8-2.9-4.3-1.9-7.8-4.6-10.5-8-2.7-3.4-4.7-7.4-6-11.9-1.3-4.5-2-9.3-2-14.3 0-5.5.9-10.6 2.6-15.5 1.7-4.8 4.2-9.1 7.5-12.7 3.3-3.6 7.4-6.4 12.2-8.4 4.8-2 10.4-3 16.6-3 6.5 0 11.6.7 15.2 2 .9.3 1.2.8 1.2 1.5v10.7c0 .8-.5 1.1-1.4.9-3.3-.9-7.6-1.4-13-1.4z" />
                </svg>
            ),
            color: 'from-purple-600 to-indigo-600'
        },
        {
            name: 'Miro',
            logo: (
                <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <path fill="#FFD02F" d="M17.392 0H13.9L17 10.744V0zm-4.54 0h-3.49L12.5 14.098V0zm-4.583 0H4.778L11.5 18.166V0zm13.293 0h-3.442L19 6.256V0zM4.61 0H.727L10.5 23.734V0z" />
                </svg>
            ),
            color: 'from-yellow-400 to-orange-400'
        },
        {
            name: 'Blender',
            logo: (
                <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#EA7600">
                    <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.866-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-2.16-2.196 8.132 8.132 0 0 0-2.969-1.259 8.692 8.692 0 0 0-3.217.002 8.157 8.157 0 0 0-2.97 1.27 7.791 7.791 0 0 0-2.157 2.2 7.116 7.116 0 0 0-1.01 2.776 6.994 6.994 0 0 0-.08 1.49v.183z" />
                </svg>
            ),
            color: 'from-orange-500 to-orange-700'
        },
        {
            name: 'CorelDRAW',
            logo: (
                <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <circle cx="12" cy="12" r="11" fill="#00A0DC" />
                    <path fill="#FFF" d="M12 4C7.6 4 4 7.6 4 12s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                </svg>
            ),
            color: 'from-cyan-500 to-blue-600'
        },
    ]

    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary opacity-5 rounded-full blur-3xl" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-14 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4 sm:mb-5 md:mb-6">
                        Design with Empathy, Build with Purpose
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed px-4">
                        I'm a creative and tech-savvy UI/UX Designer passionate about crafting designs
                        that connect and communicate. I blend user research, aesthetic design, and
                        interaction thinking to deliver meaningful experiences.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left - Philosophy & Why */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Design Philosophy */}
                        <div className="glass-strong p-8 rounded-2xl">
                            <h3 className="text-2xl font-heading text-primary mb-4">Design Philosophy</h3>
                            <blockquote className="text-lg text-textSecondary italic border-l-4 border-primary pl-4">
                                "Good design is invisible — it guides users intuitively without making them think."
                            </blockquote>
                        </div>

                        {/* Why I Design */}
                        <div className="glass-strong p-8 rounded-2xl">
                            <h3 className="text-2xl font-heading text-primary mb-4">Why I Design</h3>
                            <p className="text-textSecondary leading-relaxed">
                                Design isn't just about visuals — it's about empathy. I design because I love
                                solving problems that make life easier, smarter, and more delightful. Every
                                pixel I place aims to make technology feel human.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-full min-h-[400px] glass-strong rounded-2xl p-8 flex items-center justify-center"
                    >
                        <motion.div
                            className="text-center space-y-4"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary via-secondary to-primary opacity-20 rounded-3xl flex items-center justify-center">
                                <HiColorSwatch className="text-9xl text-primary" />
                            </div>
                            <p className="text-textSecondary font-button">Visual Storytelling</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Strengths Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12 sm:mb-14 md:mb-16"
                >
                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-heading text-textPrimary mb-6 sm:mb-7 md:mb-8 text-center">
                        Core Strengths
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={strength.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass p-4 sm:p-5 md:p-6 rounded-xl text-center space-y-2 sm:space-y-3 cursor-pointer hover:glass-strong transition-all duration-300"
                            >
                                <div className="text-3xl sm:text-4xl text-primary mx-auto w-fit">{strength.icon}</div>
                                <p className="text-textPrimary font-button text-xs sm:text-sm">{strength.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-heading text-textPrimary mb-6 sm:mb-7 md:mb-8">Tools & Technologies</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 cursor-pointer group relative overflow-hidden"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Logo */}
                                <motion.div
                                    className="flex justify-center mb-4 relative z-10"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {tool.logo}
                                </motion.div>

                                {/* Tool Name */}
                                <p className="text-textPrimary font-button text-xs sm:text-sm relative z-10">{tool.name}</p>

                                {/* Glow Effect on Hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
