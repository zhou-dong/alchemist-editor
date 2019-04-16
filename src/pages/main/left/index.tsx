import React from 'react';
import Resizable from "re-resizable";

const layoutStyle = {
    flex: 1,
    order: -1,
    height: "100%",
    overflowy: "scroll",
};

const style = {
    ...layoutStyle,
    overflow: "scroll",
    backgroundColor: "#002B36",
};

export default () => (
    <Resizable enable={{ right: true }} >
            <nav style={style}>
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />

                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />
                Queue<br />
                Stack <br />

                Queue<br />
                Stack <br />


                hello world
        </nav>
    </Resizable>
);
