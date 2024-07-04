import "./Boot.css";
import { TypeAnimation } from 'react-type-animation';

function Boot() {
    return (
        <div className="menu-container">
            <TypeAnimation
                className="type"
                sequence={[
                    500,
                    "Hello, World!\nI'm Alton Liew and I am a front-end developer.\nWelcome to my website!",
                ]}
                cursor={false}
                speed={10}
                style={{ whiteSpace: 'pre-line', fontSize: '4em' }}
            />
        </div>
    );
}

export default Boot;