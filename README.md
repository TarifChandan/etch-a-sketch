# 🎨 Interactive Etch-A-Sketch Web App

## 🌟 Introduction

A browser-based drawing grid inspired by the classic Etch-A-Sketch toy. This project demonstrates core frontend development skills through dynamic DOM manipulation, responsive design, and interactive features. Hover over cells to create art in black-and-white or colorful modes with progressive darkening effects.

## ✨ Features

### 🖌️ Drawing Modes

- **Black Mode**: Cells turn black when hovered (default)
- **Color Mode**:
  - Random RGB color on first hover
  - 10% darkening effect on subsequent hovers
  - Resets to new random color after reaching full darkness

### ⚙️ Customization

- **Adjustable Grid Size**:
- **Responsive Design**: Cells auto-size to fit container
- **Border Handling**: Perfectly balanced cell borders

### 🎛️ Controls

1. **Grid Size Button**: Set custom dimensions up to 100x100 cells
2. **Color Mode Toggle**: Switch between black/color modes
3. **Clear Grid**: Reset all cells to white

## 🛠️ Demonstrated Skills

### **DOM Mastery**

- Dynamically generated grid using JavaScript `createElement`
- Real-time CSS updates via `style` property manipulation

### **Algorithmic Thinking**

- Precise cell sizing calculations accounting for container borders
- 10% incremental darkening logic with opacity reset thresholds
- Grid generation that adapts to user-defined dimensions (16x16 to 100x100)

### **State Management**

- Toggle system for color/black modes (`isColorModeActive` boolean)
- Darkening progression tracking (`darknessLevel` variable)
- Conditional rendering based on interaction states
