# 🤝 Contributing to TimePlanner

First off, thanks for taking the time to contribute! ❤️

The following is a set of guidelines for contributing to TimePlanner. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. By participating, you are expected to uphold this code.

### Our Standards

- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints and experiences
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards other community members

## 🚀 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include browser information and operating system**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### 🔧 Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow our style guides
- Include thoughtfully-worded, well-structured tests
- Document new code based on our documentation style guide
- End all files with a newline

## 🎨 Style Guides

### JavaScript Style Guide

```javascript
// ✅ Good
const calculateAvailableTime = (work, sleep, sport) => {
    const totalWeekHours = 168;
    return totalWeekHours - work - sleep * 7 - sport;
};

// ❌ Avoid
function calc(w,s,sp){
    return 168-w-s*7-sp;
}
```

**Key Principles:**
- Use `const` and `let`, avoid `var`
- Use arrow functions for short functions
- Use descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Use ES6+ features appropriately

### CSS Style Guide

```css
/* ✅ Good */
.schedule-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    border-radius: 6px;
    background-color: #f8fafc;
    transition: background-color 0.15s ease;
}

/* ❌ Avoid */
.si{padding:10px;background:#f8fafc}
```

**Key Principles:**
- Use meaningful class names
- Follow BEM methodology when appropriate
- Use CSS Custom Properties for theming
- Mobile-first responsive design
- Consistent spacing using multiples of 4px
- Use modern CSS features (Grid, Flexbox)

### HTML Style Guide

```html
<!-- ✅ Good -->
<button 
    class="control-btn" 
    onclick="changeValue('work', 1)"
    aria-label="Increase work hours"
    type="button">
    +
</button>

<!-- ❌ Avoid -->
<button onclick="changeValue('work', 1)">+</button>
```

**Key Principles:**
- Use semantic HTML5 elements
- Include accessibility attributes
- Use meaningful class names
- Keep markup clean and readable
- Always include `alt` attributes for images

### Commit Message Guide

We follow [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat(calendar): add weekly view export

fix(calculator): correct time calculation for weekend tasks

docs(readme): update installation instructions

style(ui): improve button hover states

refactor(storage): simplify localStorage handling
```

## 🛠 Development Setup

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/time-planner.git
   cd time-planner
   ```

2. **Open in Browser**
   ```bash
   # Simply open the HTML file
   open time-planner.html
   # or
   python -m http.server 8000  # for local server
   ```

3. **Make Changes**
   - Edit `time-planner.html`
   - Test in multiple browsers
   - Check responsive design

4. **Test Your Changes**
   ```javascript
   // Open browser console and test
   localStorage.clear(); // Reset state
   loadSettings();       // Test settings loading
   calculateTasks();     // Test calculations
   ```

### Testing Checklist

Before submitting a PR, ensure:

- [ ] 📱 **Responsive design** works on mobile/tablet/desktop
- [ ] 🌐 **Cross-browser** compatibility (Chrome, Firefox, Safari, Edge)
- [ ] ♿ **Accessibility** - screen reader friendly
- [ ] ⚡ **Performance** - no performance regressions
- [ ] 💾 **Data persistence** - localStorage works correctly
- [ ] 🧮 **Calculations** - math is correct
- [ ] 🎨 **UI/UX** - animations are smooth
- [ ] 🔧 **JavaScript** - no console errors

## 📁 Project Structure

```
time-planner/
├── time-planner.html      # Main application file
├── README.md              # Russian documentation
├── README-EN.md           # English documentation
├── CONTRIBUTING.md        # This file
├── LICENSE               # MIT license
└── .gitignore           # Git ignore rules
```

### Key Functions

| Function | Purpose |
|----------|---------|
| `loadSettings()` | Load user preferences from localStorage |
| `saveSettings()` | Save current settings to localStorage |
| `calculateTasks()` | Main calculation engine |
| `generateSchedules()` | Create daily/weekly schedules |
| `addTask()` | Task management |
| `switchTab()` | UI tab switching |

### Data Structure

```javascript
// Settings stored in localStorage
const settings = {
    work: number,           // Hours per week
    sleep: number,          // Hours per day
    sport: number,          // Hours per week
    sportDays: number,      // Days per week
    weeklyTasks: number,    // Tasks per week
    duration: number,       // Hours per task
    maxWeekdayTasks: number // Max tasks per weekday
};

// Tasks array
const tasks = [
    {
        id: timestamp,
        text: string,
        completed: boolean,
        createdAt: string
    }
];
```

## 🎯 Areas for Contribution

### 🔥 High Priority

- **Performance optimization** - reduce calculation time
- **Accessibility improvements** - better screen reader support
- **Mobile UX enhancements** - touch-friendly interactions
- **Algorithm improvements** - smarter task distribution

### 🚀 Medium Priority

- **Dark theme** - CSS custom properties implementation
- **Export functionality** - iCal/Google Calendar export
- **Offline support** - Service Worker implementation
- **Advanced analytics** - time tracking insights

### 💡 Low Priority

- **Themes and customization** - color schemes
- **Internationalization** - more languages
- **Advanced features** - recurring tasks, categories
- **Integration** - third-party calendar sync

## 🏷 Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements or additions to docs
- `performance` - Performance improvements
- `accessibility` - Accessibility improvements
- `ui/ux` - User interface and experience

## ❓ Questions?

Feel free to:
- 💬 Open a [Discussion](https://github.com/WarLikeLaux/time-planner/discussions)
- 🐛 Create an [Issue](https://github.com/WarLikeLaux/time-planner/issues)
- 📧 Contact [@WarLikeLaux](https://github.com/WarLikeLaux)

---

**Thank you for contributing to TimePlanner! 🎉**