const fs = require('fs');
const path = require('path');

const srcHtml = fs.readFileSync(path.join(__dirname, 'pricing.html'), 'utf8');

// Extract the <main> part
const mainMatch = srcHtml.match(/<main[\s\S]*?<\/main>/i);
if (!mainMatch) {
  console.log("Could not find <main> in pricing.html");
  process.exit(1);
}

let content = mainMatch[0];

// Remove scripts entirely
content = content.replace(/<script[\s\S]*?<\/script>/gi, '');

// Convert HTML comments to JSX comments
content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Convert class to className
content = content.replace(/class=/g, 'className=');

// Remove troublesome inline event handlers
content = content.replace(/on[a-z]+="[^"]*"/gi, '');

// Fix self-closing tags
content = content.replace(/<img([^>]*[^\/])>/gi, '<img$1 />');
content = content.replace(/<input([^>]*[^\/])>/gi, '<input$1 />');
content = content.replace(/<br>/gi, '<br />');
content = content.replace(/<hr([^>]*[^\/])>/gi, '<hr$1 />');

// Convert style="k: v; k2: v2" to style={{k: 'v', k2: 'v2'}}
content = content.replace(/style="([^"]*)"/g, (match, styles) => {
  const css = {};
  styles.split(';').forEach(s => {
    if (!s.trim()) return;
    const parts = s.split(':');
    if (parts.length >= 2) {
      let key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      
      if (key.startsWith('--')) {
        // keep as is
      } else {
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      }
      css[key] = value;
    }
  });
  
  let styleStr = Object.entries(css).map(([k, v]) => {
    if (k.startsWith('--')) {
      return `"${k}": "${v}"`;
    }
    return `${k}: "${v}"`;
  }).join(', ');
  
  return `style={{ ${styleStr} }}`;
});

// Fix CSS variable styling bug inside React inline styles
content = content.replace(/style=\{\{\s*"--[^\}]*\}\}/g, '$& as React.CSSProperties');

const component = `import React from 'react';

const Pricing: React.FC = () => {
  return (
    <>
      ${content}
    </>
  );
};

export default Pricing;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Pricing.tsx'), component, 'utf8');
console.log('Successfully regenerated Pricing.tsx perfectly');
