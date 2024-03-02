import {
    CSSProperties,
    ReactElement,
    useEffect,
    useState,
} from "react";

import resultArray from "../../data/result";

import "./index.scss"

type propsType = Readonly<{
    show: boolean,
    response: Array<0 | 1>
}>;

const vec = [
    [0, -50],
    [47.553, -15.45],
    [29.39, 40.45],
    [-29.39, 40.45],
    [-47.553, -15.45],
]

export default function ResultPage(props: propsType): ReactElement | null {
    const [showState, setShowState] = useState<boolean>(false);
    const {
        show,
        response,
    } = props;

    useEffect(() => {
        if (show) setTimeout(() => setShowState(true), 2000);
        else setShowState(false);
    }, [show])

    if (response.length !== 8) return null

    let resultKey = 0;
    resultKey += response[0] << 3;
    resultKey += response[1] << 2;
    resultKey += response[2] << 1;
    resultKey += response[7] << 0;

    const result = resultArray[resultKey];
    // const result = resultArray[0];
    const svgPathList = Array.from(Array(6)).map((_, i) => {
        const res = `M${vec.map(v => {
            return `${(50 + v[0] * (1 + i) / 6.5).toFixed(2)} ${(50 + v[1] * (1 + i) / 6.5).toFixed(2)}`
        }).join(" L")}Z`;
        return res
    });
    const traitsVec = Object.values(result.traits).map((n, i) => {
        const [delta_x, delta_y] = vec[i];
        n += 1;
        return `${(50 + delta_x * n / 6.5).toFixed(2)} ${(50 + delta_y * n / 6.5).toFixed(2)}`;
    });
    const pathD = `M${traitsVec.join(" L")}Z`

    return (
        <div id="result" className="page" data-show={showState}>
            <div className="shareRatio">
                <img src={`${process.env.PUBLIC_URL}/cars/${result.name}.png`} />
                <div className="head">NCKUBIKE 17TH</div>
                <div className="resultContent">
                    <div>
                        <div className="nameBox">
                            <div>你的本體是...</div>
                            <div className="name">{result.name}</div>
                            <div className="tags">
                                {result.tags.map((s, i) => <div
                                    key={i}
                                    style={{
                                        "--font-num": s.length
                                    } as CSSProperties}
                                >{s}</div>)}
                            </div>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/cars/${result.name}.png`} />
                    </div>
                    <div>
                        <div>
                            <svg viewBox="0 0 100 91">
                                {
                                    svgPathList.map((p, i) => <path
                                        key={i}
                                        d={p}
                                        fill="none"
                                        stroke="#2228"
                                        strokeWidth="0.5"
                                    />)
                                }
                                <path d="M50 0 L97.553 34.55 L79.39 90.45 L20.61 90.45 L2.447 34.55Z" stroke="#333A" fill="none" />
                                <path d={pathD} stroke="#ff7b1a" fill="#ff7b1a40" />
                            </svg>
                            <div className="traits">
                                {Object.keys(result.traits).map((v, i) => <div
                                    key={i}
                                    className="text"
                                    style={{"--length": v.length} as CSSProperties}
                                >{v}</div>)}
                            </div>
                        </div>
                        <div className="skillBox">
                            <div>
                                <div className="name">特殊技</div>
                                <div className="box">{result.skill}</div>
                            </div>
                            <div>
                                <div className="name">推薦行程</div>
                                <div className="box">{result.recommand}</div>
                            </div>
                        </div>
                    </div>
                    <div className="resultContext">{result.context}</div>
                    <div className="friends">
                        <div className="good">
                            <div className="text">車車好夥伴</div>
                            <div className="box">
                                <div>
                                    <p>{resultArray[result.good[0]].name}</p>
                                    <img src={`${process.env.PUBLIC_URL}/cars/${resultArray[result.good[0]].name}.png`} />
                                </div>
                                <div>
                                    <p>{resultArray[result.good[1]].name}</p>
                                    <img src={`${process.env.PUBLIC_URL}/cars/${resultArray[result.good[1]].name}.png`} />
                                </div>
                            </div>
                        </div>
                        <div className="bad">
                            <div className="text">車車壞夥伴</div>
                            <div className="box">
                                <div>
                                    <p>{resultArray[result.bad[0]].name}</p>
                                    <img src={`${process.env.PUBLIC_URL}/cars/${resultArray[result.bad[0]].name}.png`} />
                                </div>
                                <div>
                                    <p>{resultArray[result.bad[1]].name}</p>
                                    <img src={`${process.env.PUBLIC_URL}/cars/${resultArray[result.bad[1]].name}.png`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot">歡迎將本張圖片分享至限時動態<br />並標註 @nckubike_festival</div>
            </div>
        </div>
    );
}
