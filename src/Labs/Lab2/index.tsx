import "./index.css";

export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
            Style attribute allows configuring look and feel
            right on the element. Although it's very convenient
            it is considered bad practice and you should avoid
            using the style attribute
            </p>


            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the 
                    elements of the same name, e.g., P, we can refer to a specific element by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here's another paragraph using a different ID and a different look and
                feel
                </p>
            </div>

            {/* Foreground Color */}
            <div id="wd-css-colors">
                <h2>Colors</h2>
                <h3 className="wd-fg-color-blue">Foreground color</h3>
                <p className="wd-fg-color-red">
                    The text in this paragraph is red but
                    <span className="wd-fg-color-green">this text is green</span>
                </p>
            </div>

            {/* Background color */}
            <div id="wd-css-background-colors">
                <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
                <p className="wd-bg-color-red wd-fg-color-black">
                    This background of this paragraph is red but
                    <span className="wd-bg-color-green wd-fg-color-white">
                    the background of this text is green and the foreground white
                    </span>
                </p>
            </div>

        </div>
    );
}  