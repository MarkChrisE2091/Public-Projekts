# Complete Markdown Guide with Math

## Basic Markdown Syntax

### Headers
```markdown
# Header 1 (largest)
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6 (smallest)
```

### Text Formatting
- **Bold**: `**text**` or `__text__`
- *Italic*: `*text*` or `_text_`
- ***Bold and italic***: `***text***`
- ~~Strikethrough~~: `~~text~~`

### Lists
**Unordered:**
```markdown
- Item 1
- Item 2
- Item 3
```

**Ordered:**
```markdown
1. First item
2. Second item
3. Third item
```

### Links and Images
- **Links**: `[link text](URL)`
- **Images**: `![alt text](image URL)`

### Code
- **Inline code**: `` `code` ``
- **Code blocks**:
  ````markdown
  ```
  Your code here
  ```
  ````
- **With syntax highlighting**:
  ````markdown
  ```python
  def hello():
      print("Hello!")
  ```
  ````

### Quotes and Lines
- **Blockquotes**: `> This is a quote`
- **Horizontal rule**: `---` or `***`

### Tables
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More data|
| Row 2    | Data     | More data|
```

## Math Formulas (LaTeX in Markdown)

### Basic Syntax
- **Inline math**: `$formula$` → $x = 5$
- **Block math**: `$$formula$$` → Display centered

### Essential Math Elements

#### Superscripts & Subscripts
- `x^2` → x²
- `x_1` → x₁
- `x_1^2` → x₁²
- `x^{10}` → x¹⁰ (multiple characters)

#### Fractions
- `\frac{1}{2}` → ½
- `\frac{x+1}{x-1}` → (x+1)/(x-1)

#### Roots
- `\sqrt{x}` → √x
- `\sqrt[3]{x}` → ∛x

#### Greek Letters
- Lowercase: `\alpha \beta \gamma \delta \pi \theta`
- Uppercase: `\Alpha \Beta \Gamma \Delta \Pi \Theta`

#### Common Operators
- `\pm` → ±
- `\times` → ×
- `\div` → ÷
- `\neq` → ≠
- `\leq \geq` → ≤ ≥

#### Functions
- `\sin(x) \cos(x) \tan(x)`
- `\log(x) \ln(x)`

### Example Formulas

**Quadratic Formula:**
```markdown
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
```
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Pythagorean Theorem:**
```markdown
$$a^2 + b^2 = c^2$$
```
$$a^2 + b^2 = c^2$$

**Summation:**
```markdown
$$\sum_{i=1}^{n} x_i = x_1 + x_2 + ... + x_n$$
```
$$\sum_{i=1}^{n} x_i = x_1 + x_2 + ... + x_n$$

**Integral:**
```markdown
$$\int_0^1 x^2 dx = \frac{1}{3}$$
```
$$\int_0^1 x^2 dx = \frac{1}{3}$$

**Matrix:**
```markdown
$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$$
```
$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$$

## Pro Tips

### Markdown
- Start simple with headers and basic formatting
- Most platforms show live previews
- Use proper spacing around elements

### Math
- Math usually use **LaTeX** or **KaTeX** syntax
- Use `{}` for multiple characters: `x^{2y}` not `x^2y`
- Add spaces with `\,` (small) or `\quad` (large)
- Use `\text{...}` for regular text in formulas
- Math support varies by platform (GitHub ✓, Discord ✗)

## Platform Support
- **GitHub**: Full Markdown + Math support
- **Jupyter**: Full LaTeX support
- **Documentation sites**: Usually supported
- **Social platforms**: Limited math support