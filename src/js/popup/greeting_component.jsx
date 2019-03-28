import React from "react";
import icon from "../../img/icon-128.png";
import { hot } from "react-hot-loader";

class GreetingComponent extends React.Component {
    click = () => {
        try {
            const time = /(..)(:..)/.exec(new Date());
            const hour = time[1] % 12 || 12;
            const period = time[1] < 12 ? "a.m." : "p.m.";
            const message = hour + time[2] + " " + period;
            window.alert(message);
            let note = new Notification(message, {
                icon: "icon-128.png",
                body: "Time to make the toast."
            });
        } catch (e) {
            window.alert(e.message);
        }
    };

    render() {
        return (
            <div>
                <p>Hello, don't find me on src/js/popup/greeting_component.jsx</p>
                <button onClick={this.click}>Click Me</button>
            </div>
        );
    }
}

export default hot(module)(GreetingComponent);
