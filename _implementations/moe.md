---
layout: portfolio-single
title: "MoE — Mixture of Experts"
excerpt: "From-scratch PyTorch implementation of a Mixture of Experts Transformer for conditional computation and efficient scaling."
icon: "fas fa-users-cog"
image: "/assets/img/implementations/moe-cover.png"
github: "https://github.com/AMANN-N/ml-playground/tree/main/MOE"
category: "advanced"
---

<div class="notice--info" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; background: #e8f4f8; border-left: 4px solid #17a2b8; padding: 1em;">
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Type</span><br>
    <strong>Advanced Neural Architecture</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Framework</span><br>
    <strong>PyTorch</strong>
  </div>
</div>

## Overview

This project is a **from-scratch PyTorch implementation of a Mixture of Experts (MoE) Transformer**, where conditional routing is used to activate a subset of specialized expert networks for each input.

The implementation focuses on making **expert routing, sparse computation, and gating behavior explicit**, rather than relying on opaque high-level abstractions.

---

## Model Architecture

The model follows a standard **decoder-only Transformer** structure, with the feed-forward layers replaced by MoE blocks:

- Token and positional embeddings
- Multi-head self-attention blocks
- MoE-based feed-forward layers consisting of:
  - Multiple independent expert networks
  - A learned gating network
  - Top-K expert selection per token
- Residual connections and layer normalization
- Linear language modeling head

Each token is routed to a subset of experts, enabling conditional computation.

---

## Training Setup

- Character-level language modeling on a TinyStories-style corpus
- Fixed-length context windows
- Cross-entropy loss over shifted token sequences
- AdamW optimizer with standard training loop
- Sparse expert activation during forward passes

The training loop is written explicitly to expose routing behavior and loss dynamics.

---

## Key Implementation Details

- Custom **MoE layer** with explicit top-K expert routing
- Softmax-normalized gating weights per token
- Sparse expert execution to avoid unnecessary computation
- Independent expert parameter sets
- Drop-in replacement for standard feed-forward Transformer blocks

---

## Technologies & Concepts

- **Framework:** PyTorch
- **Concepts:** Mixture of Experts, conditional computation, sparse models
- **Training:** Unsupervised language modeling
- **Applications:** Scalable Transformers, multi-task modeling

---

## Source Code

🔗 [View on GitHub](https://github.com/AMANN-N/ml-playground/tree/main/MOE)

The repository contains the full MoE layer implementation, Transformer integration, training loop, and generation logic.

---
