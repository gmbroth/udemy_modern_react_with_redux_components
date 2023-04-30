
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex,] = useState(-1);

    const handleClick = (event, index) => {
        setExpandedIndex((current) => {
            return current === index ? -1 : index;
        });
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' 
                onClick={(event) => handleClick(event, index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p5'>{item.content}</div>}
            </div>
        );
    })

    return (
        <div className='border-x border-t rounded'>{renderedItems}</div>
    );
}

export default Accordion;