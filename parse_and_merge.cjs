const fs = require('fs');

// Read old data.js
const oldDataRaw = fs.readFileSync('data.js.bak', 'utf-8');
const match = oldDataRaw.match(/const DATA\s*=\s*(\[.*\]);?/s);
const oldData = JSON.parse(match[1]);

// Read english_raw.txt
const enText = fs.readFileSync('english_raw.txt', 'utf-8');
const enLines = enText.split('\n').map(l => l.trim()).filter(Boolean);

let parsedEn = {};
let currentQ = null;

for (let i = 0; i < enLines.length; i++) {
  let line = enLines[i];
  if (line.startsWith('MODULE')) continue;
  
  const qMatch = line.match(/^Question\s+(\d+):\s*(.*)/);
  if (qMatch) {
    if (currentQ) parsedEn[currentQ.id] = currentQ;
    currentQ = {
      id: parseInt(qMatch[1], 10),
      q: qMatch[2],
      o: [],
      ex: ''
    };
    continue;
  }
  
  if (currentQ) {
    if (line.match(/^\([A-D]\)/)) {
      currentQ.o.push(line.replace(/^\([A-D]\)\s*/, '').trim());
    } else if (line.startsWith('Explanation:')) {
      currentQ.ex = line.replace('Explanation:', '').trim();
    } else if (line.startsWith('Correct Answer:')) {
      // skip
    } else if (currentQ.o.length === 0 && !line.startsWith('Explanation:') && !line.startsWith('Correct Answer:')) {
      currentQ.q += '\n' + line;
    } else if (currentQ.o.length > 0 && !line.startsWith('Explanation:') && !line.startsWith('Correct Answer:')) {
      currentQ.o[currentQ.o.length - 1] += '\n' + line;
    }
  }
}
if (currentQ) parsedEn[currentQ.id] = currentQ;

// Fix Q253, Q260 which had equations
if (parsedEn[253]) {
  if (parsedEn[253].o.length < 4) {
      parsedEn[253].o = [
          'X→Y, Z→X',
          'X→Y, Z→X',
          'Y→Z, Z→X',
          'Z→Y, X→Z'
      ];
  }
}
if (parsedEn[260]) {
  if (!parsedEn[260].q.includes('X→Y')) {
      parsedEn[260].q = 'What does the notation X→Y signify in database theory?';
  }
}


// Merge
const newData = oldData.map(vi => {
  const en = parsedEn[vi.id];
  return {
    id: vi.id,
    module: vi.m,
    q_en: en ? en.q : vi.q,
    o_en: en ? en.o : vi.o,
    q_vi: vi.qv,
    o_vi: vi.ov,
    c: vi.c,
    ex_en: en ? en.ex : (vi.q + ' explanation placeholder'),
    ex_vi: vi.ex
  };
});

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data', { recursive: true });
}

fs.writeFileSync('src/data/questions.json', JSON.stringify(newData, null, 2), 'utf-8');
console.log('Successfully created src/data/questions.json with length: ', newData.length);
