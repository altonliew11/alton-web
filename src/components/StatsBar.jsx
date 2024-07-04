import "./StatsBar.css";

function StatsBar() {
    return (
        <div className="statsbar-container">
            <ul>
                <li className="XP" key="XP">XP<span className="spacerXP">10/46200</span></li>
                <li className="AP" key="AP">AP<span className="spacer">96/96</span></li>
                <li className="HP" key="HP">HP<span className="spacer">200/200</span></li>
                <li className="LVL" key="LVL">LVL<span className="spacer">24</span></li>
            </ul>
        </div>
    );
}

export default StatsBar;