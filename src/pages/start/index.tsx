import {
    ReactElement,
} from "react";

type propsType = Readonly<{
    start: () => void,
    show: boolean
}>;

export default function StartPage(props: propsType): ReactElement {
    const {
        start,
        show,
    } = props;

    return (
        <div className="page" data-show={show}>
            <div className="title">在單車的世界裡，<br />你的本體是...？</div>
            <div className="subtitle">
                握著單車手把的你<br />
                不知道該前往哪裡<br />
                低頭一看...
            </div>
            <button onClick={start}>開始測驗</button>
        </div>
    );
}
