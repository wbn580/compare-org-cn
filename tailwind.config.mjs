/** @type {import('tailwindcss').Config} */
export default {
  content: ["Microsoft YaHei", "sans-serif"],
  theme: {
    extend: {
      colors: {
        primary: '#4f6bed',
        accent:  '#7b92f5',
        bg:      '#f7f5f0',
        ink:     '#1a1f2b',
        muted:   '#6b7280',
      },
      fontFamily: {
        heading: ["Microsoft YaHei", "sans-serif"],
        body:    ['PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
        mono:    ['Monaspace Argon', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '896px',
      },
    },
  },
  plugins: [],
};
