---
layout: portfolio-single
title: "GPT — Generative Pre-trained Transformer"
excerpt: "From-scratch PyTorch implementation of the original GPT architecture for autoregressive language modeling."
icon: "fas fa-robot"
image: "/assets/img/implementations/gpt-cover.png"
github: "https://github.com/AMANN-N/ml-playground"
category: "advanced"
---

<div class="notice--info" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; background: #e8f4f8; border-left: 4px solid #17a2b8; padding: 1em;">
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Type</span><br>
    <strong>Model Implementation</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Framework</span><br>
    <strong>PyTorch</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Reference</span><br>
    <strong>
      <a href="https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf">
        Improving Language Understanding by Generative Pre-Training
      </a>
    </strong>
  </div>
</div>

## Overview

This project is a **from-scratch PyTorch implementation of the original GPT architecture**, closely following the design described in OpenAI’s *Generative Pre-Training* paper.

The goal was not to replicate modern large-scale GPT variants, but to **deeply understand the mechanics of autoregressive transformers**, including attention masking, positional encoding, and decoder-only training dynamics.

---

## Model Architecture

The implementation follows a **decoder-only Transformer** design:

- Token and positional embeddings
- Stacked Transformer blocks with:
Masked multi-head self-attention
Feed-forward networks
Residual connections and layer normalization
- Linear language modeling head over the vocabulary

The model predicts the **next token autoregressively**, using causal masking to prevent information leakage from future tokens.

---

## Training Setup

- Character-level language modeling on a Shakespeare corpus
- Fixed-length context windows
- Cross-entropy loss over shifted token sequences
- AdamW optimizer with standard GPT-style initialization

The training loop is written explicitly to expose:
- Batch sampling mechanics
- Train vs validation loss estimation
- Gradient flow and optimization behavior

---

## Key Implementation Details

- Manual construction of **causal self-attention masks**
- Explicit separation of attention heads and projection layers
- Weight initialization aligned with GPT-style scaling
- Clear distinction between training-time forward pass and autoregressive generation
- No external Transformer abstractions used (e.g. `nn.Transformer`)

---

## Text Generation

The model includes a simple sampling-based generation routine:

- Iterative next-token sampling from the output distribution
- Softmax-based multinomial sampling
- Context window growth with each generated token

---

## Technologies & Concepts

- **Framework:** PyTorch
- **Concepts:** Autoregressive modeling, self-attention, causal masking
- **Training:** Unsupervised pre-training
- **Applications:** Text generation, language modeling

---

## Source Code

🔗 [View on GitHub](https://github.com/AMANN-N/ml-playground/blob/main/GPT/gpt.py)


The repository contains the full training script, model definition, and generation logic.

---


