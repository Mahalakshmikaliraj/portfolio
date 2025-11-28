import { motion } from 'framer-motion'

const StyleGuide = () => {
    const colorPalette = [
        { name: 'Deep Charcoal', hex: '#1A1A1A', usage: 'Primary dark backgrounds' },
        { name: 'Electric Blue', hex: '#4A90E2', usage: 'Primary accent & CTAs' },
        { name: 'Warm Cream', hex: '#F5F5F5', usage: 'Light accents & text' },
        { name: 'Dark Background', hex: '#0D0D0D', usage: 'Main background' },
    ]

    const typographySamples = [
        { type: 'Heading', font: 'Montserrat', weight: '700', sample: 'The Quick Brown Fox' },
        { type: 'Body', font: 'System UI', weight: '400', sample: 'Lorem ipsum dolor sit amet consectetur' },
        { type: 'Button', font: 'Poppins', weight: '600', sample: 'Click Me' },
    ]

    const buttonStyles = ['Primary', 'Secondary', 'Outline']

    return (
        <section id="styleguide" className="py-20 px-6 md:px-16 lg:px-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />

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
                        Design Style Guide
                    </h2>
                    <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                        A cohesive design language: Modern, Tech-inspired, Minimalist, and Human-centered.
                    </p>
                </motion.div>

                {/* Color Palette */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-heading text-textPrimary mb-8">Color Palette</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {colorPalette.map((color, index) => (
                            <motion.div
                                key={color.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="glass-strong rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <div
                                    className="h-32 w-full"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="p-6">
                                    <h4 className="text-textPrimary font-heading text-lg mb-2">{color.name}</h4>
                                    <p className="text-primary font-button text-xl mb-2">{color.hex}</p>
                                    <p className="text-textSecondary text-sm">{color.usage}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-heading text-textPrimary mb-8">Typography</h3>
                    <div className="space-y-6">
                        {typographySamples.map((typo, index) => (
                            <motion.div
                                key={typo.type}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong p-8 rounded-2xl"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-primary font-button text-lg">{typo.type}</h4>
                                        <p className="text-textSecondary text-sm">
                                            {typo.font} – {typo.weight}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`text-textPrimary ${typo.type === 'Heading'
                                            ? 'text-4xl font-heading font-bold'
                                            : typo.type === 'Button'
                                                ? 'text-lg font-button font-semibold'
                                                : 'text-base font-body'
                                        }`}
                                >
                                    {typo.sample}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Button Styles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-heading text-textPrimary mb-8">Button Styles</h3>
                    <div className="glass-strong p-12 rounded-2xl flex flex-wrap gap-6 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary hover:bg-opacity-90 px-8 py-4 rounded-xl font-button text-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Primary Button
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass-strong px-8 py-4 rounded-xl font-button text-textPrimary glow-hover transition-all duration-300"
                        >
                            Secondary Button
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="border-2 border-primary hover:bg-primary hover:text-dark px-8 py-4 rounded-xl font-button text-textPrimary transition-all duration-300"
                        >
                            Outline Button
                        </motion.button>
                    </div>
                    <p className="text-textSecondary text-center mt-6">
                        Border Radius: 12px • Hover Effect: subtle-shadow + smooth scale (1.03)
                    </p>
                </motion.div>

                {/* Layout & Spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className="text-3xl font-heading text-textPrimary mb-8">Layout & Spacing</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-strong p-8 rounded-2xl">
                            <h4 className="text-primary font-heading text-xl mb-4">Grid System</h4>
                            <ul className="text-textSecondary space-y-2">
                                <li>• Desktop: 12-column grid</li>
                                <li>• Tablet: 8-column grid</li>
                                <li>• Mobile: Single-column</li>
                            </ul>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <h4 className="text-primary font-heading text-xl mb-4">Spacing</h4>
                            <ul className="text-textSecondary space-y-2">
                                <li>• Section padding: 80px (desktop)</li>
                                <li>• Container padding: 120px (desktop)</li>
                                <li>• Card gap: 24px</li>
                                <li>• Grid gap: 32px</li>
                            </ul>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <h4 className="text-primary font-heading text-xl mb-4">Icon Style</h4>
                            <p className="text-textSecondary">
                                Minimal, line-based icons with slight curvature for a modern, clean aesthetic.
                            </p>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <h4 className="text-primary font-heading text-xl mb-4">Effects</h4>
                            <ul className="text-textSecondary space-y-2">
                                <li>• Button: scale(1.03) + shadow</li>
                                <li>• Card: translateY(-8px) + shadow</li>
                                <li>• Glassmorphism with backdrop blur</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default StyleGuide
