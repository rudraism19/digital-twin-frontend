const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../careers_data.json');
const outputDir = path.join(__dirname, '../main-site/public/data/galaxy');

// Helper to generate a slug for domains
const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

// Nice colors for different domains
const DOMAIN_COLORS = [
    '#ff3b3b', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16'
];

async function splitCareers() {
    console.log('Reading careers_data.json...');
    const rawData = fs.readFileSync(inputFile, 'utf-8');
    const careers = JSON.parse(rawData);
    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const domainsMap = new Map();

    careers.forEach(career => {
        // Use 'stream' as the domain. If missing, put in 'Other'
        const domainName = career.stream || 'Other';
        const domainId = slugify(domainName);
        
        if (!domainsMap.has(domainId)) {
            domainsMap.set(domainId, {
                id: domainId,
                name: domainName,
                paths: []
            });
        }
        
        domainsMap.get(domainId).paths.push({
            id: career.id || slugify(career.title),
            name: career.title,
            hook: career.description || '',
            tags: [career.tier, career.stream].filter(Boolean),
            salaryRange: career.salary || 'Varies',
            growthTrend: 'Stable' // Mocked or derived
        });
    });

    const domainsSummary = [];
    let colorIndex = 0;

    for (const [domainId, data] of domainsMap.entries()) {
        const color = DOMAIN_COLORS[colorIndex % DOMAIN_COLORS.length];
        colorIndex++;

        // Add to summary
        domainsSummary.push({
            id: domainId,
            name: data.name,
            color: color,
            pathCount: data.paths.length
        });

        // Write full domain file
        const domainFilePath = path.join(outputDir, `${domainId}.json`);
        fs.writeFileSync(domainFilePath, JSON.stringify({
            domain: data.name,
            id: domainId,
            color: color,
            pathCount: data.paths.length,
            paths: data.paths
        }, null, 2));
        
        console.log(`Wrote ${domainFilePath} with ${data.paths.length} paths.`);
    }

    // Write summary file
    const summaryFilePath = path.join(outputDir, 'domains_summary.json');
    fs.writeFileSync(summaryFilePath, JSON.stringify(domainsSummary, null, 2));
    console.log(`Wrote summary file: ${summaryFilePath} with ${domainsSummary.length} domains.`);
}

splitCareers().catch(console.error);
