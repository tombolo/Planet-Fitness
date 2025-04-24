'use client';

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaPlay, FaPause, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
    const [activeVideo, setActiveVideo] = useState(0);
    const [isHovering, setIsHovering] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const videos = [
        {
            id: 1,
            title: "CrossFit Intensity",
            description: "Watch our high-energy CrossFit class in action",
            videoUrl: "/vudala.mp4",
            thumbnail: "/crossfit-class.jpg",
            duration: "2:45",
            category: "High Intensity"
        },
        {
            id: 2,
            title: "Morning Yoga Flow",
            description: "Relaxing vinyasa flow to start your day right",
            videoUrl: "/vudeo.mp4",
            thumbnail: "/yoga-class.jpeg",
            duration: "1:16",
            category: "Mind & Body"
        },
        {
            id: 3,
            title: "HIIT Burn",
            description: "30-minute fat burning HIIT session",
            videoUrl: "/hiit-video.mp4",
            thumbnail: "/hiit-class.jpg",
            duration: "3:15",
            category: "Cardio"
        },
        {
            id: 4,
            title: "Strength Training",
            description: "Powerlifting techniques with our coaches",
            videoUrl: "/strength-video.mp4",
            thumbnail: "/strength-training.jpeg",
            duration: "5:30",
            category: "Strength"
        },
        {
            id: 5,
            title: "Boxing Fundamentals",
            description: "Learn proper boxing form and technique",
            videoUrl: "/boxing-video.mp4",
            thumbnail: "/boxing-class.jpg",
            duration: "3:45",
            category: "Combat"
        },
        {
            id: 6,
            title: "Pilates Core",
            description: "Deep core engagement exercises",
            videoUrl: "/pilates-class.mp4",
            thumbnail: "/pilates-class.jpg",
            duration: "4:10",
            category: "Flexibility"
        }
    ];

    const handleVideoChange = (index: number) => {
        setActiveVideo(index);
        setIsPlaying(false);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-20 px-6 bg-gray-50" id="gallery">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        OUR <span className="text-amber-500">GALLERY</span>
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience our classes through these action-packed videos
                    </p>
                </motion.div>

                {/* Main Video Player */}
                <motion.div
                    className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="relative aspect-video w-full">
                        <video
                            ref={videoRef}
                            src={videos[activeVideo].videoUrl}
                            poster={videos[activeVideo].thumbnail}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            onClick={togglePlay}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`bg-amber-500 text-white rounded-full p-5 shadow-xl ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                                onClick={togglePlay}
                            >
                                {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
                            </motion.button>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <motion.div
                                className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {videos[activeVideo].category}
                            </motion.div>
                        </div>
                        <div className="absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {videos[activeVideo].duration}
                        </div>
                    </div>
                    <div className="bg-white p-6">
                        <motion.h3
                            className="text-2xl font-bold text-gray-800 mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {videos[activeVideo].title}
                        </motion.h3>
                        <p className="text-gray-600">{videos[activeVideo].description}</p>
                    </div>
                </motion.div>

                {/* Video Thumbnail Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                            onHoverStart={() => setIsHovering(index)}
                            onHoverEnd={() => setIsHovering(null)}
                            onClick={() => handleVideoChange(index)}
                            className={`relative aspect-video cursor-pointer rounded-xl overflow-hidden transition-all ${activeVideo === index ? 'ring-4 ring-amber-500' : 'hover:ring-2 hover:ring-amber-400'}`}
                        >
                            <video
                                src={video.videoUrl}
                                poster={video.thumbnail}
                                className="w-full h-full object-cover"
                                muted
                                loop
                                playsInline
                            />
                            <div className={`absolute inset-0 transition-all ${activeVideo === index ? 'bg-black/30' : 'bg-black/20 hover:bg-black/30'}`}></div>
                            {isHovering === index && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="bg-amber-500 text-white rounded-full p-2">
                                        <FaPlay className="text-xs" />
                                    </div>
                                </motion.div>
                            )}
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {video.duration}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#f59e0b' }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-900 text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2"
                    >
                        View More Videos <FaArrowRight className="text-sm" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;