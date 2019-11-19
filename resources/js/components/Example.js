import React , { useState } from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState('');
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>

                    <p>You clicked {count} times</p>
                    <p>You Username {username} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                    <input id="name" onChange={event => setUsername(event.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
