console.log("Day 2 スタート!");

// ========================================
// Day 1の復習: 簡単なウォーミングアップ
// ========================================

const numbers = [10, 20, 30, 40, 50];

// 復習1: 各要素を2倍にする
const doubled = numbers.map(n => n * 2);
console.log("=== 復習: map ===");
console.log("2倍:", doubled);

// 復習2: 30以上の数だけ抽出
const largeNumbers = numbers.filter(n => n >= 30);
console.log("=== 復習: filter ===");
console.log("30以上:", largeNumbers);

// 復習3: 合計を計算
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("=== 復習: reduce ===");
console.log("合計:", sum);


// ========================================
// 今日のメイントピック1: オブジェクトの深い操作
// ========================================

console.log("\n=== オブジェクトの深い操作 ===");

// サンプルデータ: ユーザー情報
const user = {
  id: 1,
  name: "田中太郎",
  age: 28,
  email: "tanaka@example.com",
  address: {
    city: "東京",
    zip: "100-0001"
  },
  hobbies: ["読書", "ランニング", "料理"]
};

console.log("ユーザー情報:", user);

// オブジェクトのプロパティにアクセス
console.log("名前:", user.name);
console.log("年齢:", user.age);
console.log("都市:", user.address.city);  // ネストしたオブジェクト
console.log("趣味:", user.hobbies);


// ========================================
// 課題1: オブジェクトの操作
// ========================================

// 以下のユーザーデータを使って操作してみましょう
const users = [
  { id: 1, name: "田中", age: 25, active: true, score: 85 },
  { id: 2, name: "佐藤", age: 30, active: false, score: 92 },
  { id: 3, name: "鈴木", age: 22, active: true, score: 78 },
  { id: 4, name: "高橋", age: 35, active: true, score: 95 },
  { id: 5, name: "伊藤", age: 28, active: false, score: 88 }
];

// ===== 課題1-1: activeがtrueのユーザーだけを抽出 =====
const activeUsers = users.filter(user => {
  // ここに実装
  return user.active
});

console.log("=== 課題1-1: アクティブユーザー ===");
console.log(activeUsers);

// ===== 課題1-2: 全ユーザーのスコアの平均を計算 =====
const totalScore = users.reduce((sum, user) => {
  // ここに実装（合計スコアを計算）

  return user.score + sum;
}, 0);

const averageScore = totalScore / users.length;

console.log("=== 課題1-2: 平均スコア ===");
console.log(`平均: ${averageScore}点`);

// ===== 課題1-3: 各ユーザーにランクを追加 =====
// スコアが90以上: "A", 80以上: "B", それ以外: "C"
const usersWithRank = users.map(user => {
  let rank;
  if (user.score >= 90) {
    rank = "A";
  } else if (user.score >= 80) {
    rank = "B";
  } else {
    rank = "C";
  }
  
  // ここに実装（userにrankを追加して返す）
  return { ...user, rank: rank };
});

console.log("=== 課題1-3: ランク付き ===");
console.log(usersWithRank);


// ========================================
// 今日のメイントピック2: 分割代入（Destructuring）
// ========================================

console.log("\n=== 分割代入の基礎 ===");

// オブジェクトの分割代入
const person = { name: "山田", age: 30, job: "エンジニア" };

// 従来の書き方
const personName = person.name;
const personAge = person.age;
console.log("従来の方法:", personName, personAge);

// 分割代入の書き方
const { name, age, job } = person;
console.log("分割代入:", name, age, job);

// 配列の分割代入
const colors = ["赤", "青", "緑"];
const [first, second, third] = colors;
console.log("配列の分割代入:", first, second, third);


// ========================================
// 課題2: 分割代入を使ってみる
// ========================================

const product = {
  id: 101,
  name: "ノートPC",
  price: 150000,
  specs: {
    cpu: "Core i7",
    ram: "16GB",
    storage: "512GB SSD"
  }
};

// ===== 課題2-1: productからname、priceを取り出す =====
// ここに実装（分割代入を使う）
// const { ... } = product;
const { name: productName, price: productPrice } = product;

console.log("=== 課題2-1: 商品情報 ===");
 console.log(`商品名: ${productName}`);
 console.log(`価格: ${productPrice}円`);

// ===== 課題2-2: specsからcpu、ramを取り出す（ネストした分割代入） =====
// ここに実装
// const { specs: { ... } } = product;
const { specs:{cpu,ram}} = product

console.log("=== 課題2-2: スペック情報 ===");
console.log(`CPU: ${cpu}`);
console.log(`RAM: ${ram}`);


// ========================================
// 今日のメイントピック3: 関数の基礎
// ========================================

console.log("\n=== 関数の基礎 ===");

// 関数宣言
function greet(name) {
  return `こんにちは、${name}さん！`;
}

console.log(greet("田中"));

// 関数式
const add = function(a, b) {
  return a + b;
};

console.log("5 + 3 =", add(5, 3));

// アロー関数（昨日使っていたもの）
const multiply = (a, b) => a * b;

console.log("4 × 7 =", multiply(4, 7));


// ========================================
// 課題3: 関数を作成する
// ========================================

// ===== 課題3-1: 消費税込みの価格を計算する関数 =====
// 引数: price（税抜き価格）
// 戻り値: 税込み価格（1.1倍）

function calculateTaxIncluded(price) {
  // ここに実装
  return price * 1.1
}

console.log("=== 課題3-1: 消費税計算 ===");
console.log("1000円の税込み:", calculateTaxIncluded(1000), "円");
console.log("5000円の税込み:", calculateTaxIncluded(5000), "円");


// ===== 課題3-2: ユーザーが成人かどうか判定する関数 =====
// 引数: age（年齢）
// 戻り値: 18歳以上ならtrue、未満ならfalse

function isAdult(age) {
  // ここに実装
  if (age >= 18){
    return true
  }else{
    return false
  }
}

console.log("=== 課題3-2: 成人判定 ===");
console.log("20歳:", isAdult(20));  // true
console.log("15歳:", isAdult(15));  // false


// ===== 課題3-3: 配列の中の最大値を見つける関数 =====
// 引数: numbers（数値の配列）
// 戻り値: 配列の中の最大値

function findMax(numbers) {
  // ヒント: reduceを使うか、Math.max()を使う
  // ここに実装
  return numbers.reduce((max,num) => {
        if (num > max){
            return num}else{
                return max;
            }
        },0)
  }


console.log("=== 課題3-3: 最大値検索 ===");
console.log("[10, 50, 30, 90, 20]の最大値:", findMax([10, 50, 30, 90, 20]));


// ========================================
// ボーナス課題: 総合演習
// ========================================

// 商品データ
const products3 = [
  { id: 1, name: "Tシャツ", price: 2000, category: "衣類", inStock: true },
  { id: 2, name: "ジーンズ", price: 8000, category: "衣類", inStock: false },
  { id: 3, name: "マグカップ", price: 1500, category: "雑貨", inStock: true },
  { id: 4, name: "ノート", price: 500, category: "文具", inStock: true },
  { id: 5, name: "ペン", price: 300, category: "文具", inStock: false }
];

// ===== ボーナス課題: 在庫ありの商品の税込み価格リストを作成 =====
// 1. inStockがtrueの商品だけ抽出
const haveinStock = products3.filter(product =>{
  return product.inStock
}
)
  console.log(haveinStock)

// 2. 各商品の価格を1.1倍（税込み）にする
const taxIncludedPrice = haveinStock.map(product =>{
  return {                  // ステップ2: オブジェクトを返す
      name: product.name,
      taxIncludedPrice: product.price * 1.1
  }
}
)
console.log(taxIncludedPrice)
// 3. { name, taxIncludedPrice }の形式で返す

const availableProductsWithTax = products3
  .filter(product => {
    // ここに実装
    return product.inStock;

  })
  .map(product => {
    // ここに実装
    return
    name:product.name
    taxIncludedPrice:product.price * 1.1
  });

//console.log("=== ボーナス課題: 在庫あり商品（税込み） ===");
//console.log(availableProductsWithTax);
