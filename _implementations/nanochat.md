---
layout: portfolio-single
title: "Nanochat LLM  (in progress)"
excerpt: "A single, clean, dependency-lite codebase implementing a full-stack ChatGPT-style LLM from training to web serving."
icon: "fas fa-comments"
image: "/assets/img/implementations/nanochat-cover.png"
github: "https://github.com/AMANN-N/ml-playground/tree/main/Nanochat"
category: "advanced"
---

<div class="notice--info" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; background: #e8f4f8; border-left: 4px solid #17a2b8; padding: 1em;">
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Type</span><br>
    <strong>Full-Stack LLM Implementation</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Framework</span><br>
    <strong>PyTorch</strong>
  </div>
</div>

## Overview

Nanochat is a **single, clean, minimal, hackable, dependency-lite codebase** that implements a **full-stack Large Language Model (LLM)** similar in structure to ChatGPT.

The project is designed to expose **every stage of the LLM lifecycle** — tokenization, pretraining, fine-tuning, evaluation, inference, and web serving — in a form that is readable, modifiable, and runnable end-to-end.

This implementation prioritizes **clarity and systems understanding over scale** and is currently **under active development**.

---

## Model Architecture

At its core, Nanochat implements a **GPT-style decoder-only Transformer**, with supporting infrastructure around it:

- GPT Transformer defined as a clean `nn.Module`
- KV-cache–aware inference engine
- Token and positional embeddings
- Standard attention and MLP blocks
- Shared weights between embedding and output head

The model is intentionally simple enough to inspect while still being capable of full conversational inference.

---

## Training Setup

Nanochat supports a **complete training pipeline**, executed end-to-end via shell scripts:

- Tokenizer training (BPE)
- Base model pretraining
- Midtraining and supervised fine-tuning (SFT)
- Reinforcement learning stages
- Evaluation on standard benchmarks
- Checkpointing and reporting

The recommended workflow is to run a single script that performs the entire pipeline automatically, producing both metrics and a runnable chat model.

---

## Key Implementation Details

- Tokenizing distributed data loader
- Custom BPE tokenizer (with Rust-based trainer)
- Specialized optimizers and distributed training utilities
- Explicit checkpoint management
- Evaluation tasks such as ARC, GSM8K, MMLU, and HumanEval
- Lightweight configuration system replacing heavy argument parsing

The repository is structured to make **data flow, compute flow, and control flow explicit**.

---

## Technologies & Concepts

- **Framework:** PyTorch
- **Concepts:** Autoregressive transformers, full-stack LLM training
- **Training:** Pretraining, SFT, RL
- **Systems:** Distributed training, tokenization, inference engines
- **Applications:** Conversational AI, research LLMs

---

## Source Code

🔗 [View on GitHub](https://github.com/AMANN-N/ml-playground/tree/main/Nanochat)

This project is actively evolving and serves as a reference implementation for understanding how modern LLM systems are built end-to-end.

---
