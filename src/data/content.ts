export interface Content {
    context: string,
    options: [
        string,
        string,
    ]
};

const pageContent: Array<Content> = [
    {
        context: "心中充斥著困惑的你\n決定要四處走走，\n這時你會想叫上朋友一起\n還是獨自出發？",
        options: ["找朋友一起", "獨自出發"]
    },
    {
        context: "你要如何安排去哪裡呢？",
        options: ["查網路找資料\n規劃好詳細行程、路線", "決定一個地點後\n在附近隨興晃晃"]
    },
    {
        context: "在路上，你遇到了一個小孩\n正在路邊獨自哭泣，\n這時你會？",
        options: ["上前關心他\n為什麼會這麼難過", "上前詢問他\n怎麼自己一個人在這裡"]
    },
    {
        context: "確認小孩沒事之後，\n看到了一間深得你心的店面，\n你覺得它會是？",
        options: ["服飾店", "咖啡店"]
    },
    {
        context: "到了吃飯時間，\n常去的餐廳出了創意料理，\n你會選擇吃？",
        options: ["之前吃過且喜歡的料理", "店內新推出的創意料理"]
    },
    {
        context: "走出餐廳後，\n疑似聽到巷子裡有叫罵聲，\n你會怎麼做呢？",
        options: ["前去查看，\n如果有人受傷就糟糕了", "加速經過，\n如果捲入糾紛就糟糕了"]
    },
    {
        context: "終於度過了漫長的一天，\n回到家以後，\n你會先做什麼事情？",
        options: ["先躺在床上或沙發滑手機", "洗手、洗臉，\n脫掉髒衣服再做其他事"]
    },
    {
        context: "睡前，你躺在床上，\n回顧著今天發生了哪些事情，\n你會⋯",
        options: ["回想事情當下的\n具體情況和感受", "思考事情發生\n對自己的意義及影響"]
    },
];

export default pageContent;
