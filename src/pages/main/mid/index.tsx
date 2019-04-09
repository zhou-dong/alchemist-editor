import React, { ReactNode } from "react";

const layoutStyle = {
    flex: 1,
    overflow: "hidden"
};

const style = {
    ...layoutStyle,
    backgroundColor: "#586e75",
    color: "palegoldenrod"
};

type Props = { reactNode: ReactNode };

export default ({ reactNode }: Props) => (
    <section style={style} id="display">
        {reactNode}
    </section>
);
