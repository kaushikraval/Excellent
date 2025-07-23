import ProductListImg from '../../Assets/Images/product-list-img.jpg';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    select: '',
    image: '',
    shape: 'Round',
    size: '1.0',
    color: 'G',
    clarity: 'VS2',
    cut: 'VG',
    pol: 'VG',
    sym: 'VG',
    fluor: 'None',
    shade: 'Mix',
    luster: 'Ex.Lust',
    ec: '-',
    lab: 'IGI',
    price: '$180.12',
    table: '58%',
    detpth: '45%',
  };
};

export default function DiamondListData(...lens) {
  const DiamondListDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? DiamondListDataLevel(depth + 1) : undefined,
      };
    });
  };

  return DiamondListDataLevel();
}
