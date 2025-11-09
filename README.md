# James's Portfolio
Hi! 👋 I'm James, a Computer Science student at Georgia Tech with strong interest in large-scale machine learning infrastructure. Here are some projects I've completed so far! I'm always looking for new opportunies, feel free to reach out to me.

## Graph Batching Method for Integrated Circuits

Chips consist of hundreds of millions of logic gates and transistors. Although the chip itself is small in physical size, a graph representation of the chip is very large and produces problems during training due to RAM constraints. Our solution proposes a batching strategy that reduces RAM overhead while maintaining model accuracy on circuit congestion prediction. We use a benchmark batching method proposed by Cluster-GCN, improving upon problems with their random sampling method.

[Website 🌐](https://spencerrazor.github.io/walking-gcn/) • [Report 📖](https://drive.google.com/file/d/1ouMfxmZm9oltgq5J7yZiXt1gXl7XL1-v/view?usp=sharing) • [Code 💻](https://github.com/UCSD-Qualcomm-B07-Group-2/Biased-Batch-Learning-Strategy)

![image](VLSI_poster.png)

##

## Multi-Agent Reinforcement Learning in Overcooked

![image](timelapse.png)

- Implemented Multi-Agent Proximal Policy Optimization (MAPPO) from scratch using centralized training with decentralized execution (CTDE) paradigm, achieving 7-8 soups/episode on coordinated kitchen layouts through emergent role specialization and implicit coordination behaviors.
- Integrated Intrinsic Curiosity Module (ICM) for exploration in sparse reward environments, analyzing credit assignment and coordination dynamics through per-agent value estimation and exploration-exploitation transitions.
- Conducted rigorous experimental evaluation across 3 layouts with 2000+ training episodes per environment, identifying spatial complexity and exploration insufficiency as key scalability challenges in multi-agent coordination.


## Systems Programming
### Distributed MapReduce Framework
- Built MapReduce system library with gRPC-based master/worker process coordination for distributed task execution.
- Designed input sharding and hash-based partitioning to balance workload of parallel workers.
- Implemented reducer logic to aggregate, sort, and output partitioned key-value results.

### VM CPU Scheduler & Memory Coordinator
- Developed dynamic vCPU scheduler with libvirt C to monitor CPU utilization and balance workloads across physical cores, reducing pinning overhead.
- Created responsive memory coordinator leveraging balloon driver to adjust guest VM memory in real time for optimal resource distribution.

### File Transfer Proxy-Cache Server with Shared Memory
- Developed multi-threaded file transfer utilities using shared memory inter-process communication (IPC) for scalable
data transfer.
- Created cache server to interact with proxy by shared memory, allowing for concurrent access from multiple proxy servers.

### Andrew File System
- Integrated gRPC for remote procedure calls to enable file synchronization across distributed file system.
- Live file and directory modification updates between multiple connected clients of shared directory.

## Data Science Umbrella Projects

### 3D Reconstruction from Images
- Estimated surface depth map from external light sources with photometric stereo, applying horn integration
technique to accurately predict meshes of human faces.
- Incorporated 8-point algorithm to derive epipolar geometry and match image features, maintaining object point
continuity and preserved perspective.

### Voice AutoTuner and JPEG Compression
- Created autotuner with discrete signal filtering methods to transform sampled audio to clean output signal.
- Developed JPEG image compression algorithm with local and global compression, reducing file size by 90% while
retaining image quality.

### Large-Scale Data Analysis of Amazon Datasets
#### AWS EC2
- Developed distributed computing infrastructure using Dask and AWS EC2, enabling parallel processing of Amazon reviews and products data across multinode cluster.
- Achieved 4x compute speedup and 4x costs saved using distributed computing techniques to optimize data processing and validation algorithms to handle 45 GB of data.
  
#### Apache Spark
- Developed batch processing pipeline using Apache Spark PySQL on Kubernetes cluster.
- Trained decision tree regression model using word embedding with Word2Vec to extract meaningful features from text data and improve recommendation systems.

### [Dimensionality Reduction Techniques](https://github.com/JimmyBentley/Dimensionality-Reduction-Techniques)
- Representing high dimensional data with dimensionality techniques, with Principal Component Analysis (PCA) for linear data and Laplacian Eigenmaps for non-linear data.
- PCA performed on faces dataset which takes a top eigenvector as a detector of eyeglasses.
- Laplacian Eigenmaps performed on k-nearest neighbors graph to find similarity between US universities.
