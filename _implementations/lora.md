---
layout: portfolio-single
title: "LoRA — Low-Rank Adaptation"
excerpt: "From-scratch PyTorch implementation of LoRA for parameter-efficient fine-tuning of Transformer models."
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
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Reference</span><br>
    <strong>
      <a href="https://arxiv.org/abs/2106.09685">
        LoRA: Low-Rank Adaptation of Large Language Models
      </a>
    </strong>
  </div>
</div>

## Overview

This project is a **from-scratch PyTorch implementation of LoRA (Low-Rank Adaptation)**, a technique for efficiently fine-tuning large Transformer models by introducing trainable low-rank updates while keeping the original model weights frozen.

The implementation focuses on clarity and correctness, making the LoRA mechanics explicit rather than relying on external adapter libraries.

---

## Model Architecture

LoRA is implemented by **augmenting existing linear layers** with low-rank adapters:

- Original weight matrices remain frozen
- Trainable low-rank matrices **A** and **B** are injected in parallel
- The effective weight update is computed as a scaled low-rank projection
- Only adapter parameters are updated during training

In this implementation, LoRA adapters are applied selectively to **query and value projections** in multi-head attention, which is a common and effective configuration.

---

## Training Setup

- Base Transformer weights are frozen
- Only LoRA parameters participate in optimization
- Standard cross-entropy loss for sequence modeling
- Identical training loops can be reused from full fine-tuning setups
- Supports drop-in replacement for standard linear layers

This setup significantly reduces memory usage and the number of trainable parameters compared to full fine-tuning.

---

## Key Implementation Details

- Custom `LoRALinear` module with explicit low-rank decomposition
- Scaling factor (`alpha / r`) applied to stabilize updates
- Clean separation between base weights and LoRA adapters
- Compatible with standard Transformer blocks
- No reliance on third-party PEFT frameworks
- The LoRA modules integrate transparently into the model’s forward pass, allowing **standard autoregressive decoding** without any special handling at inference time.
- Adapters can be: Kept separate during training and merged into base weights for efficient inference

---

## Technologies & Concepts

- **Framework:** PyTorch
- **Concepts:** Low-rank approximation, parameter-efficient fine-tuning
- **Training:** Transfer learning with frozen base models
- **Applications:** LLM fine-tuning, domain adaptation, task specialization

---

## Source Code

🔗 [View on GitHub](https://github.com/AMANN-N/ml-playground/tree/main/LoRA)

The repository contains the full LoRA module implementation and its integration into Transformer attention blocks.

---
