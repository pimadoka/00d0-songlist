interface ToRecordsOptionsDef {
  fields?: string[];
  skipFirstRow?: boolean;
  id?: boolean;
}

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

  return rows.filter(row => !!row.length);
}

const rows2Records = (rows: string[][], options?: ToRecordsOptionsDef) => {
  const { skipFirstRow, fields, id } = options || {};
  const records = rows.map((row, rowIndex) => {
    const record: Record<string | number, string> & { id?: number } = {};
    if (id) {
      record['id'] = rowIndex + 1 + (skipFirstRow ? -1 : 0);
    }
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
  skipFirstRow && records.shift();
  return records;
}

export const csv2Records = (csv: string, options?: ToRecordsOptionsDef) => {
  const rows = csv2rows(csv);
  return rows2Records(rows, options);
}
