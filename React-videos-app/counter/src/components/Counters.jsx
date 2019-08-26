import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() { 
      const { onReset, counters, onDelete, onIncrement} = this.props;
        return ( 
            <div>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >Reset</button>

                 {counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        counter={counter}
                        onIncrement={onIncrement}
                        // value={counter.value}
                        // id={counter.id} 
                        // I Was here
                    />

                )}
            </div>
         );
    }
}
 
export default Counters;