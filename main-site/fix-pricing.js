const fs = require('fs');
const path = require('path');

const priPath = path.join(__dirname, 'src', 'pages', 'Pricing.tsx');
let pri = fs.readFileSync(priPath, 'utf8');

// Fix the corrupted syntax created by the bad regex:
// <button }
//    style={...}
//    }
//    }>&times;</button>

pri = pri.replace(/<button\s+\}/g, '<button ');
pri = pri.replace(/\}\s*\}\s*>/g, '>');

// Wait, the original HTML probably had onmouseover="..." onmouseout="..." onclick="..."
// I'll just restore the `<button>` tags properly by regex or let's see where else it's broken.

fs.writeFileSync(priPath, pri, 'utf8');
console.log('Fixed Pricing.tsx syntax');
