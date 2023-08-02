
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