import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const CaseStudy = ({
    title,
    role,
    timeline,
    tools,
    overview,
    problem,
    goal,
    users,
    process,
    design,
    prototype,
    impact,
    reflection,
    bgColor,
    index
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-strong rounded-3xl p-8 md:p-12 bg-gradient-to-br ${bgColor}`}
        >
            {/* Header */}
            <div className="mb-10">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-textPrimary mb-4"
                >
                    {title}
                </motion.h3>
                <div className="flex flex-wrap gap-4 text-textSecondary mb-4">
                    <span className="font-button">
                        <span className="text-primary">Role:</span> {role}
                    </span>
                    <span className="font-button">
                        <span className="text-primary">Timeline:</span> {timeline}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="glass px-4 py-2 rounded-full text-sm font-button text-primary"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            {/* Overview Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-10 grid md:grid-cols-3 gap-6"
            >
                <div className="glass p-6 rounded-xl">
                    <h4 className="text-primary font-heading text-lg mb-3">Problem</h4>
                    <p className="text-textSecondary">{problem}</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <h4 className="text-primary font-heading text-lg mb-3">Goal</h4>
                    <p className="text-textSecondary">{goal}</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <h4 className="text-primary font-heading text-lg mb-3">Users</h4>
                    <p className="text-textSecondary">{users}</p>
                </div>
            </motion.div>

            {/* Project Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-10"
            >
                <h4 className="text-2xl font-heading text-textPrimary mb-4">Project Overview</h4>
                <p className="text-textSecondary leading-relaxed text-lg">{overview}</p>
            </motion.div>

            {/* UX Process */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-10"
            >
                <h4 className="text-2xl font-heading text-textPrimary mb-4">UX Process</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {process.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-start gap-3"
                        >
                            <HiCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                            <p className="text-textSecondary">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* UI Design */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mb-10"
            >
                <h4 className="text-2xl font-heading text-textPrimary mb-4">UI Design</h4>
                <div className="space-y-3">
                    <div className="glass p-4 rounded-lg">
                        <span className="text-primary font-button">Theme: </span>
                        <span className="text-textSecondary">{design.theme}</span>
                    </div>
                    <div className="glass p-4 rounded-lg">
                        <span className="text-primary font-button">Typography: </span>
                        <span className="text-textSecondary">{design.typography}</span>
                    </div>
                    <div className="glass p-4 rounded-lg">
                        <span className="text-primary font-button">Interactions: </span>
                        <span className="text-textSecondary">{design.interactions}</span>
                    </div>
                </div>
            </motion.div>

            {/* Prototype Mockups */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mb-10"
            >
                <h4 className="text-2xl font-heading text-textPrimary mb-4">Prototype & Mockups</h4>
                <div className="glass-strong p-8 rounded-2xl min-h-[300px] flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary opacity-30 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-6xl">📱</span>
                        </div>
                        <div className="space-y-2">
                            {prototype.map((item, idx) => (
                                <p key={idx} className="text-textSecondary">• {item}</p>
                            ))}
                        </div>
                        <p className="text-sm text-textSecondary italic mt-4">
                            [Mockup showcase area - user can add images/videos here]
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Impact & Metrics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mb-10"
            >
                <h4 className="text-2xl font-heading text-textPrimary mb-4">Impact & Metrics</h4>
                <div className="grid md:grid-cols-3 gap-4">
                    {impact.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-strong p-6 rounded-xl text-center"
                        >
                            <HiCheckCircle className="text-4xl text-primary mx-auto mb-3" />
                            <p className="text-textPrimary font-button">{metric}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Reflection */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="glass p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent"
            >
                <h4 className="text-xl font-heading text-primary mb-3">Reflection</h4>
                <blockquote className="text-lg text-textSecondary italic">
                    {reflection}
                </blockquote>
            </motion.div>
        </motion.div>
    )
}

export default CaseStudy
