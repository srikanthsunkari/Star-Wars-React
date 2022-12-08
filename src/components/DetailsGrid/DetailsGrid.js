
import './DetailsGrid.css';
import { Button } from 'reactstrap';

function DetailsGrid({ data: { header = [], values = [], actions = [] } }) {
  const rightAlignedStyle = {
    // alignItems: 'flex-end',
    // display:'flex',
    // justifyContent:'flex-end'
  }
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map((column, index) => <th key={index}>{column}</th>)}
          {actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((column, index) => <td key={row[index]}>{row[index]} {index == 0 && ':'}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DetailsGrid;

