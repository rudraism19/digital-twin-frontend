const xlsx = require('xlsx');
const fs = require('fs');

try {
  const workbook = xlsx.readFile('g:\\intership\\digital-twin-frontend\\digital_twin_verse_all_careers.xlsx');
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  
  fs.writeFileSync('g:\\intership\\digital-twin-frontend\\careers_data.json', JSON.stringify(data, null, 2));
  console.log('Successfully converted to careers_data.json');
  console.log('First item:', JSON.stringify(data[0], null, 2));
} catch (e) {
  console.error('Error reading Excel file:', e);
}
