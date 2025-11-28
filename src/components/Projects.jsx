import { motion } from 'framer-motion'
import CaseStudy from './CaseStudy'

const Projects = () => {
    const caseStudies = [
        {
            id: 1,
            title: 'Tech Startup Brand & Website Redesign',
            role: 'UI/UX Designer',
            timeline: 'July 2024 – Dec 2024',
            tools: ['Figma', 'Illustrator', 'Photoshop'],
            overview: 'A growing tech brand needed a modern, caffeine-inspired website to enhance its digital presence and improve user navigation.',
            problem: 'Outdated website, poor engagement',
            goal: 'Build a responsive, story-driven interface',
            users: 'Tech professionals and startup founders',
            process: [
                'Conducted user flow analysis for content restructuring',
                'Defined user personas (tech founders, partners, clients)',
                'Created responsive wireframes for mobile and desktop',
                'Designed interactive elements and intuitive navigation'
            ],
            design: {
                theme: 'Dark-themed palette inspired by caffeine energy ⚡',
                typography: 'Montserrat (headings), Ascent Pro (body)',
                interactions: 'Smooth transitions & hover effects for micro-interactions'
            },
            prototype: [
                'Homepage hero animation with gradient overlay',
                'Product showcase cards with hover micro-motions',
                'Scroll-based interaction'
            ],
            impact: [
                'Improved task completion rate by 40%',
                'Reduced bounce rate by 25%',
                'Increased session time by 1.5x'
            ],
            reflection: '"I learned how thoughtful typography and rhythm can make complex tech content accessible and engaging."',
            bgColor: 'from-blue-900/20 to-purple-900/20'
        },
        {
            id: 2,
            title: 'Digital Branding & Visual Identity Suite',
            role: 'Graphic Designer & Brand Developer',
            timeline: 'Jan 2025 – July 2025',
            tools: ['Illustrator', 'Figma', 'CorelDRAW'],
            overview: 'Created a unified brand identity system including flyers, ID cards, billboards, and digital creatives for a modern enterprise.',
            problem: 'Inconsistent brand tone',
            goal: 'Align visual identity with brand mission',
            users: 'Enterprise clients and stakeholders',
            process: [
                'Defined color palettes and typography systems',
                'Designed scalable logo and consistent brand assets',
                'Integrated storytelling through motion design'
            ],
            design: {
                theme: '2D electric illustrations for tech-focused identity',
                typography: 'Cohesive digital and print collateral',
                interactions: 'Animated logo reveal in After Effects'
            },
            prototype: [
                '2D electric illustrations',
                'Cohesive brand collateral set',
                'Animated logo reveal'
            ],
            impact: [
                'Achieved 95% client satisfaction',
                'Established consistent cross-platform identity',
                'Boosted visibility and client trust'
            ],
            reflection: '"Consistency is not repetition — it\'s visual trust."',
            bgColor: 'from-purple-900/20 to-pink-900/20'
        },
        {
            id: 3,
            title: 'Responsive Landing Page Prototype',
            role: 'UI Designer',
            timeline: 'Aug 2024 – Oct 2024',
            tools: ['Figma', 'Miro', 'After Effects'],
            overview: 'Designed an interactive landing page with emphasis on conversion, storytelling, and visual hierarchy.',
            problem: 'Low conversion rates',
            goal: 'Create high-converting landing page design',
            users: 'Product users and potential customers',
            process: [
                'Defined clean visual grid',
                'Focused on CTA clarity and scroll depth',
                'Implemented hero animation synced with user scroll'
            ],
            design: {
                theme: 'Clean, conversion-focused design',
                typography: 'Clear hierarchy with modern fonts',
                interactions: 'Scroll-synced hero animations'
            },
            prototype: [
                'Interactive scroll animations',
                'Clear CTA hierarchy',
                'Visual storytelling flow'
            ],
            impact: [
                '+60% prototype engagement',
                '+35% improved visual scan efficiency',
                'Enhanced user journey clarity'
            ],
            reflection: '"Simplicity in design amplifies clarity in communication."',
            bgColor: 'from-cyan-900/20 to-blue-900/20'
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 md:px-16 lg:px-32 relative overflow-hidden">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-6">
                        Featured Work
                    </h2>
                    <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                        Explore my case studies showcasing user-centered design, strategic thinking,
                        and impactful digital experiences.
                    </p>
                </motion.div>

                {/* Case Studies */}
                <div className="space-y-24">
                    {caseStudies.map((study, index) => (
                        <CaseStudy key={study.id} {...study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
