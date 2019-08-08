const createUpdateQuery = (
  tableName,
  key,
  keyValue,
  newValues,
  columnNames
) => {
  var updates = [];
  columnNames.forEach((name, index) => {
    if (newValues[index]) {
      !/\D/.test(newValues[index])
        ? updates.push(`${name} = ${newValues[index]}`)
        : updates.push(`${name} = '${newValues[index]}'`);
    }
  });
  return `UPDATE ${tableName} SET ${updates} WHERE ${key} = ${keyValue}`;
};
module.exports = createUpdateQuery;
