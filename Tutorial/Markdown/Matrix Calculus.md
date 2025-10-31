# Complete Matrix Calculus: All Derivative Types with Full Definitions

## Complete Taxonomy of Derivatives (9 possibilities)

| Numerator | Denominator | Dimensions | Result Shape | Name | Notation |
|-----------|-------------|------------|--------------|------|----------|
| Scalar $y$ | Scalar $x$ | $\mathbb{R} \to \mathbb{R}$ | Scalar | Ordinary derivative | $\frac{dy}{dx}$ |
| Scalar $y$ | Vector $\mathbf{x}$ (n×1) | $\mathbb{R}^n \to \mathbb{R}$ | Vector (n×1) | Gradient | $\frac{\partial y}{\partial \mathbf{x}}$ or $\nabla_{\mathbf{x}} y$ |
| Scalar $y$ | Matrix $\mathbf{X}$ (m×n) | $\mathbb{R}^{m \times n} \to \mathbb{R}$ | Matrix (m×n) | Gradient w.r.t. matrix | $\frac{\partial y}{\partial \mathbf{X}}$ |
| Vector $\mathbf{y}$ (m×1) | Scalar $x$ | $\mathbb{R} \to \mathbb{R}^m$ | Vector (m×1) | Tangent vector | $\frac{d\mathbf{y}}{dx}$ |
| Vector $\mathbf{y}$ (m×1) | Vector $\mathbf{x}$ (n×1) | $\mathbb{R}^n \to \mathbb{R}^m$ | Matrix (m×n) | Jacobian | $\frac{\partial \mathbf{y}}{\partial \mathbf{x}}$ or $\mathbf{J}$ |
| Vector $\mathbf{y}$ (m×1) | Matrix $\mathbf{X}$ (p×q) | $\mathbb{R}^{p \times q} \to \mathbb{R}^m$ | 3D Tensor (m×p×q) | Tensor derivative | $\frac{\partial \mathbf{y}}{\partial \mathbf{X}}$ |
| Matrix $\mathbf{Y}$ (m×n) | Scalar $x$ | $\mathbb{R} \to \mathbb{R}^{m \times n}$ | Matrix (m×n) | Matrix tangent | $\frac{d\mathbf{Y}}{dx}$ |
| Matrix $\mathbf{Y}$ (m×n) | Vector $\mathbf{x}$ (p×1) | $\mathbb{R}^p \to \mathbb{R}^{m \times n}$ | 3D Tensor (m×n×p) | Tensor derivative | $\frac{\partial \mathbf{Y}}{\partial \mathbf{x}}$ |
| Matrix $\mathbf{Y}$ (m×n) | Matrix $\mathbf{X}$ (p×q) | $\mathbb{R}^{p \times q} \to \mathbb{R}^{m \times n}$ | 4D Tensor (m×n×p×q) | 4th-order tensor | $\frac{\partial \mathbf{Y}}{\partial \mathbf{X}}$ |

---
## Usage Note: Most Commonly Used Matrix Calculus Operations

### Top 4 (90%+ of practical use):
1. **Scalar by Scalar** 
    - Standard calculus (foundation for all others)

2. **Scalar by Vector (Gradient)** → Vector
   - Used in: ML optimization, neural networks, regression
   - Key formula: $\frac{\partial (\mathbf{x}^T\mathbf{x})}{\partial \mathbf{x}} = 2\mathbf{x}$

3. **Scalar by Matrix** → Matrix
   - Used in: Matrix optimization, regularization
   - Key formula: $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{X})}{\partial \mathbf{X}} = 2\mathbf{X}$
   
4. **Vector by Vector (Jacobian)** → Matrix
   - Used in: Neural network layers, transformations
   - Key formula: $\frac{\partial (\mathbf{A}\mathbf{x})}{\partial \mathbf{x}} = \mathbf{A}$

### Occasionally Used:
- **Vector by Scalar** (Vector) - Parameterized curves
- **Matrix by Scalar** (Matrix) - Occasional use in parameterized problems

### Rarely Used:
These are usually vectorized to avoid complexity.
- **Vector by Matrix** (3D tensor) - Specialized applications
- **Matrix by Vector** (3D tensor) - Advanced applications
- **Matrix by Matrix** (4D tensor) - Rare; usually vectorized to avoid complexity

---
## 1. Scalar by Scalar (Ordinary Derivative)

### Full Definition
$$\frac{dy}{dx} = \lim_{h \to 0} \frac{y(x+h) - y(x)}{h}$$

This is standard single-variable calculus.

### Properties
- Result: A scalar value
- Represents: Rate of change of $y$ with respect to $x$

### Key Properties
For constant scalars $a, b, c$ and scalar-valued functions $y, f, g$ of scalar $x$:
- **Constant**: $\frac{d}{dx}(c) = 0$
- **Constant factor rule**: $\frac{d}{dx}[cf(x)] = c\frac{df}{dx}$
- **Sum/Difference rule**: $\frac{d}{dx}[f(x) \pm g(x)] = \frac{df}{dx} \pm \frac{dg}{dx}$
- **Linearity**: $\frac{d}{dx}[af(x) + bg(x)] = a\frac{df}{dx} + b\frac{dg}{dx}$
- **Product rule**: $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient rule**: $\frac{d}{dx}\frac{f(x)}{g(x)} = \frac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}$
- **Chain rule**: $\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$
- **Power rule**: $\frac{d}{dx}x^n = nx^{n-1}$
- **Inverse function rule**: $\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}}$ (if $\frac{dy}{dx} \neq 0$) Or $\frac{d}{dx}(f^{-1}(x)) = \frac{1}{f'(f^{-1}(x))}$ (if $f'(f^{-1}(x)) \neq 0$)

### Common Derivatives - Power & Polynomial
- $\frac{d}{dx}(c) = 0$
- $\frac{d}{dx}(x) = 1$
- $\frac{d}{dx}(x^n) = nx^{n-1}$
- $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$
- $\frac{d}{dx}\left(\frac{1}{x}\right) = -\frac{1}{x^2}$

### Common Derivatives - Exponential & Logarithmic
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(a^x) = a^x \ln(a)$
- $\frac{d}{dx}(\ln(x)) = \frac{1}{x}$
- $\frac{d}{dx}(\log_a(x)) = \frac{1}{x \ln(a)}$

### Common Derivatives - Trigonometric
- $\frac{d}{dx}(\sin(x)) = \cos(x)$
- $\frac{d}{dx}(\cos(x)) = -\sin(x)$
- $\frac{d}{dx}(\tan(x)) = \sec^2(x) = \frac{1}{\cos^2(x)}$
- $\frac{d}{dx}(\cot(x)) = -\csc^2(x) = -\frac{1}{\sin^2(x)}$
- $\frac{d}{dx}(\sec(x)) = \sec(x)\tan(x)$
- $\frac{d}{dx}(\csc(x)) = -\csc(x)\cot(x)$

### Common Derivatives - Inverse Trigonometric
- $\frac{d}{dx}(\arcsin(x)) = \frac{1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\arccos(x)) = -\frac{1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\arctan(x)) = \frac{1}{1+x^2}$
- $\frac{d}{dx}(\text{arccot}(x)) = -\frac{1}{1+x^2}$
- $\frac{d}{dx}(\text{arcsec}(x)) = \frac{1}{|x|\sqrt{x^2-1}}$
- $\frac{d}{dx}(\text{arccsc}(x)) = -\frac{1}{|x|\sqrt{x^2-1}}$

### Common Derivatives - Hyperbolic
- $\frac{d}{dx}(\sinh(x)) = \cosh(x)$
- $\frac{d}{dx}(\cosh(x)) = \sinh(x)$
- $\frac{d}{dx}(\tanh(x)) = \text{sech}^2(x) = \frac{1}{\cosh^2(x)}$

### Examples

**Example 1.1:** $y = x^2$
$$\frac{dy}{dx} = 2x$$

**Example 1.2:** $y = e^x$
$$\frac{dy}{dx} = e^x$$

---

## 2. Scalar by Vector (Gradient)

### Full Definition
Let $y: \mathbb{R}^n \to \mathbb{R}$ be a scalar function of vector $\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$.

$$\frac{\partial y}{\partial \mathbf{x}} = \nabla_{\mathbf{x}} y = \begin{bmatrix} \frac{\partial y}{\partial x_1} \\ \frac{\partial y}{\partial x_2} \\ \vdots \\ \frac{\partial y}{\partial x_n} \end{bmatrix} \in \mathbb{R}^{n \times 1}$$

Each element is computed as:
$$\left[\frac{\partial y}{\partial \mathbf{x}}\right]_i = \frac{\partial y}{\partial x_i}$$

### Properties
- Result: Column vector of size $n \times 1$ (numerator layout)
- Represents: Direction of steepest ascent
- Geometric interpretation: Points in direction where $y$ increases most rapidly
- Magnitude: $||\nabla y||$ = rate of steepest ascent
- Orthogonal to level sets: $\nabla y \perp$ contours of constant $y$

### Key Properties
For constant scalars $a, b, c$ and scalar-valued functions $y, f, g$ of vector $\mathbf{x}$:
- **Constant**: $\nabla(c) = \mathbf{0}$ (zero vector)
- **Constant factor rule**: $\nabla(cf) = c\nabla f$
- **Sum/Difference rule**: $\nabla(f \pm g) = \nabla f \pm \nabla g$
- **Linearity**: $\nabla(af + bg) = a\nabla f + b\nabla g$
- **Product rule**: $\nabla(fg) = (\nabla f)g + f(\nabla g)$
- **Quotient rule**: $\nabla\left(\frac{f}{g}\right) = \frac{g\nabla f - f\nabla g}{g^2}$
- **Chain rule**: For composition $y = f(\mathbf{g}(\mathbf{x}))$ where $\mathbf{g}: \mathbb{R}^n \to \mathbb{R}^p$ and $f: \mathbb{R}^p \to \mathbb{R}$:
  $$\frac{\partial y}{\partial x_i} = \sum_j \frac{\partial f}{\partial g_j} \frac{\partial g_j}{\partial x_i}$$
  (Think how $x_i$ can influence $y$ via each intermediate $g_j$, so for each $x_i$ sum up all the influence) \
  Or in compact form: $\frac{\partial y}{\partial \mathbf{x}} = \left(\frac{\partial \mathbf{g}}{\partial \mathbf{x}}\right)^T \nabla_{\mathbf{g}} f$

### Common Derivatives - Linear
- $\frac{\partial (\mathbf{a}^T\mathbf{x})}{\partial \mathbf{x}} = \mathbf{a}$
- $\frac{\partial (\mathbf{x}^T\mathbf{a})}{\partial \mathbf{x}} = \mathbf{a}$
- $\frac{\partial (\mathbf{A}\mathbf{x})_i}{\partial \mathbf{x}} = \mathbf{A}_{i,:}^T$ (i-th row of $\mathbf{A}$)

### Common Derivatives - Quadratic
- $\frac{\partial (\mathbf{x}^T\mathbf{x})}{\partial \mathbf{x}} = 2\mathbf{x}$
- $\frac{\partial (||\mathbf{x}||^2)}{\partial \mathbf{x}} = 2\mathbf{x}$
- $\frac{\partial (||\mathbf{x}||)}{\partial \mathbf{x}} = \frac{\mathbf{x}}{||\mathbf{x}||}$
- $\frac{\partial (\mathbf{x}^T\mathbf{A}\mathbf{x})}{\partial \mathbf{x}} = (\mathbf{A} + \mathbf{A}^T)\mathbf{x}$
- $\frac{\partial (\mathbf{x}^T\mathbf{A}\mathbf{x})}{\partial \mathbf{x}} = 2\mathbf{A}\mathbf{x}$ (if $\mathbf{A}$ symmetric)

### Common Derivatives - Norms & Products
- $\frac{\partial (||\mathbf{A}\mathbf{x} - \mathbf{b}||^2)}{\partial \mathbf{x}} = 2\mathbf{A}^T(\mathbf{A}\mathbf{x} - \mathbf{b})$
- $\frac{\partial (\mathbf{b}^T\mathbf{A}\mathbf{x})}{\partial \mathbf{x}} = \mathbf{A}^T\mathbf{b}$

### Common Derivatives - Nonlinear
- $\frac{\partial (e^{\mathbf{a}^T\mathbf{x}})}{\partial \mathbf{x}} = e^{\mathbf{a}^T\mathbf{x}} \mathbf{a}$
- $\frac{\partial \log(1 + e^{\mathbf{w}^T\mathbf{x}})}{\partial \mathbf{x}} = \sigma(\mathbf{w}^T\mathbf{x}) \mathbf{w}$ where $\sigma(z) = \frac{1}{1+e^{-z}}$

### Examples

**Example 2.1:** Linear function $y = \mathbf{a}^T\mathbf{x} = a_1x_1 + a_2x_2 + \cdots + a_nx_n$

$$\frac{\partial y}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial}{\partial x_1}(a_1x_1 + a_2x_2 + \cdots + a_nx_n) \\ \frac{\partial}{\partial x_2}(a_1x_1 + a_2x_2 + \cdots + a_nx_n) \\ \vdots \\ \frac{\partial}{\partial x_n}(a_1x_1 + a_2x_2 + \cdots + a_nx_n) \end{bmatrix} = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix} = \mathbf{a}$$

**Example 2.2:** Quadratic form $y = \mathbf{x}^T\mathbf{x} = x_1^2 + x_2^2 + \cdots + x_n^2$

$$\frac{\partial y}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial}{\partial x_1}(x_1^2 + x_2^2 + \cdots + x_n^2) \\ \frac{\partial}{\partial x_2}(x_1^2 + x_2^2 + \cdots + x_n^2) \\ \vdots \\ \frac{\partial}{\partial x_n}(x_1^2 + x_2^2 + \cdots + x_n^2) \end{bmatrix} = \begin{bmatrix} 2x_1 \\ 2x_2 \\ \vdots \\ 2x_n \end{bmatrix} = 2\mathbf{x}$$

**Example 2.3:** General quadratic form $y = \mathbf{x}^T\mathbf{A}\mathbf{x}$ where $\mathbf{A} \in \mathbb{R}^{n \times n}$

Expanding: $y = \sum_{i=1}^n \sum_{j=1}^n x_i A_{ij} x_j$

$$\frac{\partial y}{\partial x_k} = \sum_{j=1}^n A_{kj} x_j + \sum_{i=1}^n x_i A_{ik} = (\mathbf{A}\mathbf{x})_k + (\mathbf{A}^T\mathbf{x})_k$$

Therefore:
$$\frac{\partial y}{\partial \mathbf{x}} = (\mathbf{A} + \mathbf{A}^T)\mathbf{x}$$

If $\mathbf{A}$ is symmetric ($\mathbf{A} = \mathbf{A}^T$):
$$\frac{\partial y}{\partial \mathbf{x}} = 2\mathbf{A}\mathbf{x}$$

**Example 2.4:** Affine transformation squared: $y = ||\mathbf{A}\mathbf{x} - \mathbf{b}||^2$

$$y = (\mathbf{A}\mathbf{x} - \mathbf{b})^T(\mathbf{A}\mathbf{x} - \mathbf{b}) = \mathbf{x}^T\mathbf{A}^T\mathbf{A}\mathbf{x} - 2\mathbf{b}^T\mathbf{A}\mathbf{x} + \mathbf{b}^T\mathbf{b}$$

$$\frac{\partial y}{\partial \mathbf{x}} = 2\mathbf{A}^T\mathbf{A}\mathbf{x} - 2\mathbf{A}^T\mathbf{b} = 2\mathbf{A}^T(\mathbf{A}\mathbf{x} - \mathbf{b})$$

**Example 2.5:** Logistic function $y = \log(1 + e^{\mathbf{w}^T\mathbf{x}})$

Let $z = \mathbf{w}^T\mathbf{x}$, then $y = \log(1 + e^z)$

$$\frac{\partial y}{\partial \mathbf{x}} = \frac{\partial y}{\partial z} \cdot \frac{\partial z}{\partial \mathbf{x}} = \frac{e^z}{1 + e^z} \cdot \mathbf{w} = \frac{e^{\mathbf{w}^T\mathbf{x}}}{1 + e^{\mathbf{w}^T\mathbf{x}}} \mathbf{w} = \sigma(\mathbf{w}^T\mathbf{x}) \mathbf{w}$$

where $\sigma(z) = \frac{1}{1+e^{-z}}$ is the sigmoid function.

---

## 3. Scalar by Matrix (Gradient w.r.t. Matrix)

### Full Definition
Let $y: \mathbb{R}^{m \times n} \to \mathbb{R}$ be a scalar function of matrix $\mathbf{X} \in \mathbb{R}^{m \times n}$.

$$\frac{\partial y}{\partial \mathbf{X}} = \begin{bmatrix} \frac{\partial y}{\partial X_{11}} & \frac{\partial y}{\partial X_{12}} & \cdots & \frac{\partial y}{\partial X_{1n}} \\ \frac{\partial y}{\partial X_{21}} & \frac{\partial y}{\partial X_{22}} & \cdots & \frac{\partial y}{\partial X_{2n}} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial y}{\partial X_{m1}} & \frac{\partial y}{\partial X_{m2}} & \cdots & \frac{\partial y}{\partial X_{mn}} \end{bmatrix} \in \mathbb{R}^{m \times n}$$

Each element is:
$$\left[\frac{\partial y}{\partial \mathbf{X}}\right]_{ij} = \frac{\partial y}{\partial X_{ij}}$$

### Properties
- Result: Matrix with same dimensions as $\mathbf{X}$
- Used extensively in matrix optimization and deep learning

### Key Properties
For constant scalars $a, b, c$ and scalar-valued functions $y, f, g$ of matrix $\mathbf{X}$:
- **Constant**: $\frac{\partial c}{\partial \mathbf{X}} = \mathbf{0}$ (zero matrix)
- **Constant factor rule**: $\frac{\partial}{\partial \mathbf{X}}[cf(\mathbf{X})] = c\frac{\partial f}{\partial \mathbf{X}}$
- **Sum/Difference rule**: $\frac{\partial}{\partial \mathbf{X}}[f(\mathbf{X}) \pm g(\mathbf{X})] = \frac{\partial f}{\partial \mathbf{X}} \pm \frac{\partial g}{\partial \mathbf{X}}$
- **Linearity**: $\frac{\partial(af + bg)}{\partial \mathbf{X}} = a\frac{\partial f}{\partial \mathbf{X}} + b\frac{\partial g}{\partial \mathbf{X}}$
- **Product rule**: $\frac{\partial}{\partial \mathbf{X}}[f(\mathbf{X})g(\mathbf{X})] = \left(\frac{\partial f}{\partial \mathbf{X}}\right)g(\mathbf{X}) + f(\mathbf{X})\left(\frac{\partial g}{\partial \mathbf{X}}\right)$
- **Chain rule**: For composition $y = f(\mathbf{g}(\mathbf{X}))$ where $\mathbf{g}: \mathbb{R}^{m \times n} \to \mathbb{R}^{p \times q}$ and $f: \mathbb{R}^{p \times q} \to \mathbb{R}$:
  $$\frac{\partial y}{\partial X_{ij}} = \sum_{k,l} \frac{\partial f}{\partial g_{kl}} \frac{\partial g_{kl}}{\partial X_{ij}}$$
  (Think how $X_{ij}$ can influence $y$ via each intermediate $g_{kl}$, so for each $X_{ij}$ sum up all the influence) \
  Or in compact form: $\frac{\partial f}{\partial \mathbf{X}} = \sum_{k,l} \frac{\partial f}{\partial g_{kl}} \frac{\partial g_{kl}}{\partial \mathbf{X}}$

### Trace Properties
- **Definition**: $\text{tr}(\mathbf{A}) = \sum_i A_{ii}$
- **Transpose**: $\text{tr}(\mathbf{A}^T) = \text{tr}(\mathbf{A})$
- **Linearity**: $\text{tr}(\mathbf{A} + \mathbf{B}) = \text{tr}(\mathbf{A}) + \text{tr}(\mathbf{B})$
- **Scalar**: $\text{tr}(c\mathbf{A}) = c \cdot \text{tr}(\mathbf{A})$
- **Cyclic**: $\text{tr}(\mathbf{AB}) = \text{tr}(\mathbf{BA})$
- **Cyclic (3)**: $\text{tr}(\mathbf{ABC}) = \text{tr}(\mathbf{CAB}) = \text{tr}(\mathbf{BCA})$
- **Product**: $\text{tr}(\mathbf{A}^T\mathbf{B}) = \sum_{ij} A_{ij}B_{ij}$ (Frobenius inner product)

### Common Derivatives - Trace Linear
- $\frac{\partial \text{tr}(\mathbf{X})}{\partial \mathbf{X}} = \mathbf{I}$
- $\frac{\partial \text{tr}(\mathbf{A}\mathbf{X})}{\partial \mathbf{X}} = \mathbf{A}^T$
- $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{A})}{\partial \mathbf{X}} = \mathbf{A}$
- $\frac{\partial \text{tr}(\mathbf{X}\mathbf{A})}{\partial \mathbf{X}} = \mathbf{A}^T$
- $\frac{\partial \text{tr}(\mathbf{A}^T\mathbf{X})}{\partial \mathbf{X}} = \mathbf{A}$

### Common Derivatives - Trace Quadratic
- $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{X})}{\partial \mathbf{X}} = 2\mathbf{X}$
- $\frac{\partial \text{tr}(\mathbf{X}\mathbf{X}^T)}{\partial \mathbf{X}} = 2\mathbf{X}$
- $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{A}\mathbf{X})}{\partial \mathbf{X}} = (\mathbf{A} + \mathbf{A}^T)\mathbf{X}$
- $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{A}\mathbf{X})}{\partial \mathbf{X}} = 2\mathbf{A}\mathbf{X}$ (if $\mathbf{A}$ symmetric)
- $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{A}\mathbf{X}\mathbf{B})}{\partial \mathbf{X}} = \mathbf{A}\mathbf{X}\mathbf{B} + \mathbf{A}^T\mathbf{X}\mathbf{B}^T$
- $\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{A}\mathbf{X}\mathbf{B})}{\partial \mathbf{X}} = 2\mathbf{A}\mathbf{X}\mathbf{B}$ (if $\mathbf{A}$, $\mathbf{B}$ symmetric)

### Common Derivatives - Norms
- $\frac{\partial ||\mathbf{X}||_F^2}{\partial \mathbf{X}} = 2\mathbf{X}$ (Frobenius norm squared)
- $\frac{\partial ||\mathbf{X}||_F}{\partial \mathbf{X}} = \frac{\mathbf{X}}{||\mathbf{X}||_F}$

### Common Derivatives - Determinant & Inverse
- $\frac{\partial \log|\det(\mathbf{X})|}{\partial \mathbf{X}} = (\mathbf{X}^{-1})^T = (\mathbf{X}^T)^{-1}$
- $\frac{\partial \det(\mathbf{X})}{\partial \mathbf{X}} = \det(\mathbf{X})(\mathbf{X}^{-1})^T$
- $\frac{\partial \text{tr}(\mathbf{X}^{-1}\mathbf{A})}{\partial \mathbf{X}} = -(\mathbf{X}^{-1}\mathbf{A}\mathbf{X}^{-1})^T$

### Examples

**Example 3.1:** Linear function with trace $y = \text{tr}(\mathbf{A}\mathbf{X})$ where $\mathbf{A}, \mathbf{X} \in \mathbb{R}^{m \times n}$

Recall: $\text{tr}(\mathbf{A}\mathbf{X}) = \sum_{i=1}^m (\mathbf{A}\mathbf{X})_{ii} = \sum_{i=1}^m \sum_{k=1}^n A_{ik}X_{ki}$

$$\frac{\partial y}{\partial X_{ji}} = A_{ji}$$

Therefore:
$$\frac{\partial y}{\partial \mathbf{X}} = \mathbf{A}^T$$

**Example 3.2:** $y = \text{tr}(\mathbf{X}^T\mathbf{A})$ where $\mathbf{X}, \mathbf{A} \in \mathbb{R}^{m \times n}$

$$\text{tr}(\mathbf{X}^T\mathbf{A}) = \sum_{i=1}^m \sum_{j=1}^n X_{ij}A_{ij}$$

$$\frac{\partial y}{\partial X_{ij}} = A_{ij}$$

Therefore:
$$\frac{\partial y}{\partial \mathbf{X}} = \mathbf{A}$$

**Example 3.3:** Frobenius norm squared $y = ||\mathbf{X}||_F^2 = \text{tr}(\mathbf{X}^T\mathbf{X})$

$$y = \sum_{i=1}^m \sum_{j=1}^n X_{ij}^2$$

$$\frac{\partial y}{\partial X_{ij}} = 2X_{ij}$$

Therefore:
$$\frac{\partial y}{\partial \mathbf{X}} = 2\mathbf{X}$$

**Example 3.4:** Log determinant $y = \log|\det(\mathbf{X})|$ where $\mathbf{X} \in \mathbb{R}^{n \times n}$ is invertible

Using the identity:
$$\frac{\partial \log|\det(\mathbf{X})|}{\partial \mathbf{X}} = (\mathbf{X}^{-1})^T = (\mathbf{X}^T)^{-1}$$

For each element:
$$\frac{\partial \log|\det(\mathbf{X})|}{\partial X_{ij}} = (\mathbf{X}^{-1})_{ji}$$

---

## 4. Vector by Scalar (Tangent Vector)

### Full Definition
Let $\mathbf{y}: \mathbb{R} \to \mathbb{R}^m$ be a vector-valued function of scalar $x$.

$$\frac{d\mathbf{y}}{dx} = \begin{bmatrix} \frac{dy_1}{dx} \\ \frac{dy_2}{dx} \\ \vdots \\ \frac{dy_m}{dx} \end{bmatrix} \in \mathbb{R}^{m \times 1}$$

Each element is:
$$\left[\frac{d\mathbf{y}}{dx}\right]_i = \frac{dy_i}{dx}$$

### Properties
- Result: Column vector of size $m \times 1$
- Represents: Rate of change of each component with respect to $x$
- Common in parametric curves and physics

### Key Properties
For constant scalars $a, b, c$, constant vector $\mathbf{c}$, and vector-valued functions $\mathbf{y}, \mathbf{f}, \mathbf{g}$ of scalar $x$:
- **Constant**: $\frac{d}{dx}(\mathbf{c}) = \mathbf{0}$ ($\mathbf{c}$ is a constant vector)
- **Constant factor rule**: $\frac{d}{dx}(c\mathbf{f}) = c\frac{d\mathbf{f}}{dx}$ ($c$ is a constant scalar)
- **Sum/difference rule**: $\frac{d}{dx}(\mathbf{f} \pm \mathbf{g}) = \frac{d\mathbf{f}}{dx} \pm \frac{d\mathbf{g}}{dx}$
- **Linearity**: $\frac{d}{dx}(a\mathbf{f} + b\mathbf{g}) = a\frac{d\mathbf{f}}{dx} + b\frac{d\mathbf{g}}{dx}$
- **Product rule** (inner product): $\frac{d}{dx}(\mathbf{f}^T\mathbf{g}) = \left(\frac{d\mathbf{f}}{dx}\right)^T\mathbf{g} + \mathbf{f}^T\frac{d\mathbf{g}}{dx}$ (result is scalar)
- **Matrix multiplication**: $\frac{d}{dx}(\mathbf{A}\mathbf{v}(x)) = \mathbf{A}\frac{d\mathbf{v}}{dx}$ (if $\mathbf{A}$ constant)
- **Chain rule**: For composition $\mathbf{y} = \mathbf{f}(g(x))$ where $g: \mathbb{R} \to \mathbb{R}$ and $\mathbf{f}: \mathbb{R} \to \mathbb{R}^m$:
  $$\frac{dy_i}{dx} = \frac{dy_i}{dg} \frac{dg}{dx}$$
  (Each component $y_i$ depends on $x$ through the intermediate scalar $g$)
- **Component-wise**: Differentiate each component separately

### Common Derivatives
- $\frac{d}{dx}(x\mathbf{a}) = \mathbf{a}$
- $\frac{d}{dx}(x^n\mathbf{a}) = nx^{n-1}\mathbf{a}$
- $\frac{d}{dx}(e^x\mathbf{a}) = e^x\mathbf{a}$
- $\frac{d}{dx}(\mathbf{A}\mathbf{v}(x)) = \mathbf{A}\frac{d\mathbf{v}}{dx}$

### Examples

**Example 4.1:** Polynomial vector function
$$\mathbf{y}(x) = \begin{bmatrix} x^2 \\ 2x \\ x^3 \end{bmatrix}$$

$$\frac{d\mathbf{y}}{dx} = \begin{bmatrix} \frac{d}{dx}(x^2) \\ \frac{d}{dx}(2x) \\ \frac{d}{dx}(x^3) \end{bmatrix} = \begin{bmatrix} 2x \\ 2 \\ 3x^2 \end{bmatrix}$$

**Example 4.2:** Exponential scaling $\mathbf{y}(x) = e^x \mathbf{a}$ where $\mathbf{a} \in \mathbb{R}^m$ is constant

$$\frac{d\mathbf{y}}{dx} = \begin{bmatrix} \frac{d}{dx}(e^x a_1) \\ \frac{d}{dx}(e^x a_2) \\ \vdots \\ \frac{d}{dx}(e^x a_m) \end{bmatrix} = \begin{bmatrix} e^x a_1 \\ e^x a_2 \\ \vdots \\ e^x a_m \end{bmatrix} = e^x \mathbf{a}$$

**Example 4.3:** Trigonometric parametric curve
$$\mathbf{y}(t) = \begin{bmatrix} \cos(t) \\ \sin(t) \\ t \end{bmatrix}$$

$$\frac{d\mathbf{y}}{dt} = \begin{bmatrix} -\sin(t) \\ \cos(t) \\ 1 \end{bmatrix}$$

**Example 4.4:** Matrix-vector product $\mathbf{y}(x) = \mathbf{A}\mathbf{v}(x)$ where $\mathbf{A}$ is constant and $\mathbf{v}(x)$ is a vector function

$$\frac{d\mathbf{y}}{dx} = \mathbf{A}\frac{d\mathbf{v}}{dx}$$

**Example 4.5:** Position vector in physics $\mathbf{r}(t) = \begin{bmatrix} x(t) \\ y(t) \\ z(t) \end{bmatrix}$

Velocity: $\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = \begin{bmatrix} \dot{x}(t) \\ \dot{y}(t) \\ \dot{z}(t) \end{bmatrix}$

Acceleration: $\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = \frac{d^2\mathbf{r}}{dt^2} = \begin{bmatrix} \ddot{x}(t) \\ \ddot{y}(t) \\ \ddot{z}(t) \end{bmatrix}$

---

## 5. Vector by Vector (Jacobian Matrix)

### Full Definition
Let $\mathbf{y}: \mathbb{R}^n \to \mathbb{R}^m$ be a vector-valued function of vector $\mathbf{x}$.

$$\mathbf{J} = \frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial y_1}{\partial x_1} & \frac{\partial y_1}{\partial x_2} & \cdots & \frac{\partial y_1}{\partial x_n} \\ \frac{\partial y_2}{\partial x_1} & \frac{\partial y_2}{\partial x_2} & \cdots & \frac{\partial y_2}{\partial x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial y_m}{\partial x_1} & \frac{\partial y_m}{\partial x_2} & \cdots & \frac{\partial y_m}{\partial x_n} \end{bmatrix} \in \mathbb{R}^{m \times n}$$

Each element is:
$$J_{ij} = \left[\frac{\partial \mathbf{y}}{\partial \mathbf{x}}\right]_{ij} = \frac{\partial y_i}{\partial x_j}$$

Alternative notation: Row $i$ is the gradient of $y_i$:
$$\mathbf{J} = \begin{bmatrix} \nabla y_1^T \\ \nabla y_2^T \\ \vdots \\ \nabla y_m^T \end{bmatrix} = \begin{bmatrix} (\frac{\partial y_1}{\partial \mathbf{x}})^T \\ (\frac{\partial y_2}{\partial \mathbf{x}})^T \\ \vdots \\ (\frac{\partial y_m}{\partial \mathbf{x}})^T \end{bmatrix}$$

### Properties
- Result: Matrix of size $m \times n$
- Represents: Local linear approximation of the function
- Determinant: $|\det(\mathbf{J})|$ = volume scaling (change of variables)
- Used in: Newton's method, neural network backpropagation, change of variables

### Key Properties
For constant scalars $a, b, c$, constant vector $\mathbf{c}$, and vector-valued functions $\mathbf{y}, \mathbf{f}, \mathbf{g}$ of vector $\mathbf{x}$:
- **Identity**: $\frac{\partial \mathbf{x}}{\partial \mathbf{x}} = \mathbf{I}$
- **Constant**: $\frac{\partial \mathbf{c}}{\partial \mathbf{x}} = \mathbf{0}$  (zero matrix; $\mathbf{c}$ is a constant vector)
- **Constant factor rule**: $\frac{\partial}{\partial \mathbf{x}}(c\mathbf{f}) = c\frac{\partial \mathbf{f}}{\partial \mathbf{x}}$ ($c$ is a constant scalar)
- **Sum/Difference rule**: $\frac{\partial}{\partial \mathbf{x}}(\mathbf{f} \pm \mathbf{g}) = \frac{\partial \mathbf{f}}{\partial \mathbf{x}} \pm \frac{\partial \mathbf{g}}{\partial \mathbf{x}}$
- **Linearity**: $\frac{\partial(a\mathbf{f} + b\mathbf{g})}{\partial \mathbf{x}} = a\frac{\partial \mathbf{f}}{\partial \mathbf{x}} + b\frac{\partial \mathbf{g}}{\partial \mathbf{x}}$
- **Chain rule**: For composition $\mathbf{y} = \mathbf{f}(\mathbf{g}(\mathbf{x}))$ where $\mathbf{g}: \mathbb{R}^n \to \mathbb{R}^p$ and $\mathbf{f}: \mathbb{R}^p \to \mathbb{R}^m$:
  $$\frac{\partial y_i}{\partial x_j} = \sum_k \frac{\partial y_i}{\partial g_k} \frac{\partial g_k}{\partial x_j}$$
  (Think how $x_j$ can influence $y_i$ via each intermediate $g_k$, so for each $x_j$ sum up all the influence) \
  Or in compact matrix form: $\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \frac{\partial \mathbf{f}}{\partial \mathbf{g}} \cdot \frac{\partial \mathbf{g}}{\partial \mathbf{x}}$ (matrix multiplication of Jacobians)
- **Inverse function**: $\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \left(\frac{\partial \mathbf{x}}{\partial \mathbf{y}}\right)^{-1}$ (if square and invertible)

### Chain Rule for Jacobians (more detail)
If $\mathbf{z} = \mathbf{f}(\mathbf{y})$ and $\mathbf{y} = \mathbf{g}(\mathbf{x})$, (where $\mathbf{x}, \mathbf{y}, \mathbf{z}$ are vectors and $\mathbf{f}, \mathbf{g}$ are vector-valued functions):
$$\frac{\partial \mathbf{z}}{\partial \mathbf{x}} = \frac{\partial \mathbf{z}}{\partial \mathbf{y}} \frac{\partial \mathbf{y}}{\partial \mathbf{x}}$$
Where $\frac{\partial \mathbf{z}}{\partial \mathbf{y}}$, $\frac{\partial \mathbf{y}}{\partial \mathbf{x}}$ are matrices and $\frac{\partial \mathbf{z}}{\partial \mathbf{y}} \frac{\partial \mathbf{y}}{\partial \mathbf{x}}$ is a matrix multiplication.

### Common Derivatives - Linear
- $\frac{\partial \mathbf{x}}{\partial \mathbf{x}} = \mathbf{I}$
- $\frac{\partial (\mathbf{A}\mathbf{x})}{\partial \mathbf{x}} = \mathbf{A}$
- $\frac{\partial (\mathbf{A}\mathbf{x} + \mathbf{b})}{\partial \mathbf{x}} = \mathbf{A}$

### Common Derivatives - Element-wise
- $\frac{\partial (\mathbf{x} \odot \mathbf{x})}{\partial \mathbf{x}} = 2 \cdot \text{diag}(\mathbf{x})$ (element-wise square)
- $\frac{\partial (\mathbf{x}^{\odot n})}{\partial \mathbf{x}} = n \cdot \text{diag}(\mathbf{x}^{\odot (n-1)})$ (element-wise power)
- $\frac{\partial f(\mathbf{x})}{\partial \mathbf{x}} = \text{diag}(f'(\mathbf{x}))$ (element-wise function)

### Common Derivatives - Activation Functions
- $\frac{\partial \sigma(\mathbf{x})}{\partial \mathbf{x}} = \text{diag}(\sigma(\mathbf{x}) \odot (1 - \sigma(\mathbf{x})))$ where $\sigma(x) = \frac{1}{1+e^{-x}}$
- $\frac{\partial \tanh(\mathbf{x})}{\partial \mathbf{x}} = \text{diag}(1 - \tanh^2(\mathbf{x}))$
- $\frac{\partial \text{ReLU}(\mathbf{x})}{\partial \mathbf{x}} = \text{diag}(\mathbb{1}_{\mathbf{x} > 0})$
- $\frac{\partial \text{softmax}(\mathbf{x})}{\partial \mathbf{x}} = \text{diag}(\mathbf{y}) - \mathbf{y}\mathbf{y}^T$ where $\mathbf{y} = \text{softmax}(\mathbf{x})$

### Common Derivatives - Composite
- $\frac{\partial \sigma(\mathbf{W}\mathbf{x} + \mathbf{b})}{\partial \mathbf{x}} = \text{diag}(\sigma'(\mathbf{z})) \cdot \mathbf{W}$ where $\mathbf{z} = \mathbf{W}\mathbf{x} + \mathbf{b}$

### Examples

**Example 5.1:** Linear transformation $\mathbf{y} = \mathbf{A}\mathbf{x}$ where $\mathbf{A} \in \mathbb{R}^{m \times n}$

$$y_i = \sum_{k=1}^n A_{ik}x_k$$

$$\frac{\partial y_i}{\partial x_j} = A_{ij}$$

Therefore:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \mathbf{A}$$

**Example 5.2:** Element-wise square $\mathbf{y} = \mathbf{x} \odot \mathbf{x}$ where $y_i = x_i^2$

$$\frac{\partial y_i}{\partial x_j} = \begin{cases} 2x_i & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$$

Therefore:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \text{diag}(2x_1, 2x_2, \ldots, 2x_n) = 2 \cdot \text{diag}(\mathbf{x})$$

**Example 5.3:** Element-wise function $\mathbf{y} = \sigma(\mathbf{x})$ where $y_i = \sigma(x_i)$

$$\frac{\partial y_i}{\partial x_j} = \begin{cases} \sigma'(x_i) & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$$

Therefore:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \text{diag}(\sigma'(x_1), \sigma'(x_2), \ldots, \sigma'(x_n))$$

**Example 5.4:** Neural network layer $\mathbf{y} = \sigma(\mathbf{W}\mathbf{x} + \mathbf{b})$

Let $\mathbf{z} = \mathbf{W}\mathbf{x} + \mathbf{b}$ and $\mathbf{y} = \sigma(\mathbf{z})$

By chain rule:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \frac{\partial \mathbf{y}}{\partial \mathbf{z}} \frac{\partial \mathbf{z}}{\partial \mathbf{x}} = \text{diag}(\sigma'(\mathbf{z})) \cdot \mathbf{W}$$

**Example 5.5:** Softmax function $\mathbf{y} = \text{softmax}(\mathbf{x})$ where $y_i = \frac{e^{x_i}}{\sum_{k=1}^n e^{x_k}}$

Let $S = \sum_{k=1}^n e^{x_k}$

For $i \neq j$:
$$\frac{\partial y_i}{\partial x_j} = \frac{0 \cdot S - e^{x_i} \cdot e^{x_j}}{S^2} = -\frac{e^{x_i}e^{x_j}}{S^2} = -y_i y_j$$

For $i = j$:
$$\frac{\partial y_i}{\partial x_i} = \frac{e^{x_i} \cdot S - e^{x_i} \cdot e^{x_i}}{S^2} = \frac{e^{x_i}(S - e^{x_i})}{S^2} = y_i(1 - y_i)$$

Therefore:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \text{diag}(\mathbf{y}) - \mathbf{y}\mathbf{y}^T$$

or element-wise:
$$J_{ij} = \begin{cases} y_i(1 - y_i) & \text{if } i = j \\ -y_i y_j & \text{if } i \neq j \end{cases}$$

**Example 5.6:** Polar to Cartesian coordinates
$$\mathbf{y} = \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} r\cos(\theta) \\ r\sin(\theta) \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} r \\ \theta \end{bmatrix}$$

$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -r\sin(\theta) \\ \sin(\theta) & r\cos(\theta) \end{bmatrix}$$

---

## 6. Vector by Matrix (3D Tensor)

### Full Definition
Let $\mathbf{y}: \mathbb{R}^{p \times q} \to \mathbb{R}^m$ be a vector-valued function of matrix $\mathbf{X}$.

$$\frac{\partial \mathbf{y}}{\partial \mathbf{X}} \in \mathbb{R}^{m \times p \times q}$$

This is a 3-dimensional tensor where each element is:
$$\left[\frac{\partial \mathbf{y}}{\partial \mathbf{X}}\right]_{ijk} = \frac{\partial y_i}{\partial X_{jk}}$$

For a fixed output component $i$, the slice $\frac{\partial y_i}{\partial \mathbf{X}} \in \mathbb{R}^{p \times q}$ is a matrix.

### Properties
- Result: 3D tensor with dimensions $m \times p \times q$
- **Structure**: Each "slice" along the first dimension is the gradient of one output component
- Can be viewed as: $m$ matrices of size $p \times q$

### Key Properties
For constant scalars $a, b, c$, constant vector $\mathbf{c}$, and vector-valued functions $\mathbf{y}, \mathbf{f}, \mathbf{g}$ of matrix $\mathbf{X}$:
- **Constant**: $\frac{\partial \mathbf{c}}{\partial \mathbf{X}} = \mathbf{0}$ (zero tensor; $\mathbf{c}$ is a constant vector)
- **Constant factor rule**: $\frac{\partial}{\partial \mathbf{X}}(c\mathbf{f}) = c\frac{\partial \mathbf{f}}{\partial \mathbf{X}}$ ($c$ is a constant scalar)
- **Sum/Difference rule**: $\frac{\partial}{\partial \mathbf{X}}(\mathbf{f} \pm \mathbf{g}) = \frac{\partial \mathbf{f}}{\partial \mathbf{X}} \pm \frac{\partial \mathbf{g}}{\partial \mathbf{X}}$
- **Linearity**: $\frac{\partial(a\mathbf{f} + b\mathbf{g})}{\partial \mathbf{X}} = a\frac{\partial \mathbf{f}}{\partial \mathbf{X}} + b\frac{\partial \mathbf{g}}{\partial \mathbf{X}}$
- **Chain rule**: For composition $\mathbf{y} = \mathbf{f}(\mathbf{g}(\mathbf{X}))$ where $\mathbf{g}: \mathbb{R}^{m \times n} \to \mathbb{R}^{p \times q}$ and $\mathbf{f}: \mathbb{R}^{p \times q} \to \mathbb{R}^r$:
  $$\frac{\partial y_i}{\partial X_{jk}} = \sum_{l,m} \frac{\partial y_i}{\partial g_{lm}} \frac{\partial g_{lm}}{\partial X_{jk}}$$
  (Think how $X_{jk}$ can influence $y_i$ via each intermediate $g_{lm}$, so for each $X_{jk}$ sum up all the influence) \
  Or in compact form: $\frac{\partial \mathbf{y}}{\partial \mathbf{X}} = \sum_{l,m} \frac{\partial \mathbf{y}}{\partial g_{lm}} \frac{\partial g_{lm}}{\partial \mathbf{X}}$
- **Component-wise**: Each output component has its own matrix gradient

### Visualization
$$\frac{\partial \mathbf{y}}{\partial \mathbf{X}} = \begin{bmatrix} \frac{\partial y_1}{\partial \mathbf{X}} \\ \frac{\partial y_2}{\partial \mathbf{X}} \\ \vdots \\ \frac{\partial y_m}{\partial \mathbf{X}} \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} \frac{\partial y_1}{\partial X_{11}} & \cdots & \frac{\partial y_1}{\partial X_{1q}} \\ \vdots & \ddots & \vdots \\ \frac{\partial y_1}{\partial X_{p1}} & \cdots & \frac{\partial y_1}{\partial X_{pq}} \end{bmatrix} \\ \begin{bmatrix} \frac{\partial y_2}{\partial X_{11}} & \cdots & \frac{\partial y_2}{\partial X_{1q}} \\ \vdots & \ddots & \vdots \\ \frac{\partial y_2}{\partial X_{p1}} & \cdots & \frac{\partial y_2}{\partial X_{pq}} \end{bmatrix} \\ \vdots \\ \begin{bmatrix} \frac{\partial y_m}{\partial X_{11}} & \cdots & \frac{\partial y_m}{\partial X_{1q}} \\ \vdots & \ddots & \vdots \\ \frac{\partial y_m}{\partial X_{p1}} & \cdots & \frac{\partial y_m}{\partial X_{pq}} \end{bmatrix} \end{bmatrix}$$

### Common Derivatives
- $\frac{\partial (\mathbf{X}\mathbf{a})}{\partial \mathbf{X}}$: For output $i$: $\frac{\partial y_i}{\partial \mathbf{X}} = \mathbf{e}_i \mathbf{a}^T$
- $\frac{\partial \text{diag}(\mathbf{X})}{\partial \mathbf{X}}$: For output $i$: $\frac{\partial y_i}{\partial \mathbf{X}} = \mathbf{e}_i \mathbf{e}_i^T$

### Examples

**Example 6.1:** Matrix-vector multiplication $\mathbf{y} = \mathbf{X}\mathbf{a}$ where $\mathbf{X} \in \mathbb{R}^{m \times n}$, $\mathbf{a} \in \mathbb{R}^{n \times 1}$

$$y_i = \sum_{k=1}^n X_{ik}a_k$$

$$\frac{\partial y_i}{\partial X_{jk}} = \begin{cases} a_k & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$$

For the $i$-th output:
$$\frac{\partial y_i}{\partial \mathbf{X}} = \mathbf{e}_i \mathbf{a}^T$$

where $\mathbf{e}_i$ is the $i$-th standard basis vector (all zeros except 1 in position $i$).

The full tensor has $m$ such matrices stacked.

**Example 6.2:** Diagonal extraction $\mathbf{y} = \text{diag}(\mathbf{X})$ where $\mathbf{X} \in \mathbb{R}^{n \times n}$, $\mathbf{y} \in \mathbb{R}^n$

$$y_i = X_{ii}$$

$$\frac{\partial y_i}{\partial X_{jk}} = \begin{cases} 1 & \text{if } i = j = k \\ 0 & \text{otherwise} \end{cases}$$

For the $i$-th output:
$$\frac{\partial y_i}{\partial \mathbf{X}} = \mathbf{e}_i \mathbf{e}_i^T$$

This is a matrix with 1 in position $(i,i)$ and zeros elsewhere.

**Example 6.3:** Frobenius norm per row $\mathbf{y} \in \mathbb{R}^m$ where $y_i = ||\mathbf{X}_{i,:}||^2$ and $\mathbf{X} \in \mathbb{R}^{m \times n}$

$$y_i = \sum_{k=1}^n X_{ik}^2$$

$$\frac{\partial y_i}{\partial X_{jk}} = \begin{cases} 2X_{ik} & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$$

For the $i$-th output:
$$\frac{\partial y_i}{\partial \mathbf{X}} = 2\mathbf{e}_i \mathbf{X}_{i,:}^T$$

**Example 6.4:** Bilinear form per output $\mathbf{y} \in \mathbb{R}^m$ where $y_i = \mathbf{u}_i^T \mathbf{X} \mathbf{v}_i$

$$y_i = \sum_{j=1}^p \sum_{k=1}^q u_{ij} X_{jk} v_{ki}$$

$$\frac{\partial y_i}{\partial X_{jk}} = u_{ij} v_{ki}$$

For the $i$-th output:
$$\frac{\partial y_i}{\partial \mathbf{X}} = \mathbf{u}_i \mathbf{v}_i^T$$

---

## 7. Matrix by Scalar (Matrix Tangent)

### Full Definition
Let $\mathbf{Y}: \mathbb{R} \to \mathbb{R}^{m \times n}$ be a matrix-valued function of scalar $x$.

$$\frac{d\mathbf{Y}}{dx} = \begin{bmatrix} \frac{dY_{11}}{dx} & \frac{dY_{12}}{dx} & \cdots & \frac{dY_{1n}}{dx} \\ \frac{dY_{21}}{dx} & \frac{dY_{22}}{dx} & \cdots & \frac{dY_{2n}}{dx} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{dY_{m1}}{dx} & \frac{dY_{m2}}{dx} & \cdots & \frac{dY_{mn}}{dx} \end{bmatrix} \in \mathbb{R}^{m \times n}$$

Each element is:
$$\left[\frac{d\mathbf{Y}}{dx}\right]_{ij} = \frac{dY_{ij}}{dx}$$

### Properties
- Result: Matrix with same dimensions as $\mathbf{Y}$
- Represents: Rate of change of each matrix element
- Common in: Differential equations, control theory

### Key Properties
For constant scalars $a, b, c$, constant matrix $\mathbf{C}$, and matrix-valued functions $\mathbf{Y}, \mathbf{A}, \mathbf{B}$ of scalar $x$:
- **Constant**: $\frac{d}{dx}(\mathbf{C}) = \mathbf{0}$ (zero matrix; $\mathbf{C}$ is a constant matrix)
- **Constant factor rule**: $\frac{d}{dx}(c\mathbf{A}) = c\frac{d\mathbf{A}}{dx}$ ($c$ is a constant scalar)
- **Sum/Difference rule**: $\frac{d}{dx}(\mathbf{A} \pm \mathbf{B}) = \frac{d\mathbf{A}}{dx} \pm \frac{d\mathbf{B}}{dx}$
- **Linearity**: $\frac{d}{dx}(a\mathbf{A} + b\mathbf{B}) = a\frac{d\mathbf{A}}{dx} + b\frac{d\mathbf{B}}{dx}$
- **Product rule**: $\frac{d}{dx}(\mathbf{A}(x)\mathbf{B}(x)) = \frac{d\mathbf{A}}{dx}\mathbf{B} + \mathbf{A}\frac{d\mathbf{B}}{dx}$
  - Note: Order matters in matrix multiplication
- **Chain rule**: For composition $\mathbf{Y} = \mathbf{f}(g(x))$ where $g: \mathbb{R} \to \mathbb{R}$ and $\mathbf{f}: \mathbb{R} \to \mathbb{R}^{m \times n}$:
  $$\frac{dY_{ij}}{dx} = \frac{dY_{ij}}{dg} \frac{dg}{dx}$$
  (Each element $Y_{ij}$ depends on $x$ through the intermediate scalar $g$) \
  Or in matrix form: $\frac{d}{dx}\mathbf{Y}(g(x)) = \frac{d\mathbf{Y}}{dg} \frac{dg}{dx}$ (element-wise)
- **Component-wise**: Differentiate each element separately
- **Trace rule**: $\frac{d}{dx}\text{tr}(\mathbf{A}(x)) = \text{tr}\left(\frac{d\mathbf{A}}{dx}\right)$
- **Transpose**: $\frac{d}{dx}(\mathbf{A}^T) = \left(\frac{d\mathbf{A}}{dx}\right)^T$

### Common Derivatives
- $\frac{d}{dx}(\mathbf{C}) = \mathbf{0}$ (constant matrix)
- $\frac{d}{dx}(x\mathbf{A}) = \mathbf{A}$
- $\frac{d}{dx}(x^n\mathbf{A}) = nx^{n-1}\mathbf{A}$
- $\frac{d}{dx}(e^x\mathbf{A}) = e^x\mathbf{A}$
- $\frac{d}{dt}(e^{t\mathbf{A}}) = \mathbf{A}e^{t\mathbf{A}} = e^{t\mathbf{A}}\mathbf{A}$ (if $\mathbf{A}$ constant)
- $\frac{d}{dx}(\mathbf{A} + x\mathbf{B}) = \mathbf{B}$

### Examples

**Example 7.1:** Scalar scaling $\mathbf{Y}(x) = x \mathbf{A}$ where $\mathbf{A} \in \mathbb{R}^{m \times n}$ is constant

$$Y_{ij}(x) = x A_{ij}$$

$$\frac{dY_{ij}}{dx} = A_{ij}$$

Therefore:
$$\frac{d\mathbf{Y}}{dx} = \mathbf{A}$$

**Example 7.2:** Exponential matrix $\mathbf{Y}(t) = e^{t\mathbf{A}}$ where $\mathbf{A} \in \mathbb{R}^{n \times n}$ is constant

Using matrix exponential properties:
$$\frac{d}{dt}e^{t\mathbf{A}} = \mathbf{A}e^{t\mathbf{A}} = e^{t\mathbf{A}}\mathbf{A}$$

**Example 7.3:** Polynomial matrix
$$\mathbf{Y}(x) = \begin{bmatrix} x^2 & 2x & 1 \\ x^3 & x & x^2 \end{bmatrix}$$

$$\frac{d\mathbf{Y}}{dx} = \begin{bmatrix} 2x & 2 & 0 \\ 3x^2 & 1 & 2x \end{bmatrix}$$

**Example 7.4:** Linear combination $\mathbf{Y}(t) = \mathbf{A} + t\mathbf{B}$ where $\mathbf{A}, \mathbf{B}$ are constant

$$\frac{d\mathbf{Y}}{dt} = \mathbf{B}$$

**Example 7.5:** Rotation matrix in 2D $\mathbf{Y}(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$

$$\frac{d\mathbf{Y}}{d\theta} = \begin{bmatrix} -\sin\theta & -\cos\theta \\ \cos\theta & -\sin\theta \end{bmatrix}$$

**Example 7.6:** Matrix differential equation $\frac{d\mathbf{Y}}{dt} = \mathbf{A}\mathbf{Y}$ with solution $\mathbf{Y}(t) = e^{t\mathbf{A}}\mathbf{Y}_0$

The derivative is:
$$\frac{d\mathbf{Y}}{dt} = \mathbf{A}e^{t\mathbf{A}}\mathbf{Y}_0 = \mathbf{A}\mathbf{Y}(t)$$

---

## 8. Matrix by Vector (3D Tensor)

### Full Definition
Let $\mathbf{Y}: \mathbb{R}^p \to \mathbb{R}^{m \times n}$ be a matrix-valued function of vector $\mathbf{x} \in \mathbb{R}^p$.

$$\frac{\partial \mathbf{Y}}{\partial \mathbf{x}} \in \mathbb{R}^{m \times n \times p}$$

This is a 3-dimensional tensor where each element is:
$$\left[\frac{\partial \mathbf{Y}}{\partial \mathbf{x}}\right]_{ijk} = \frac{\partial Y_{ij}}{\partial x_k}$$

For a fixed input component $k$, the slice $\frac{\partial \mathbf{Y}}{\partial x_k} \in \mathbb{R}^{m \times n}$ is a matrix.

### Properties
- Result: 3D tensor with dimensions $m \times n \times p$
- **Structure**: Each "slice" along the third dimension shows how the output matrix changes with respect to one input component
- Can be viewed as: $p$ matrices of size $m \times n$

### Key Properties
For constant scalars $a, b, c$, constant matrix $\mathbf{C}$, and matrix-valued functions $\mathbf{Y}, \mathbf{A}, \mathbf{B}$ of vector $\mathbf{x}$:
- **Constant**: $\frac{\partial \mathbf{C}}{\partial \mathbf{x}} = \mathbf{0}$ (zero tensor; $\mathbf{C}$ is a constant matrix)
- **Constant factor rule**: $\frac{\partial}{\partial \mathbf{x}}(c\mathbf{A}) = c\frac{\partial \mathbf{A}}{\partial \mathbf{x}}$ ($c$ is a constant scalar)
- **Sum/Difference rule**: $\frac{\partial}{\partial \mathbf{x}}(\mathbf{A} \pm \mathbf{B}) = \frac{\partial \mathbf{A}}{\partial \mathbf{x}} \pm \frac{\partial \mathbf{B}}{\partial \mathbf{x}}$
- **Linearity**: $\frac{\partial(a\mathbf{A} + b\mathbf{B})}{\partial \mathbf{x}} = a\frac{\partial \mathbf{A}}{\partial \mathbf{x}} + b\frac{\partial \mathbf{B}}{\partial \mathbf{x}}$
- **Chain rule**: For composition $\mathbf{Y} = \mathbf{f}(\mathbf{g}(\mathbf{x}))$ where $\mathbf{g}: \mathbb{R}^p \to \mathbb{R}^q$ and $\mathbf{f}: \mathbb{R}^q \to \mathbb{R}^{m \times n}$:
  $$\frac{\partial Y_{ij}}{\partial x_k} = \sum_l \frac{\partial Y_{ij}}{\partial g_l} \frac{\partial g_l}{\partial x_k}$$
  (Think how $x_k$ can influence $Y_{ij}$ via each intermediate $g_l$, so for each $x_k$ sum up all the influence)
- **Component-wise**: Each input component has its own matrix slice

### Visualization
$$\frac{\partial \mathbf{Y}}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial \mathbf{Y}}{\partial x_1} & \frac{\partial \mathbf{Y}}{\partial x_2} & \cdots & \frac{\partial \mathbf{Y}}{\partial x_p} \end{bmatrix}$$

where each $\frac{\partial \mathbf{Y}}{\partial x_k}$ is an $m \times n$ matrix.

### Common Derivatives
- $\frac{\partial (\mathbf{x}\mathbf{a}^T)}{\partial \mathbf{x}}$: For input $k$: $\frac{\partial \mathbf{Y}}{\partial x_k} = \mathbf{e}_k \mathbf{a}^T$
- $\frac{\partial \text{diag}(\mathbf{x})}{\partial \mathbf{x}}$: For input $k$: $\frac{\partial \mathbf{Y}}{\partial x_k} = \mathbf{e}_k \mathbf{e}_k^T$
- $\frac{\partial (\mathbf{A}\text{diag}(\mathbf{x}))}{\partial \mathbf{x}}$: For input $k$: $\frac{\partial \mathbf{Y}}{\partial x_k} = \mathbf{A}_{:,k} \mathbf{e}_k^T$

### Examples

**Example 8.1:** Outer product $\mathbf{Y} = \mathbf{x}\mathbf{a}^T$ where $\mathbf{x} \in \mathbb{R}^{m \times 1}$, $\mathbf{a} \in \mathbb{R}^{n \times 1}$ (constant)

$$Y_{ij} = x_i a_j$$

$$\frac{\partial Y_{ij}}{\partial x_k} = \begin{cases} a_j & \text{if } i = k \\ 0 & \text{if } i \neq k \end{cases}$$

For the $k$-th input component:
$$\frac{\partial \mathbf{Y}}{\partial x_k} = \mathbf{e}_k \mathbf{a}^T$$

This is a matrix with row $k$ equal to $\mathbf{a}^T$ and all other rows zero.

**Example 8.2:** Diagonal matrix from vector $\mathbf{Y} = \text{diag}(\mathbf{x})$ where $\mathbf{x} \in \mathbb{R}^n$

$$Y_{ij} = \begin{cases} x_i & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$$

$$\frac{\partial Y_{ij}}{\partial x_k} = \begin{cases} 1 & \text{if } i = j = k \\ 0 & \text{otherwise} \end{cases}$$

For the $k$-th input component:
$$\frac{\partial \mathbf{Y}}{\partial x_k} = \mathbf{e}_k \mathbf{e}_k^T$$

This is a matrix with 1 in position $(k,k)$ and zeros elsewhere.

**Example 8.3:** Scaled matrix $\mathbf{Y} = \mathbf{A}\text{diag}(\mathbf{x})$ where $\mathbf{A} \in \mathbb{R}^{m \times n}$ is constant

$$Y_{ij} = A_{ij}x_j$$

$$\frac{\partial Y_{ij}}{\partial x_k} = \begin{cases} A_{ij} & \text{if } j = k \\ 0 & \text{if } j \neq k \end{cases}$$

For the $k$-th input component:
$$\frac{\partial \mathbf{Y}}{\partial x_k} = \mathbf{A}_{:,k} \mathbf{e}_k^T$$

This is a matrix with column $k$ equal to $\mathbf{A}_{:,k}$ and all other columns zero.

---

## 9. Matrix by Matrix (4D Tensor)

### Full Definition
Let $\mathbf{Y}: \mathbb{R}^{p \times q} \to \mathbb{R}^{m \times n}$ be a matrix-valued function of matrix $\mathbf{X} \in \mathbb{R}^{p \times q}$.

$$\frac{\partial \mathbf{Y}}{\partial \mathbf{X}} \in \mathbb{R}^{m \times n \times p \times q}$$

This is a 4-dimensional tensor where each element is:
$$\left[\frac{\partial \mathbf{Y}}{\partial \mathbf{X}}\right]_{ijkl} = \frac{\partial Y_{ij}}{\partial X_{kl}}$$

### Properties
- Result: 4D tensor with dimensions $m \times n \times p \times q$
- Most complex derivative type in standard matrix calculus
- Often vectorized in practice to reduce to vector-by-vector case
- **Vectorization**: Usually flatten to Jacobian: $\frac{\partial \text{vec}(\mathbf{Y})}{\partial \text{vec}(\mathbf{X})} \in \mathbb{R}^{mn \times pq}$


### Key Properties
For constant scalars $a, b, c$, constant matrix $\mathbf{C}$, and matrix-valued functions $\mathbf{Y}, \mathbf{A}, \mathbf{B}$ of matrix $\mathbf{X}$:
- **Constant**: $\frac{\partial \mathbf{C}}{\partial \mathbf{X}} = \mathbf{0}$ (zero 4D tensor; $\mathbf{C}$ is a constant matrix)
- **Constant factor rule**: $\frac{\partial}{\partial \mathbf{X}}(c\mathbf{A}) = c\frac{\partial \mathbf{A}}{\partial \mathbf{X}}$ ($c$ is a constant scalar)
- **Sum/Difference rule**: $\frac{\partial}{\partial \mathbf{X}}(\mathbf{A} \pm \mathbf{B}) = \frac{\partial \mathbf{A}}{\partial \mathbf{X}} \pm \frac{\partial \mathbf{B}}{\partial \mathbf{X}}$
- **Linearity**: $\frac{\partial(a\mathbf{A} + b\mathbf{B})}{\partial \mathbf{X}} = a\frac{\partial \mathbf{A}}{\partial \mathbf{X}} + b\frac{\partial \mathbf{B}}{\partial \mathbf{X}}$
- **Chain rule**: For $\mathbf{Y} = \mathbf{f}(\mathbf{g}(\mathbf{X}))$:
  $$\frac{\partial Y_{ij}}{\partial X_{kl}} = \sum_{m,n} \frac{\partial Y_{ij}}{\partial g_{mn}} \frac{\partial g_{mn}}{\partial X_{kl}}$$
  (Think how $X_{kl}$ can influence $Y_{ij}$ via each intermediate $g_{mn}$, so for each $X_{kl}$ sum up all the influence)
- **Identity**: $\frac{\partial \mathbf{X}}{\partial \mathbf{X}}$ has $\left[\frac{\partial \mathbf{X}}{\partial \mathbf{X}}\right]_{ijkl} = \delta_{ik}\delta_{jl}$ (Kronecker deltas)
- **Kronecker product**: $\frac{\partial \text{vec}(\mathbf{AXB})}{\partial \text{vec}(\mathbf{X})} = \mathbf{B}^T \otimes \mathbf{A}$

### Vectorization Approach
In practice, we often "flatten" matrices into vectors:
- Let $\mathbf{y} = \text{vec}(\mathbf{Y}) \in \mathbb{R}^{mn}$
- Let $\mathbf{x} = \text{vec}(\mathbf{X}) \in \mathbb{R}^{pq}$
- Then compute the Jacobian $\frac{\partial \mathbf{y}}{\partial \mathbf{x}} \in \mathbb{R}^{mn \times pq}$

### Common Derivatives
- $\frac{\partial \mathbf{X}}{\partial \mathbf{X}}$: Element $(i,j,k,l)$ = $\delta_{ik}\delta_{jl}$ (identity)
- $\frac{\partial (\mathbf{A}\mathbf{X}\mathbf{B})}{\partial \mathbf{X}}$: Element $(i,j,k,l)$ = $A_{ik}B_{lj}$
- $\frac{\partial f(\mathbf{X})}{\partial \mathbf{X}}$ (element-wise): Diagonal in vectorized form
- $\frac{\partial \mathbf{X}^T}{\partial \mathbf{X}}$: Element $(i,j,k,l)$ = $\delta_{il}\delta_{jk}$ (permutation)
- $\frac{\partial (\mathbf{X}^2)}{\partial \mathbf{X}}$: Element $(i,j,k,l)$ = $\delta_{ik}X_{lj} + \delta_{jl}X_{ik}$

### Examples

**Example 9.1:** Linear transformation $\mathbf{Y} = \mathbf{A}\mathbf{X}\mathbf{B}$ where $\mathbf{A} \in \mathbb{R}^{m \times p}$, $\mathbf{B} \in \mathbb{R}^{q \times n}$ are constant

$$Y_{ij} = \sum_{k=1}^p \sum_{l=1}^q A_{ik}X_{kl}B_{lj}$$

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = A_{ik}B_{lj}$$

This can be written compactly as:
$$\frac{\partial \mathbf{Y}}{\partial \mathbf{X}}_{ijkl} = A_{ik}B_{lj}$$

Using vectorization: If $\mathbf{y} = \text{vec}(\mathbf{Y})$ and $\mathbf{x} = \text{vec}(\mathbf{X})$:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \mathbf{B}^T \otimes \mathbf{A}$$

where $\otimes$ is the Kronecker product.

**Example 9.2:** Element-wise function $\mathbf{Y} = f(\mathbf{X})$ where $Y_{ij} = f(X_{ij})$

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = \begin{cases} f'(X_{ij}) & \text{if } (i,j) = (k,l) \\ 0 & \text{otherwise} \end{cases}$$

This is a sparse tensor, mostly zeros.

**Example 9.3:** Transpose $\mathbf{Y} = \mathbf{X}^T$ where $\mathbf{X} \in \mathbb{R}^{m \times n}$, $\mathbf{Y} \in \mathbb{R}^{n \times m}$

$$Y_{ij} = X_{ji}$$

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = \begin{cases} 1 & \text{if } (i,j) = (l,k) \\ 0 & \text{otherwise} \end{cases}$$

**Example 9.4:** Hadamard product $\mathbf{Y} = \mathbf{A} \odot \mathbf{X}$ where $\mathbf{A}$ is constant, $Y_{ij} = A_{ij}X_{ij}$

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = \begin{cases} A_{ij} & \text{if } (i,j) = (k,l) \\ 0 & \text{otherwise} \end{cases}$$

**Example 9.5:** Symmetric part $\mathbf{Y} = \frac{1}{2}(\mathbf{X} + \mathbf{X}^T)$ where $\mathbf{X} \in \mathbb{R}^{n \times n}$

$$Y_{ij} = \frac{1}{2}(X_{ij} + X_{ji})$$

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = \begin{cases} \frac{1}{2} & \text{if } (k,l) = (i,j) \\ \frac{1}{2} & \text{if } (k,l) = (j,i) \\ 0 & \text{otherwise} \end{cases}$$

For $i \neq j$, two entries contribute. For $i = j$, only one entry contributes.

**Example 9.6:** Matrix square $\mathbf{Y} = \mathbf{X}^2 = \mathbf{X}\mathbf{X}$ where $\mathbf{X} \in \mathbb{R}^{n \times n}$

$$Y_{ij} = \sum_{k=1}^n X_{ik}X_{kj}$$

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = \frac{\partial}{\partial X_{kl}}\sum_{m=1}^n X_{im}X_{mj}$$

This gives contributions from two terms:
- When $m = k$: $X_{kj}$ (if $i = k$, this contributes $X_{kj}$; otherwise contributes $\delta_{ik}X_{kj}$)
- When $m = l$: $X_{il}$ (if $j = l$, this contributes $X_{il}$; otherwise contributes $\delta_{jl}X_{il}$)

$$\frac{\partial Y_{ij}}{\partial X_{kl}} = \delta_{ik}X_{lj} + \delta_{jl}X_{ik}$$

where $\delta_{ik}$ is the Kronecker delta.

Using vectorization: If $\mathbf{y} = \text{vec}(\mathbf{Y})$ and $\mathbf{x} = \text{vec}(\mathbf{X})$:
$$\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \mathbf{I}_n \otimes \mathbf{X} + \mathbf{X}^T \otimes \mathbf{I}_n$$

---

## Summary Table: All Derivatives with Key Examples

| Type | Dimensions | Key Example | Result |
|------|-----------|-------------|---------|
| Scalar/Scalar | $1 \to 1$ | $y = x^2$ | $\frac{dy}{dx} = 2x$ |
| Scalar/Vector | $n \to 1$ | $y = \mathbf{x}^T\mathbf{x}$ | $\frac{\partial y}{\partial \mathbf{x}} = 2\mathbf{x}$ |
| Scalar/Matrix | $m \times n \to 1$ | $y = \text{tr}(\mathbf{X}^T\mathbf{X})$ | $\frac{\partial y}{\partial \mathbf{X}} = 2\mathbf{X}$ |
| Vector/Scalar | $1 \to m$ | $\mathbf{y} = t\mathbf{a}$ | $\frac{d\mathbf{y}}{dt} = \mathbf{a}$ |
| Vector/Vector | $n \to m$ | $\mathbf{y} = \mathbf{A}\mathbf{x}$ | $\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \mathbf{A}$ |
| Vector/Matrix | $p \times q \to m$ | $\mathbf{y} = \mathbf{X}\mathbf{a}$ | 3D tensor |
| Matrix/Scalar | $1 \to m \times n$ | $\mathbf{Y} = t\mathbf{A}$ | $\frac{d\mathbf{Y}}{dt} = \mathbf{A}$ |
| Matrix/Vector | $p \to m \times n$ | $\mathbf{Y} = \mathbf{x}\mathbf{a}^T$ | 3D tensor |
| Matrix/Matrix | $p \times q \to m \times n$ | $\mathbf{Y} = \mathbf{A}\mathbf{X}\mathbf{B}$ | 4D tensor |

---

## Universal Properties (All Types)

- **Linearity**: $\frac{\partial}{\partial \mathbf{x}}(af + bg) = a\frac{\partial f}{\partial \mathbf{x}} + b\frac{\partial g}{\partial \mathbf{x}}$
- **Sum rule**: $\frac{\partial}{\partial \mathbf{x}}(f + g) = \frac{\partial f}{\partial \mathbf{x}} + \frac{\partial g}{\partial \mathbf{x}}$
- **Constant factor**: $\frac{\partial}{\partial \mathbf{x}}(cf) = c\frac{\partial f}{\partial \mathbf{x}}$
- **Constant**: $\frac{\partial}{\partial \mathbf{x}}(c) = 0$
- **Chain rule exists** (form varies by type)

---

This completes the comprehensive treatment of all matrix calculus derivative types with integrated key properties and common derivatives!