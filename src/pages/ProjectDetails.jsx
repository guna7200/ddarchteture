import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { portfolioItems } from '../data/portfolioData';

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const projectIndex = portfolioItems.findIndex(item => item.slug === slug);
    const project = portfolioItems[projectIndex];

    // Handle invalid ID
    React.useEffect(() => {
        if (!project) {
            navigate('/portfolio');
        }
    }, [project, navigate]);

    if (!project) return null;

    const nextProjectIndex = (projectIndex + 1) % portfolioItems.length;
    const nextProject = portfolioItems[nextProjectIndex];

    return (
        <PageTransition>
            <PageHeader title={project.title} image={project.image} />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">

                    {/* Introduction Section */}
                    <div className="flex flex-col lg:flex-row gap-16 mb-20 text-gray-900">
                        <div className="lg:w-[60%]">
                            <h3 className="text-xl font-serif text-gray-900 mb-6 uppercase tracking-wider">Introduction</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>

                        <div className="lg:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-royal-gold uppercase tracking-widest text-sm font-bold mb-2">Client</h4>
                                <p className="text-gray-900 font-serif">{project.client}</p>
                            </div>
                            <div>
                                <h4 className="text-royal-gold uppercase tracking-widest text-sm font-bold mb-2">Date</h4>
                                <p className="text-gray-900 font-serif">{project.date}</p>
                            </div>
                            <div>
                                <h4 className="text-royal-gold uppercase tracking-widest text-sm font-bold mb-2">Categories</h4>
                                <p className="text-gray-900 font-serif">{project.categories.join(', ')}</p>
                            </div>
                            <div>
                                <h4 className="text-royal-gold uppercase tracking-widest text-sm font-bold mb-2">Tags</h4>
                                <p className="text-gray-900 font-serif">{project.tags.join(', ')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Project Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full aspect-video overflow-hidden bg-rich-charcoal shadow-2xl mb-20"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover  transition-all duration-1000"
                        />
                    </motion.div>

                    {/* Navigation */}
                    <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        <Link
                            to="/portfolio"
                            className="text-gray-500 hover:text-royal-gold flex items-center gap-2 uppercase tracking-widest text-sm transition-colors"
                        >
                            <ArrowLeft size={16} /> Back to Portfolio
                        </Link>

                        <Link
                            to={`/portfolio/${nextProject.slug}`}
                            className="group text-right"
                        >
                            <span className="text-gray-500 uppercase tracking-widest text-sm mb-1 block group-hover:text-royal-gold transition-colors">Next Project</span>
                            <div className="flex items-center gap-3 justify-end">
                                <h4 className="text-2xl font-serif text-gray-900 group-hover:text-royal-gold transition-colors">{nextProject.title}</h4>
                                <ArrowRight className="text-gray-900 group-hover:text-royal-gold transition-colors" />
                            </div>
                        </Link>
                    </div>

                </div>
            </section>
        </PageTransition>
    );
};

export default ProjectDetails;
