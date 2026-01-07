---
layout: portfolio-single
title: "GPT-2 — 124M Parameter Transformer"
excerpt: "From-scratch PyTorch implementation of GPT-2 (124M) for large-scale autoregressive language modeling."
icon: "fas fa-brain"
image: "/assets/img/implementations/gpt2-cover.png"
github: "https://github.com/AMANN-N/ml-playground"
category: "advanced"
---

<div class="notice--info" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; background: #e8f4f8; border-left: 4px solid #17a2b8; padding: 1em;">
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Type</span><br>
    <strong>Large-Scale Model Implementation</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Framework</span><br>
    <strong>PyTorch</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Reference</span><br>
    <strong>
      <a href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf">
        Language Models are Unsupervised Multitask Learners
      </a>
    </strong>
  </div>
</div>

## Overview

This project is a **from-scratch PyTorch implementation of GPT-2 (124M parameters)**, following the architecture and training principles described in OpenAI’s GPT-2 paper.

Compared to the base GPT implementation, this version focuses on **scaling the model and training setup**, while keeping the architecture explicit and readable.

---

## Model Architecture

The implementation follows a **decoder-only Transformer** design:

- Token and positional embeddings with shared input/output weights
- Stacked Transformer blocks with:
  - Masked multi-head self-attention  
  - Feed-forward networks with GELU activation  
  - Residual connections and layer normalization
- Final layer normalization before the language modeling head

Causal masking ensures strict autoregressive behavior across the full context window.

---

## Training Setup

- Subword-level language modeling using GPT-2 BPE tokenization
- Large context windows (up to 1024 tokens)
- Cross-entropy loss over shifted token sequences
- AdamW optimizer with learning-rate warmup and cosine decay
- Gradient accumulation to support large effective batch sizes

The training loop is written explicitly to expose:
- Data loading and batching mechanics
- Gradient accumulation and optimization behavior
- Validation loss tracking and checkpointing

---

## Key Implementation Details

- Use of **scaled dot-product attention** with causal masking
- Weight tying between token embeddings and output projection
- Depth-scaled parameter initialization for training stability
- Mixed-precision training support for improved throughput
- Native support for distributed training using DDP

---

## Text Generation

The model includes an autoregressive generation pipeline supporting:

- Top-k sampling
- Dynamic context growth during decoding
- Deterministic and stochastic sampling modes

This allows qualitative inspection of model behavior during and after training.

---

## Technologies & Concepts

- **Framework:** PyTorch
- **Concepts:** Large-scale autoregressive modeling, self-attention
- **Training:** Unsupervised pre-training
- **Applications:** Text generation, language modeling

---

## Source Code

🔗 [View on GitHub](https://github.com/AMANN-N/ml-playground/blob/main/GPT2/)

The repository contains the full model implementation, training loop, distributed setup, and generation logic.

---
