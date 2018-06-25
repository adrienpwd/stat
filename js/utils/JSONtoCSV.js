export default json => {
  const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(json[0]);
  let csv = json.map(row =>
    header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(',')
  );
  csv.unshift(header.join(','));
  csv = csv.join('\r\n');
  return csv;
};
