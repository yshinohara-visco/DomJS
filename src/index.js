
//chromeはshift+ctrl+lでコンソール表示
console.log("test");

//id指定で要素を取得
{
    // getElementByIdを用いて要素を取得
    const title1 = document.getElementById("title");
    console.log(title1); //<h1 id="title">Hello World!!</h1>

    // querySelectorを用いて要素を取得
    const title2 = document.querySelector("#title");
    console.log(title2); //<h1 id="title">Hello World!!</h1>
}

//クラス名でElementを取得
{
    // getElementsByClassNameを使う→全て取得
    const containers = document.getElementsByClassName("container");
    console.log(containers); //class="container"を指定した2つのdivが出力される

    // querySelectorによるElementの取得→最初の一つを取得
    const container = document.querySelector(".container");
    console.log(container); 
    //<div class="container">
    //<p>エリア1です</p>
    //</div>

    // querySelectorAllによる取得→全て取得
    const containers2 = document.querySelectorAll(".container");
    console.log(containers2); //2つ表示
}


//DOMの作成
{
    const divEl = document.createElement("div");
    console.log(divEl); //<div></div>
}
//DOMの追加
{
    //divタグの作成
    const divEl = document.createElement("div");
    //pタグの作成
    const pEl = document.createElement("p");
    //divタグ配下にpタグを追加
    divEl.appendChild(pEl); //末尾に追加される
    console.log(divEl); //<div><p></p></div>
    
    //h2タグの作成
    const h2El = document.createElement("h2");
    divEl.prepend(h2El); //先頭に追加
    console.log(divEl); //<div><h2></h2><p></p></div>
}


//実際に追加してみる
{
    //buttonタグの作成
    const buttonEl = document.createElement("button");
    //ラベルの設定
    buttonEl.textContent = "ボタンHoge";

    //エリア1のdivタグを取得してボタンを追加
    const div1El = document.querySelector(".container");
    div1El.appendChild(buttonEl);
}

//削除してみる
{
    //h1タグの取得
    const h1El = document.getElementById("title");
    //bodyタグの取得
    const bodyEl = document.querySelector("body");
    //bodyタグ配下からh1を削除
    bodyEl.removeChild(h1El);

    //全要素削除する時はtextContentをnullにする
    //bodyEl.textContent = null;
}