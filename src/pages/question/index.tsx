import {
    CSSProperties,
    ReactElement,
} from "react";

type propsType = Readonly<{
    show: boolean,
    context: string,
    options: [string, string],
    next: (option: 0 | 1) => void
}>;

export default function QuestionPage(props: propsType): ReactElement {
    const {
        show,
        context,
        options,
        next,
    } = props;

    const contextWidth = Math.max(
        ...context.split("\n").map(s => s.length)
    );
    const buttonWidth = Math.max(
        ...options[0].split("\n").map(s => s.length),
        ...options[1].split("\n").map(s => s.length)
    );
    const buttonHeight = Math.max(...options.map(s => s.split("\n").length));

    return (
        <div className="page question" data-show={show} style={{
            "--ctx-width": contextWidth,
            "--width": buttonWidth,
            "--height": buttonHeight
        } as CSSProperties}>
            <div className="context">{context}</div>
            <button onClick={() => { next(0) }}>{options[0]}</button>
            <button onClick={() => { next(1) }}>{options[1]}</button>
        </div>
    );
}
