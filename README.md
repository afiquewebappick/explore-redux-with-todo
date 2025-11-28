npm install i18next react-i18next i18next-browser-languagedetector
```

**What each package does:**
- `i18next` - Core i18n functionality
- `react-i18next` - React bindings for i18next
- `i18next-browser-languagedetector` - Automatically detects user language

---

## Step 2: Create Translation Files

Create a folder structure for your translations:
```
src/
├── locales/
│   ├── en/
│   │   └── translation.json
│   ├── bn/
│   │   └── translation.json
│   ├── hi/
│   │   └── translation.json
│   ├── ar/
│   │   └── translation.json
│   └── fr/
│       └── translation.json

# Step 3: Configure i18next
Create a new file src/i18n.js (or src/i18n.ts for TypeScript) to initialize and configure i18next.
This file will:

Import all translation files
Configure language detection
Set fallback language
Initialize i18next

# Initialize i18n in Your App
Import the i18n configuration file in your main app entry point (main.jsx or App.jsx) so it initializes before your app renders.