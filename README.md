# Calculator App

A simple, responsive web-based calculator built with vanilla HTML, CSS, and JavaScript.

![Calculator Preview](https://img.shields.io/badge/status-active-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Handle floating-point numbers with precision
- **Clear Function**: Reset the calculator with the `C` button
- **Delete Function**: Remove the last entered character with `DEL`
- **Error Handling**: Displays "Error" for division by zero
- **Responsive Design**: Clean, centered layout that works on various screen sizes
- **Modern UI**: Smooth button hover transitions and shadow effects

## Live Demo

**[Try the Calculator](https://vercel.com/mihnea-rafael-dunarintus-projects/calculator-app)** - Deployed on Vercel

Or open `index.html` locally in any modern web browser.

## Project Structure

```
calculator_app/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── app.js          # Calculator logic and event handlers
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator_app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd calculator_app
   ```

3. Open `index.html` in your browser:
   ```bash
   # On Linux
   xdg-open index.html

   # On macOS
   open index.html

   # On Windows
   start index.html
   ```

   Or simply double-click the `index.html` file.

## Usage

| Button | Function |
|--------|----------|
| `0-9` | Enter digits |
| `.` | Add decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `x` | Multiplication |
| `/` | Division |
| `=` | Calculate result |
| `C` | Clear all |
| `DEL` | Delete last character |

### Example Operations

- **Addition**: `5` → `+` → `3` → `=` → Result: `8`
- **Division**: `10` → `/` → `2` → `=` → Result: `5`
- **Decimals**: `3` → `.` → `14` → `+` → `2` → `=` → Result: `5.14`

## Technical Details

### Architecture

The calculator uses a simple state-based architecture:

- **`operator1`**: Stores the first operand
- **`operator2`**: Stores the second operand
- **`operation`**: Stores the current operation symbol

### Key Functions

| Function | Description |
|----------|-------------|
| `addOperatorButtonListener()` | Attaches click handlers to operator buttons |
| `addNumberButtonListener()` | Attaches click handlers to number buttons |
| `evaluate()` | Performs the calculation and updates the display |
| `clearAll()` | Resets all state and display to initial values |
| `deleteLast()` | Removes the last character and updates state |
| `fixFloat()` | Handles floating-point precision (12 decimal places) |

### Styling

- **Light blue background** for a calming visual experience
- **Grey calculator body** with rounded corners and subtle shadow
- **White display** with right-aligned text for traditional calculator feel
- **Responsive buttons** with hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built as a learning project for vanilla JavaScript DOM manipulation
- Inspired by classic calculator designs
