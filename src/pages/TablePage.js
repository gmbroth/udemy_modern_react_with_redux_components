
import { useState } from "react";
import Table from "../components/Table";

const TablePage = () => {

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple',  color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime',   color: 'bg-green-500', score: 4 },
    ];

    const config = [
        {
            label: 'Name', 
            render: (fruit) => fruit.name,
        },
        {
            label: 'Color', 
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score', 
            render: (fruit) => fruit.score,
            header: () => <th className="bg-red-500">Score</th>,
            sort: (a, b) => {  },
        },
    ];

    const keyFor = (row) => {
        return row.name;
    };

    return (
        <div>
            <Table data={data} config={config} keyFor={keyFor} />
        </div>
    );
}

export default TablePage;
