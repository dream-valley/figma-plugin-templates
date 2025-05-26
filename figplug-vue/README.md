# Figma Plugin with Vue & Tailwind CSS

A modern Figma plugin template built with **Vue 3**, **Vite**, and **Tailwind CSS**. This template provides a fast development experience with hot module replacement and optimized production builds.

## Features

- ⚡ **Vite** for lightning-fast builds and hot module replacement
- 🟢 **Vue 3** with Composition API and TypeScript support
- 🎨 **Tailwind CSS v4** for utility-first styling
- 📦 **TypeScript** for type safety and better developer experience
- 🔧 **ESLint** for code quality and consistency
- 🏗️ **Modular architecture** with shared logic between UI and plugin
- 📱 **Responsive design** with modern UI components
- 🎯 **Single-file builds** for easy Figma deployment

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Development

#### Build for Development
```bash
npm run build
```

#### Watch Mode (Auto-rebuild on changes)
```bash
npm run dev
# or
npm run watch
```

#### Lint Code
```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

## Project Structure

```
figplug-vue/
├── src/
│   ├── common/              # Shared logic between UI and plugin
│   │   ├── types.ts         # TypeScript type definitions
│   │   ├── utils.ts         # Utility functions (color conversion, validation)
│   │   ├── constants.ts     # Shared constants and default values
│   │   └── index.ts         # Export barrel for easy imports
│   ├── plugin/
│   │   └── plugin.ts        # Plugin main code with Figma API integration
│   └── ui/
│       ├── App.vue          # Main Vue component with Tailwind CSS
│       ├── App.css          # Tailwind CSS imports and custom styles
│       ├── main.ts          # Vue entry point and app mounting
│       └── index.html       # HTML template for the UI
├── dist/                    # Built files (generated)
│   ├── plugin.js           # Plugin main code (single file)
│   └── index.html          # Vue UI (single file with inlined assets)
├── manifest.json           # Figma plugin manifest
├── vite.config.plugin.js   # Vite configuration for plugin build
├── vite.config.ui.js       # Vite configuration for UI build (with Tailwind)
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Architecture

This template uses a well-organized, modular architecture:

### Shared Logic (`src/common/`)
- **Types**: TypeScript interfaces for plugin messages and data structures
- **Utils**: Utility functions for color conversion, validation, and data processing
- **Constants**: Shared constants, default values, and configuration
- **Index**: Export barrel for clean, centralized imports

### Vue UI (`src/ui/`)
- **Modern Vue 3** components with Composition API
- **Tailwind CSS v4** for utility-first styling and responsive design
- **TypeScript** for type-safe component development
- **Interactive components**: Color picker, number inputs, and action buttons
- **Responsive layout** optimized for Figma's plugin panel

### Plugin Code (`src/plugin/`)
- **Figma API integration** for creating and manipulating design elements
- **Type-safe message handling** between UI and plugin
- **Shared utilities** for consistent data processing
- **Error handling** and user feedback

### Build Configuration
- **Dual Vite configs**: Separate optimized builds for plugin and UI
- **Tailwind integration**: Automatic CSS processing and optimization
- **Single-file output**: Self-contained builds for easy deployment

The UI is configured in `manifest.json`:

```json
{
  "ui": "dist/index.html"
}
```

## Build Process

The build system uses Vite for optimal performance:

1. **TypeScript compilation** - Converts `.ts/.vue` files to JavaScript
2. **Vue SFC transformation** - Processes Vue Single File Components
3. **Tailwind CSS processing** - Generates utility classes and optimizes CSS
4. **Module bundling** - Bundles dependencies and modules efficiently
5. **Asset optimization** - Minifies and optimizes all assets
6. **Single-file generation** - Creates self-contained output files

## Configuration

### Vite Configuration
- **Plugin Config** (`vite.config.plugin.js`)
  - Builds plugin code as a single JavaScript file
  - Optimized for Figma's plugin environment
- **UI Config** (`vite.config.ui.js`)
  - Builds Vue UI as a single HTML file with inlined assets
  - Integrates Tailwind CSS v4 with `@tailwindcss/vite` plugin
  - Uses `vite-plugin-singlefile` for self-contained output
- **Parallel builds** with `concurrently` for faster development

### Tailwind CSS Configuration
- **Tailwind CSS v4** with modern features and improved performance
- **Automatic class detection** from Vue components
- **CSS optimization** and unused class removal in production
- **Utility-first approach** for consistent and maintainable styling

### TypeScript Configuration (`tsconfig.json`)
- **Modern ES2020 target** for optimal performance
- **Vue SFC support** with proper type checking
- **Strict type checking** for better code quality
- **Path mapping** for clean imports

## Deployment

1. Build the plugin for production:
   ```bash
   npm run build
   ```

2. The built files in `dist/` are ready for Figma:
   - `dist/plugin.js` - Main plugin code (single file, ~0.64 kB)
   - `dist/index.html` - Vue UI with Tailwind CSS (single file, ~62 kB with all assets inlined)

3. Upload to Figma:
   - Open Figma Desktop
   - Go to Plugins → Development → Import plugin from manifest
   - Select the `manifest.json` file from your project root

## Development Tips

### General Development
- Use `npm run dev` for automatic rebuilding during development
- The Vue UI includes hot module replacement for faster iteration
- Check the browser console in Figma's developer tools for UI errors
- Use TypeScript for better code completion and error detection

### Styling with Tailwind CSS
- Use Tailwind's utility classes for consistent styling
- Leverage responsive design utilities (`sm:`, `md:`, `lg:`)
- Customize colors and spacing using Tailwind's design tokens
- Use `@apply` directive in CSS for component-level styling when needed

### Plugin Development
- Test plugin functionality frequently in Figma
- Use `console.log()` for debugging plugin code
- Leverage shared utilities for consistent data handling
- Follow Figma's plugin guidelines for better user experience

## Example Usage

This template creates a simple rectangle generator plugin that demonstrates:

- **UI Components**: Number input, color picker, and action buttons
- **State Management**: Vue 3 Composition API for managing form state
- **Plugin Communication**: Type-safe messaging between UI and plugin
- **Figma API Usage**: Creating shapes, setting properties, and managing selection
- **Styling**: Modern UI with Tailwind CSS utilities

## Learn More

- [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
