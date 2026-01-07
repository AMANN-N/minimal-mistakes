---
layout: portfolio-single
title: "100 Days of GPU (CUDA) Challenge"
excerpt: "Hands-on CUDA programming project focused on kernel design, memory optimization, and GPU architecture fundamentals."
icon: "fas fa-microchip"
image: "/assets/img/portfolio/cuda-cover.png"
github: "https://github.com/AMANN-N/cuda-codes"
---

<div class="notice--info" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; background: #f0f7fd; border-left: 4px solid #007bff; padding: 1em;">
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Type</span><br>
    <strong>Personal Learning Project</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Duration</span><br>
    <strong>Ongoing</strong>
  </div>
  <div>
    <span style="color: #6c757d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Tech Stack</span><br>
    <strong>CUDA, C++, GPU Programming</strong>
  </div>
</div>

## Overview

The **100 Days of GPU (CUDA) Challenge** is an ongoing hands-on project aimed at building a deep, practical understanding of **GPU programming and performance optimization**.

The work is based on implementing kernels and optimization techniques from *Programming Massively Parallel Processors (PMPP)*, focusing on how GPU hardware behaves and how code can be tuned to match it.

---

## Key Details

- Implemented a wide range of **CUDA kernels**, starting from basic parallel operations to more advanced primitives.
- Progressively explored **memory hierarchies**, including global, shared, and register memory.
- Studied and applied optimization techniques such as tiling, coarsening, privatization, and reducing thread divergence.
- Focused on understanding **performance trade-offs**, not just correctness.

**Covered topics include:**
- Vector and matrix operations
- Convolution kernels (1D, 2D, tiled, cached)
- Stencil computations (2D and 3D)
- Histograms with atomics, privatization, and coarsening
- Parallel reductions and scans (Kogge–Stone, Brent–Kung)
- Parallel sorting (merge sort, radix sort)
- Sparse matrix–vector multiplication (COO, CSR)
- GPU implementations of common ML primitives (layer norm, softmax, sigmoid)

---

## Tech Stack

- **Languages:** CUDA, C++
- **Tools:** NVIDIA toolchain
- **Concepts:** GPU architecture, parallel algorithms, memory optimization, kernel tuning

---

## Code

🔗 [View on GitHub](https://github.com/AMANN-N/cuda-codes)

The repository is organized by day and topic, with each implementation focused on a specific GPU programming concept.

---
