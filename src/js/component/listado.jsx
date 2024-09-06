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
        

            <div className=" container text-center margin=3">
                <h1 className="display-2 lead">TODOS</h1>
                <div>
                    <input 
                        type="text"  className="form-control list-inline"
                        onKeyDown={addItem} 
                        onChange={e => setInputValue(e.target.value)} 
                        value={inputValue} 
                        placeholder="What needs to be done?"
                    />
                </div>
                <ul className="list-group">
                    {items.map((item, index) => (
                        <li  className="list-group-item shadow p-3  bg-body-tertiary rounded d-flex justify-content-between" key={index}  >
                            {item}<button type="button" className="btn-close " aria-label="Close" onClick={()=>removeitem(index)}  ></button>
                        
                        </li>
                  
                    ))}
                       <li className="list-footer-item shadow p-1  bg-body-tertiary rounded d-flex justify-content-between">
                    <span>{items.length} items left</span>
                   </li>
                </ul>

            </div>

        
        </>
    );
};

export default Listado;
