import { motion } from 'framer-motion'
import { HiDownload, HiBriefcase, HiAcademicCap } from 'react-icons/hi'

const ResumeSection = () => {
    const experience = [
        {
            role: 'UI/UX Designer',
            company: 'Tech Brand',
            period: '2024-2025',
            description: 'Built full product website and brand visuals. Focused on storytelling and responsive UI.',
        },
        {
            role: 'Graphic Designer',
            company: 'Freelance',
            period: '2023-2024',
            description: 'Delivered identity systems and marketing designs for various clients.',
        },
    ]

    const education = [
        {
            degree: 'Bachelor of Design',
            institution: 'Mononmaniyam University',
            period: '2021-2024',
        },
        {
            degree: 'PGDCA (Post Graduate Diploma in Computer Applications)',
            institution: 'Universe Computer',
            period: '2024',
        },
    ]

    return (
        <section id="resume" className="py-20 px-6 md:px-16 lg:px-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />

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
                        Resume
                    </h2>
                    <p className="text-xl text-textSecondary max-w-3xl mx-auto mb-8">
                        My professional journey in design and development
                    </p>

                    {/* Download Button */}
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 bg-primary hover:bg-opacity-90 px-8 py-4 rounded-xl font-button text-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <HiDownload className="text-2xl" />
                        Download Full Resume (PDF)
                    </motion.a>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <HiBriefcase className="text-4xl text-primary" />
                            <h3 className="text-3xl font-heading text-textPrimary">Experience</h3>
                        </div>

                        <div className="space-y-8 relative pl-8 border-l-2 border-primary/30">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[37px] top-2 w-6 h-6 bg-primary rounded-full border-4 border-dark" />

                                    <div className="glass-strong p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                                        <h4 className="text-xl font-heading text-textPrimary mb-1">{exp.role}</h4>
                                        <p className="text-primary font-button mb-2">{exp.company}</p>
                                        <p className="text-textSecondary text-sm mb-3">{exp.period}</p>
                                        <p className="text-textSecondary leading-relaxed">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <HiAcademicCap className="text-4xl text-primary" />
                            <h3 className="text-3xl font-heading text-textPrimary">Education</h3>
                        </div>

                        <div className="space-y-8 relative pl-8 border-l-2 border-primary/30">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[37px] top-2 w-6 h-6 bg-primary rounded-full border-4 border-dark" />

                                    <div className="glass-strong p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                                        <h4 className="text-xl font-heading text-textPrimary mb-1">{edu.degree}</h4>
                                        <p className="text-primary font-button mb-2">{edu.institution}</p>
                                        <p className="text-textSecondary text-sm">{edu.period}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 glass-strong p-8 rounded-2xl text-center"
                >
                    <p className="text-textSecondary text-lg">
                        <span className="text-primary font-button">Looking for a designer?</span>{' '}
                        I'm open to freelance and full-time opportunities. Let's create something amazing together!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ResumeSection
