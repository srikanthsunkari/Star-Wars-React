import './Grid.css';
import { Button } from 'reactstrap';

function Grid({ data: { header = [], values = [], actions = [] } }) {
  const rightAlignedStyle = {
    // alignItems: 'flex-end',
    // display:'flex',
    // justifyContent:'flex-end'
  }
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(column => <th key={column.name}>{column.name}</th>)}
          {actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((column) => <td  align={column.type == "number" ? "right" : "center"} key={column.name}>{row[column.name]}</td>)}
            {actions.length &&
              <td className='gridActions'>
                {actions.map(({ label, action }) => <Button onClick={() => action(row)}>{label}</Button>)}
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
