export default function getSpecial({ special }) {
  const specialView = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of special) {
    if (!Object.prototype.hasOwnProperty.call(item, 'description')) {
      item.description = 'Описание засекречено';
      specialView.push(item);
    } else {
      specialView.push(item);
    }
  }
  return specialView;
}
