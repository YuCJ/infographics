/*eslint-disable */
export const chapter = {
    id: "II",
    title: `棄養不解決<br/>TNvR將白忙一場！`
}

export const topBox = `
零安樂死上路，不會憑空消失的狗狗會去那裡？繼續在街頭流浪，應該是最可能的去處。TNvR被許多民間團體倡導，他們認為把結紮後的流浪動物回置原地，讓流浪動物數量得以控制。除非是凶猛傷人的犬隻，需特別被「精準捕捉」，其他流浪動物就安置在街頭，人類學習跟他們相處。

但是，諸多問題讓這美好景象不可能到來！
`
export const titles = [`TNvR是什麼？`, `放回街頭的狗狗，真的比較幸福嗎？`, `人狗衝突將會越來越嚴重！`, `集中強度，TNR才可能有效`]

export const tnvrStrings = [`捕捉 TRAP`, `結紮 NEUTER`, `狂犬病疫苗施打 VACCINATE`, `原地回置 RETURN`]

export const problemStrings = [`發生交通意外`, `無法適應自然環境`, `誤食導致中毒`, `獵食原生動物`]

export const sec2Des = `以動物福利的觀點來看，人類居住的城市並不適合動物生存。動物們可能會發生車禍死亡、誤食食物等狀況。在沒有登記飼主的情況下，當發生意外或衝突，沒有人可以擔保他們的安全。`

export const sec3Des = `結紮雖然可避免繁殖問題，但動物依舊會群聚。伴隨而來的是噪音、環境髒亂、公共安全，甚至是人類的安全問題。當零安樂死實施後，收容所只能有限度的收容流浪動物。在外的動物勢必要與人類共存，伴隨而來的是人狗相處的問題。

當社會高喊零安樂死的同時，我們是否已經準備好迎接這些流浪動物了呢？`

export const sec4Des = `如果結紮數量未達一定規模，那些未結紮動物的繁殖仍可能讓總數量增加。而即便執行有強度的TNvR，若沒有控制新增的流浪動物，流浪動物總數量下降的機會也很渺茫。這是一個需要強度與時間的耐力賽。

我們將東芬蘭大學生物系博士賴亦德的TNR研究模型簡化（註），製作成30秒的遊戲，透過點擊動物來執行TNR，看看你的速度可否跟得上動物繁殖與人類棄養的速度吧！`

export const research = {
    title: '賴奕德的研究模型',
    des: `東芬蘭大學生物系博士賴亦德引用國外一篇研究流浪動物族群變化的論文，將其中影響TNR效果的因素，轉換成電腦模擬公式，想知道在不同狀況下，TNR要達到「降低族群數量」的目的，必須維持的強度、時間究竟是多少。


文中以「每年固定TNR的數量」來模擬，發現要把流浪動物族群消滅，只要每年固定結紮「初始流浪動物族群數量」的50％，公母各半（假設原生族群為6000隻，每年必須結紮3000隻），15年內就可以成功。但一旦出現棄養，即使只有初始族群的5％（300隻），流浪動物的數量就只會降到特定數量，且永遠無法消失。


遊戲假設，在一個充滿500隻流浪狗的都會區（一個狗圖示等於50隻流浪狗），因為自然繁殖加上人類棄養，狗口不斷增加（每3秒刷新一次，等於實際時間1年）。一旦超過環境承載量5000隻狗（100個狗圖示），任務就會失敗。


結果顯示，點擊速度很難跟上狗口繁衍及棄養的速度。論文中指出，**棄養讓TNR的效果大打折扣，因此當棄養持續發生，降低流浪動物數量的成本就會不斷提高。**`,
}

export const researchRef = {
    link: "https://docs.google.com/spreadsheets/d/1IcqczsNEZKwch6511CzeYR0sGv8HYzN_OVRLXRYzMpU/edit?usp=sharing",
    text: "遊戲模型下載"
}
