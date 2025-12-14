import Image from "next/image";

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  image?: string;
  websiteLink?: string;
  codeLink?: string;
  reportLink?: string;
  videoLink?: string;
}

const projects: Project[] = [
  {
    title: "Multi-Agent Reinforcement Learning in Overcooked",
    description:
      "Implemented cooperative agents in the Overcooked-AI environment using multi-agent RL approaches.",
    bullets: [
      "Implemented MAPPO-style multi-agent reinforcement learning with centralized training and decentralized execution",
      "Evaluated policy performance across complex layouts under sparse rewards",
      "Analyzed scalability and convergence challenges in multi-agent collaboration",
      "Integrated Intrinsic Curiosity Module for exploration in sparse reward environments",
    ],
    tags: ["PyTorch", "MAPPO", "Multi-Agent RL", "Python"],
    image: "/timelapse.png",
  },
  {
    title: "Graph Batching Method for Integrated Circuits",
    description:
      "Novel batching strategy for training GNNs on large-scale VLSI circuit graphs while maintaining model accuracy.",
    bullets: [
      "Developed Walking-GCN batching strategy to reduce RAM overhead for training on circuit graphs with hundreds of millions of nodes",
      "Improved upon Cluster-GCN's random sampling method for circuit congestion prediction",
      "Maintained model accuracy while enabling training on hardware-constrained systems",
      "Benchmarked performance against state-of-the-art graph batching methods",
    ],
    tags: ["PyTorch", "GNN", "Graph Neural Networks", "VLSI", "Python"],
    image: "/VLSI_poster.png",
    websiteLink: "https://spencerrazor.github.io/walking-gcn/",
    reportLink: "https://drive.google.com/file/d/1ouMfxmZm9oltgq5J7yZiXt1gXl7XL1-v/view?usp=sharing",
    codeLink: "https://github.com/UCSD-Qualcomm-B07-Group-2/Biased-Batch-Learning-Strategy",
  },
  {
    title: "Autonomous Racing with AWS DeepRacer",
    description:
      "PPO-based autonomous racing agent that learns to navigate tracks using stereo camera images and LiDAR.",
    bullets: [
      "Built PPO-based racing agent for AWS DeepRacer simulator achieving consistent lap completion across tracks of varying complexity",
      "Designed dual-encoder neural network with separate convolutional pathways for visual and LiDAR feature extraction",
      "Implemented two-phase transfer learning with baseline training on simple tracks followed by fine-tuning on complex environments",
    ],
    tags: ["PyTorch", "PPO", "Computer Vision", "LiDAR", "AWS DeepRacer", "Transfer Learning"],
    videoLink: "https://github.com/user-attachments/assets/8ee6346d-b066-4251-8fec-091dcdc8dc4e",
  },
  {
    title: "Large-Scale ETL of Amazon Datasets",
    description:
      "Distributed cloud computing infrastructure for processing and analyzing massive e-commerce datasets.",
    bullets: [
      "Created distributed computing infrastructure using Dask, achieving 4× speedup on 45GB of data",
      "Built batch processing pipeline with PySpark SQL on Kubernetes cluster",
      "Trained decision tree regression model using Word2Vec embeddings for item recommendation",
      "Optimized data processing and validation algorithms for cost efficiency",
    ],
    tags: ["Dask", "PySpark", "Kubernetes", "AWS EC2", "Python"],
  },
  {
    title: "Distributed MapReduce Framework",
    description:
      "A from-scratch distributed MapReduce system in C++ using asynchronous gRPC and master-worker architecture for parallel job execution.",
    bullets: [
      "Built asynchronous gRPC client using CompletionQueues and BaseCall inheritance hierarchy for per-RPC state management",
      "Implemented master-worker architecture with map-task scheduling, reduce-task coordination, and fault-tolerant task reassignment",
      "Designed concurrency-safe work queue and multithreaded worker execution pipeline for parallel shard processing",
      "Integrated Protobuf for type-safe RPC communication with pluggable Map/Reduce interfaces",
    ],
    tags: ["C++", "gRPC", "Multithreading", "Protobuf", "Linux"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 overflow-hidden flex flex-col"
            >
              {project.videoLink ? (
                <div className="bg-gray-900 p-4 flex items-center justify-center" style={{ maxHeight: '500px' }}>
                  <video
                    src={project.videoLink}
                    controls
                    className="w-full h-auto max-h-full"
                    style={{ maxHeight: '500px' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : project.image ? (
                <div className="bg-gray-900 p-4 flex items-center justify-center" style={{ maxHeight: '500px' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : null}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start text-gray-300 text-sm"
                    >
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.websiteLink || project.codeLink || project.reportLink) && (
                  <div className="flex flex-wrap gap-3">
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Website
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.reportLink && (
                      <a
                        href={project.reportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Report
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
