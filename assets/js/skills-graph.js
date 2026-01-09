// Skills Graph Data - Enhanced with more skills and connections
const graphData = {
    nodes: [
        // Core Programming Skills
        { id: "python", name: "Python", type: "skill", size: 22 },
        { id: "java", name: "Java", type: "skill", size: 14 },
        { id: "cpp", name: "C++", type: "skill", size: 13 },
        { id: "javascript", name: "JavaScript", type: "skill", size: 12 },

        // Deep Learning & ML Frameworks
        { id: "pytorch", name: "PyTorch", type: "skill", size: 20 },
        { id: "tensorflow", name: "TensorFlow", type: "skill", size: 18 },
        { id: "keras", name: "Keras", type: "skill", size: 14 },
        { id: "scikit-learn", name: "Scikit-Learn", type: "skill", size: 15 },

        // ML/DL Concepts
        { id: "deep-learning", name: "Deep Learning", type: "skill", size: 21 },
        { id: "ml", name: "Machine Learning", type: "skill", size: 20 },
        { id: "nlp", name: "NLP", type: "skill", size: 19 },
        { id: "computer-vision", name: "Computer Vision", type: "skill", size: 17 },
        { id: "transformers", name: "Transformers", type: "skill", size: 18 },
        { id: "reinforcement-learning", name: "Reinforcement Learning", type: "skill", size: 14 },
        { id: "transfer-learning", name: "Transfer Learning", type: "skill", size: 13 },
        { id: "generative-ai", name: "Generative AI", type: "skill", size: 16 },

        // Optimization & Performance
        { id: "cuda", name: "CUDA", type: "skill", size: 17 },
        { id: "optimization", name: "Optimization", type: "skill", size: 15 },
        { id: "parallel-computing", name: "Parallel Computing", type: "skill", size: 14 },

        // Backend & Databases
        { id: "sql", name: "SQL", type: "skill", size: 15 },
        { id: "mysql", name: "MySQL", type: "skill", size: 13 },
        { id: "mongodb", name: "MongoDB", type: "skill", size: 12 },
        { id: "redis", name: "Redis", type: "skill", size: 11 },
        { id: "elasticsearch", name: "Elasticsearch", type: "skill", size: 12 },
        { id: "spring-boot", name: "Spring Boot", type: "skill", size: 13 },
        { id: "rest-api", name: "REST API", type: "skill", size: 14 },
        { id: "apache-tomcat", name: "Apache Tomcat", type: "skill", size: 11 },

        // Mobile & Web
        { id: "android", name: "Android", type: "skill", size: 12 },
        { id: "firebase", name: "Firebase", type: "skill", size: 11 },

        // Data Science & Analysis
        { id: "numpy", name: "NumPy", type: "skill", size: 16 },
        { id: "pandas", name: "Pandas", type: "skill", size: 15 },
        { id: "matplotlib", name: "Matplotlib", type: "skill", size: 13 },
        { id: "data-analysis", name: "Data Analysis", type: "skill", size: 14 },

        // Projects
        { id: "cuda-challenge", name: "CUDA GPU Challenge", type: "project", url: "/projects/cuda-gpu-challenge/", size: 12 },
        { id: "chatbot-rl", name: "Chatbot RL", type: "project", url: "/projects/chatbot-rl/", size: 12 },
        { id: "facial-recognition", name: "Facial Recognition", type: "project", url: "/projects/facial-recognition/", size: 12 },
        { id: "obstacle-detection", name: "Obstacle Detection", type: "project", url: "/projects/obstacle-detection/", size: 12 },
        { id: "ephaptic-regularizer", name: "ephaptic Regularizer", type: "project", url: "/projects/ephaptic-regularizer/", size: 11 },
        { id: "game-classification", name: "Game Classification", type: "project", url: "/projects/game-classification/", size: 11 },
        { id: "android-app", name: "Android App", type: "project", url: "/projects/android-app/", size: 11 },
        { id: "parking-management", name: "Parking Management", type: "project", url: "/projects/parking-management/", size: 11 },

        // Work Experience
        { id: "ofbusiness", name: "OfBusiness ML Engineer", type: "experience", url: "/experience/ofbusiness-ml/", size: 14 },
        { id: "cerco", name: "CerCo Intern", type: "experience", url: "/experience/cerco-intern/", size: 13 },
        { id: "harvard", name: "Harvard Medical School", type: "experience", url: "/experience/harvard/", size: 14 },

        // Implementations (Deep Learning)
        { id: "impl-transformer", name: "Transformer", type: "implementation", url: "/implementations/transformer/", size: 10 },
        { id: "impl-gpt", name: "GPT", type: "implementation", url: "/implementations/gpt/", size: 10 },
        { id: "impl-gpt2", name: "GPT-2", type: "implementation", url: "/implementations/gpt2/", size: 10 },
        { id: "impl-word2vec", name: "Word2Vec", type: "implementation", url: "/implementations/word2vec/", size: 10 },
        { id: "impl-flash-attn", name: "Flash Attention", type: "implementation", url: "/implementations/flash-attention/", size: 10 },
        { id: "impl-cnn", name: "CNN", type: "implementation", url: "/implementations/cnn/", size: 10 },
        { id: "impl-resnet", name: "ResNet", type: "implementation", url: "/implementations/resnet/", size: 10 },
        { id: "impl-rnn", name: "RNN", type: "implementation", url: "/implementations/rnn/", size: 10 },
        { id: "impl-dnn", name: "Deep Neural Network", type: "implementation", url: "/implementations/deep-neural-network/", size: 9 },

        // Implementations (ML Algorithms)
        { id: "impl-linear-reg", name: "Linear Regression", type: "implementation", url: "/implementations/linear-regression/", size: 9 },
        { id: "impl-logistic-reg", name: "Logistic Regression", type: "implementation", url: "/implementations/logistic-regression/", size: 9 },
        { id: "impl-svm", name: "SVM", type: "implementation", url: "/implementations/svm/", size: 9 },
        { id: "impl-kmeans", name: "K-Means", type: "implementation", url: "/implementations/kmeans/", size: 9 },
        { id: "impl-knn", name: "KNN", type: "implementation", url: "/implementations/knn/", size: 9 },
        { id: "impl-pca", name: "PCA", type: "implementation", url: "/implementations/pca/", size: 9 },

        // Implementations (Advanced)
        { id: "impl-lora", name: "LoRA", type: "implementation", url: "/implementations/lora/", size: 10 },
        { id: "impl-moe", name: "MOE", type: "implementation", url: "/implementations/moe/", size: 10 },
        { id: "impl-nanochat", name: "Nanochat", type: "implementation", url: "/implementations/nanochat/", size: 9 }
    ],

    links: [
        // CUDA Challenge connections
        { source: "cuda", target: "cuda-challenge" },
        { source: "python", target: "cuda-challenge" },
        { source: "cpp", target: "cuda-challenge" },
        { source: "optimization", target: "cuda-challenge" },
        { source: "parallel-computing", target: "cuda-challenge" },

        // Chatbot RL connections
        { source: "python", target: "chatbot-rl" },
        { source: "pytorch", target: "chatbot-rl" },
        { source: "nlp", target: "chatbot-rl" },
        { source: "deep-learning", target: "chatbot-rl" },
        { source: "reinforcement-learning", target: "chatbot-rl" },
        { source: "transformers", target: "chatbot-rl" },

        // Facial Recognition connections
        { source: "python", target: "facial-recognition" },
        { source: "computer-vision", target: "facial-recognition" },
        { source: "deep-learning", target: "facial-recognition" },
        { source: "tensorflow", target: "facial-recognition" },

        // Obstacle Detection connections
        { source: "python", target: "obstacle-detection" },
        { source: "computer-vision", target: "obstacle-detection" },
        { source: "deep-learning", target: "obstacle-detection" },
        { source: "pytorch", target: "obstacle-detection" },

        // ephaptic Regularizer connections
        { source: "python", target: "ephaptic-regularizer" },
        { source: "pytorch", target: "ephaptic-regularizer" },
        { source: "tensorflow", target: "ephaptic-regularizer" },
        { source: "deep-learning", target: "ephaptic-regularizer" },

        // Game Classification connections
        { source: "python", target: "game-classification" },
        { source: "nlp", target: "game-classification" },
        { source: "ml", target: "game-classification" },
        { source: "scikit-learn", target: "game-classification" },
        { source: "data-analysis", target: "game-classification" },

        // Android App connections
        { source: "java", target: "android-app" },
        { source: "android", target: "android-app" },
        { source: "firebase", target: "android-app" },
        { source: "sql", target: "android-app" },

        // Parking Management connections
        { source: "java", target: "parking-management" },
        { source: "spring-boot", target: "parking-management" },
        { source: "mysql", target: "parking-management" },
        { source: "rest-api", target: "parking-management" },
        { source: "apache-tomcat", target: "parking-management" },

        // OfBusiness connections
        { source: "python", target: "ofbusiness" },
        { source: "nlp", target: "ofbusiness" },
        { source: "ml", target: "ofbusiness" },
        { source: "deep-learning", target: "ofbusiness" },
        { source: "pytorch", target: "ofbusiness" },
        { source: "tensorflow", target: "ofbusiness" },
        { source: "sql", target: "ofbusiness" },
        { source: "mongodb", target: "ofbusiness" },
        { source: "redis", target: "ofbusiness" },
        { source: "elasticsearch", target: "ofbusiness" },
        { source: "rest-api", target: "ofbusiness" },
        { source: "generative-ai", target: "ofbusiness" },
        { source: "data-analysis", target: "ofbusiness" },

        // CerCo connections
        { source: "python", target: "cerco" },
        { source: "pytorch", target: "cerco" },
        { source: "nlp", target: "cerco" },
        { source: "transformers", target: "cerco" },
        { source: "deep-learning", target: "cerco" },

        // Harvard connections
        { source: "python", target: "harvard" },
        { source: "nlp", target: "harvard" },
        { source: "deep-learning", target: "harvard" },
        { source: "transformers", target: "harvard" },
        { source: "generative-ai", target: "harvard" },
        { source: "data-analysis", target: "harvard" },

        // Implementation connections - Deep Learning
        { source: "python", target: "impl-transformer" },
        { source: "pytorch", target: "impl-transformer" },
        { source: "transformers", target: "impl-transformer" },
        { source: "deep-learning", target: "impl-transformer" },
        { source: "nlp", target: "impl-transformer" },
        { source: "numpy", target: "impl-transformer" },

        { source: "python", target: "impl-gpt" },
        { source: "pytorch", target: "impl-gpt" },
        { source: "transformers", target: "impl-gpt" },
        { source: "nlp", target: "impl-gpt" },
        { source: "generative-ai", target: "impl-gpt" },
        { source: "transfer-learning", target: "impl-gpt" },

        { source: "python", target: "impl-gpt2" },
        { source: "pytorch", target: "impl-gpt2" },
        { source: "transformers", target: "impl-gpt2" },
        { source: "nlp", target: "impl-gpt2" },
        { source: "generative-ai", target: "impl-gpt2" },
        { source: "transfer-learning", target: "impl-gpt2" },

        { source: "python", target: "impl-word2vec" },
        { source: "pytorch", target: "impl-word2vec" },
        { source: "nlp", target: "impl-word2vec" },
        { source: "numpy", target: "impl-word2vec" },

        { source: "python", target: "impl-flash-attn" },
        { source: "pytorch", target: "impl-flash-attn" },
        { source: "cuda", target: "impl-flash-attn" },
        { source: "optimization", target: "impl-flash-attn" },
        { source: "transformers", target: "impl-flash-attn" },
        { source: "parallel-computing", target: "impl-flash-attn" },

        { source: "python", target: "impl-cnn" },
        { source: "pytorch", target: "impl-cnn" },
        { source: "numpy", target: "impl-cnn" },
        { source: "computer-vision", target: "impl-cnn" },
        { source: "deep-learning", target: "impl-cnn" },

        { source: "python", target: "impl-resnet" },
        { source: "pytorch", target: "impl-resnet" },
        { source: "computer-vision", target: "impl-resnet" },
        { source: "deep-learning", target: "impl-resnet" },
        { source: "transfer-learning", target: "impl-resnet" },

        { source: "python", target: "impl-rnn" },
        { source: "pytorch", target: "impl-rnn" },
        { source: "deep-learning", target: "impl-rnn" },
        { source: "numpy", target: "impl-rnn" },

        { source: "python", target: "impl-dnn" },
        { source: "numpy", target: "impl-dnn" },
        { source: "deep-learning", target: "impl-dnn" },
        { source: "matplotlib", target: "impl-dnn" },

        // Implementation connections - ML Algorithms
        { source: "python", target: "impl-linear-reg" },
        { source: "numpy", target: "impl-linear-reg" },
        { source: "ml", target: "impl-linear-reg" },
        { source: "matplotlib", target: "impl-linear-reg" },

        { source: "python", target: "impl-logistic-reg" },
        { source: "numpy", target: "impl-logistic-reg" },
        { source: "ml", target: "impl-logistic-reg" },
        { source: "matplotlib", target: "impl-logistic-reg" },

        { source: "python", target: "impl-svm" },
        { source: "numpy", target: "impl-svm" },
        { source: "ml", target: "impl-svm" },
        { source: "scikit-learn", target: "impl-svm" },

        { source: "python", target: "impl-kmeans" },
        { source: "numpy", target: "impl-kmeans" },
        { source: "ml", target: "impl-kmeans" },
        { source: "matplotlib", target: "impl-kmeans" },

        { source: "python", target: "impl-knn" },
        { source: "numpy", target: "impl-knn" },
        { source: "ml", target: "impl-knn" },
        { source: "scikit-learn", target: "impl-knn" },

        { source: "python", target: "impl-pca" },
        { source: "numpy", target: "impl-pca" },
        { source: "ml", target: "impl-pca" },
        { source: "data-analysis", target: "impl-pca" },

        // Implementation connections - Advanced
        { source: "python", target: "impl-lora" },
        { source: "pytorch", target: "impl-lora" },
        { source: "deep-learning", target: "impl-lora" },
        { source: "transfer-learning", target: "impl-lora" },
        { source: "transformers", target: "impl-lora" },

        { source: "python", target: "impl-moe" },
        { source: "pytorch", target: "impl-moe" },
        { source: "deep-learning", target: "impl-moe" },
        { source: "transformers", target: "impl-moe" },

        { source: "python", target: "impl-nanochat" },
        { source: "pytorch", target: "impl-nanochat" },
        { source: "transformers", target: "impl-nanochat" },
        { source: "nlp", target: "impl-nanochat" },
        { source: "generative-ai", target: "impl-nanochat" }
    ]
};

// Initialize the graph when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    createSkillsGraph(graphData);
});

function createSkillsGraph(data) {
    const container = document.getElementById('skills-graph');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create SVG
    const svg = d3.select('#skills-graph')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Add gradient definitions for nodes
    const defs = svg.append('defs');

    // Skill gradient
    const skillGradient = defs.append('radialGradient')
        .attr('id', 'skill-gradient');
    skillGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#79c0ff');
    skillGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#58a6ff');

    // Project gradient
    const projectGradient = defs.append('radialGradient')
        .attr('id', 'project-gradient');
    projectGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#56d364');
    projectGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#3fb950');

    // Experience gradient
    const expGradient = defs.append('radialGradient')
        .attr('id', 'experience-gradient');
    expGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#ffa198');
    expGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#f78166');

    // Implementation gradient
    const implGradient = defs.append('radialGradient')
        .attr('id', 'implementation-gradient');
    implGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#d2a8ff');
    implGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#bc8cff');

    // Create container for zoom
    const g = svg.append('g');

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.3, 3])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);

    // Create tooltip
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'graph-tooltip');

    // Create force simulation with stronger forces
    const simulation = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink(data.links).id(d => d.id).distance(120).strength(0.5))
        .force('charge', d3.forceManyBody().strength(-400))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.size + 8));

    // Create links with gradient
    const link = g.append('g')
        .selectAll('line')
        .data(data.links)
        .join('line')
        .attr('class', 'link')
        .style('stroke-width', 1.5);

    // Create nodes
    const node = g.append('g')
        .selectAll('g')
        .data(data.nodes)
        .join('g')
        .attr('class', d => `node ${d.type}`)
        .call(drag(simulation));

    // Add circles to nodes with gradients
    node.append('circle')
        .attr('r', d => d.size)
        .style('fill', d => `url(#${d.type}-gradient)`)
        .style('filter', 'drop-shadow(0 0 8px rgba(88, 166, 255, 0.4))')
        .style('cursor', 'pointer');

    // Add pulsing animation to skill nodes
    node.filter(d => d.type === 'skill')
        .select('circle')
        .style('animation', 'pulse 2s ease-in-out infinite');

    // Add labels to nodes
    node.append('text')
        .attr('dy', d => d.size + 16)
        .text(d => d.name)
        .style('font-weight', d => d.type === 'skill' ? '600' : '500');

    // Node interactions with enhanced effects
    node.on('mouseover', function (event, d) {
        // Enlarge node
        d3.select(this).select('circle')
            .transition()
            .duration(200)
            .attr('r', d.size * 1.3)
            .style('filter', 'drop-shadow(0 0 15px rgba(88, 166, 255, 0.8))');

        // Highlight connected links
        link.classed('active', l => l.source.id === d.id || l.target.id === d.id);

        // Dim non-connected nodes
        node.style('opacity', n => {
            const isConnected = data.links.some(l =>
                (l.source.id === d.id && l.target.id === n.id) ||
                (l.target.id === d.id && l.source.id === n.id) ||
                n.id === d.id
            );
            return isConnected ? 1 : 0.3;
        });

        // Show tooltip
        const typeLabel = d.type.charAt(0).toUpperCase() + d.type.slice(1);
        const connections = data.links.filter(l => l.source.id === d.id || l.target.id === d.id).length;
        tooltip.html(`
      <div class="tooltip-type ${d.type}">${typeLabel}</div>
      <h4>${d.name}</h4>
      <p>${connections} connection${connections !== 1 ? 's' : ''}</p>
      ${d.url ? '<p style="margin-top: 0.5rem; color: #58a6ff;">Click to explore →</p>' : ''}
    `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px')
            .classed('show', true);
    })
        .on('mouseout', function (event, d) {
            // Reset node size
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', d.size)
                .style('filter', 'drop-shadow(0 0 8px rgba(88, 166, 255, 0.4))');

            link.classed('active', false);
            node.style('opacity', 1);
            tooltip.classed('show', false);
        })
        .on('click', function (event, d) {
            if (d.url) {
                window.location.href = d.url;
            }
        });

    // Update positions on simulation tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;

            // Add glow effect while dragging
            d3.select(event.sourceEvent.target.parentNode).select('circle')
                .style('filter', 'drop-shadow(0 0 20px rgba(88, 166, 255, 1))');
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;

            // Remove glow effect
            d3.select(event.sourceEvent.target.parentNode).select('circle')
                .style('filter', 'drop-shadow(0 0 8px rgba(88, 166, 255, 0.4))');
        }

        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }

    // Resize handler
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        svg.attr('width', newWidth).attr('height', newHeight);
        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.alpha(0.3).restart();
    });
}
