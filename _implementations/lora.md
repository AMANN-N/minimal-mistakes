---
layout: portfolio-single
title: "LoRA - Low-Rank Adaptation"
excerpt: "Implementation of LoRA (Low-Rank Adaptation) for efficient fine-tuning of large language models."
icon: "fas fa-compress-alt"
image: "/assets/img/implementations/lora-cover.png"
github: "https://github.com/AMANN-N/ml-playground/tree/main/LoRA"
category: "advanced"
---

<div class="notice--info" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; background: #e8f4f8; border-left: 4px solid #17a2b8; padding: 1em;">
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Type</span><br>
    <strong>Parameter-Efficient Fine-Tuning</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Framework</span><br>
    <strong>PyTorch</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Paper</span><br>
    <strong><a href="https://arxiv.org/abs/2106.09685">LoRA: Low-Rank Adaptation of Large Language Models</a></strong>
  </div>
</div>

## Overview
Implementation of LoRA (Low-Rank Adaptation) technique for efficiently fine-tuning large pre-trained models by injecting trainable low-rank matrices.

## Key Components
- Low-rank decomposition
- Adapter layers
- Freezing pre-trained weights
- Efficient parameter updates
- Merge and inference optimization

## Technologies Used
- **Framework:** PyTorch
- **Concepts:** Low-rank approximation, Transfer learning, Parameter efficiency
- **Applications:** LLM fine-tuning, Domain adaptation, Task-specific customization

## GitHub Repository
🔗 [View on GitHub](https://github.com/AMANN-N/ml-playground/tree/main/LoRA)
