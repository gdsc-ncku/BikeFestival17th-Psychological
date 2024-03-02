import { ReactElement } from "react";
import { propsType } from ".";


export default function StartPage(props: propsType): ReactElement {
    const {
        start, show,
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
            <div className="foot">2024/03/02、03/03<br/>成大單車節帶你一起找到自己的方向！</div>
        </div>
    );
}
