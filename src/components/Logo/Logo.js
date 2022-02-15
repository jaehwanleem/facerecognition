import React from 'react';
import Tilt from 'react-parallax-tilt'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='br2 shadow-2' style={{
                height: "150px",
                width: "150px",
            }}>
                <div className='logoimage'>
                    <img alt='brainlogo' src='https://media.istockphoto.com/vectors/human-brain-icon-vector-vector-id1005384502?k=20&m=1005384502&s=170667a&w=0&h=Eg9OGA6euomq49tdMsH7OzTyNy8Ce1tOqY3i5gMn1Q0=' />

                </div>
            </Tilt>

        </div>
    );
}

export default Logo