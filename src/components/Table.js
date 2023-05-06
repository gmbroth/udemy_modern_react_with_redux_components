
import { useEffect } from "react";
import { Fragment } from "react";

const Table = ({ data, config, keyFor }) => {
 
    const renderedHeaders = config.map((column) => {
        return (
            column.header ? 
                <Fragment key={column.label}>{column.header()}</Fragment> :
                <th key={column.label}>{column.label}</th>
        );
    });
  
    const renderedRows = data.map((row) => {
        return (
            <tr className='border-b' key={keyFor(row)}>
                {
                    config.map((column) => {
                        return (
                             <td key={column.label} className='p-3'>{column.render(row)}</td>
                        );
                    })
                }
             </tr>
        );
    });

    return (
        <div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        { renderedHeaders }
                    </tr>
                </thead>
                <tbody>
                    { renderedRows }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
