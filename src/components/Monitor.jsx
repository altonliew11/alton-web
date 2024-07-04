import './Monitor.css';

function Monitor() {
    return (
        <div id="monitor">
                <div id="bezel">
                    <div id="crt" className="off"> 
                        <div className="scanline"></div>
                        <div className="static"></div>
                    </div>
                </div>
        </div>
    );
}

export default Monitor;