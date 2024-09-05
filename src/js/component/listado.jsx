import React, { useState } from 'react';

const Listado = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addItem(e) {
        if (e.key === 'Enter') {
            
            setItems(prevItems => [...prevItems, inputValue]);
           
            setInputValue('');
            
        }
    }

    function removeitem(index){
        setItems(prevItems=>prevItems.filter((_,i)=> i !==index))

        console.log('adios')
    }
    return (
        <>
            <div className="text-center">
                <h1>TODOS</h1>
                <div>
                    <input 
                        type="text"  
                        onKeyDown={addItem} 
                        onChange={e => setInputValue(e.target.value)} 
                        value={inputValue} 
                    />
                </div>
                <ul className="list-group">
                    {items.map((item, index) => (
                        <li  className="list-group-item" key={index}>
                            {item}<button onClick={()=>removeitem(index)} style={{ marginLeft: '10px' }}>x</button>
                        
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Listado;
