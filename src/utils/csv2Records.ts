const checkExistLastRow = (rows: string[][]) => {
  if (rows[rows.length - 1] === undefined) {
    rows.push([]);
  }
}
const checkExistLastCell = (row: string[]) => {
  if (row[row.length - 1] === undefined) {
    row.push('');
  }
}
const addRow = (rows: string[][], row: string[]) => {
  rows.push(row);
}
const addCellToLastRow = (rows: string[][], cell: string) => {
  checkExistLastRow(rows);
  const lastRow = rows[rows.length - 1];
  lastRow.push(cell);
}
const addCharToLastCell = (rows: string[][], char: string) => {
  checkExistLastRow(rows);
  const lastRow = rows[rows.length - 1];
  checkExistLastCell(lastRow);
  lastRow[lastRow.length - 1] += char;
}

const csv2rows = (inputCsv: string) => {
  const rows: string[][] = [];

  let splicing = false;
  let matchR = false;

  const onMatchLinebreack = () => {
    if (splicing) {
      addCharToLastCell(rows, ',');
    } else {
      addRow(rows, []);
    }
  }

  const csv = inputCsv.replace(/\r\n|\r/g, '\n');

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];

    if (char === '\n') {
      onMatchLinebreack();
    } else if (char === ',') {
      addCellToLastRow(rows, '');
    } else if (char === '"') {
      splicing = !splicing;
    } else {
      addCharToLastCell(rows, char);
    }
  }

  return rows;
}

const rows2Records = (rows: string[][], options?: {
  skipFirstRow?: boolean;
  fields?: string[];
}) => {
  const { skipFirstRow, fields } = options || {};
  const records = rows.map(row => {
    const record: Record<string | number, string> = {};
    row.forEach((cell, cellIndex) => {
      if (cell) {
        if (!fields) {
          record[cellIndex] = cell;
        } else {
          const field = fields[cellIndex];
          if (field) {
            record[field] = cell;
          }
        }
      }
    });
    return record;
  });
  skipFirstRow && records.pop();
  return records;
}

export const csv2Records = (csv: string, options?: {
  fields?: string[];
  skipFirstRow?: boolean;
}) => {
  const { fields, skipFirstRow } = options || {};
  const rows = csv2rows(csv);
  return rows2Records(rows, { fields, skipFirstRow });
}
