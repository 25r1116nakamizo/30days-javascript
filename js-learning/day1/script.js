console.log("Day 1 スタート!");

// ========================================
// 基礎学習: map, filter, reduceの動作確認
// ========================================

// ===== 1. map: 各要素を変換 =====
const numbers = [1, 2, 3, 4, 5];

// 各要素を2倍にする
const doubled = numbers.map(num => num * 2);
console.log("元の配列:", numbers);
console.log("2倍にした配列:", doubled);

// ===== 2. filter: 条件に合う要素だけ抽出 =====
const ages = [15, 22, 18, 30, 12, 25];

// 18歳以上だけ取得
const adults = ages.filter(age => age >= 18);
console.log("全年齢:", ages);
console.log("18歳以上:", adults);

// ===== 3. reduce: 配列を1つの値にまとめる =====
const prices = [100, 200, 300, 400];

// 合計金額を計算
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("価格リスト:", prices);
console.log("合計金額:", total);


// ========================================
// 実践課題: 商品データの操作
// ========================================

const products = [
  { id: 1, name: "りんご", price: 100, category: "果物", stock: 50 },
  { id: 2, name: "バナナ", price: 120, category: "果物", stock: 30 },
  { id: 3, name: "にんじん", price: 80, category: "野菜", stock: 20 },
  { id: 4, name: "トマト", price: 150, category: "野菜", stock: 40 },
  { id: 5, name: "ぶどう", price: 200, category: "果物", stock: 15 }
];

// ===== 課題1: すべての商品価格を1.1倍（10%値上げ）した新しい配列を作る =====
// ヒント: mapを使う
const priceIncreased = products.map(product => {
  // ここに実装
  // 新しいオブジェクトを返す必要があります
  // 例: { ...product, price: product.price * 1.1 }
});

console.log("=== 課題1: 10%値上げ ===");
console.log(priceIncreased);

// ===== 課題2: 100円以上の商品だけを抽出 =====
// ヒント: filterを使う
const expensiveProducts = products.filter(product => {
  // ここに実装
  // 条件を満たすかどうかを返す
});

console.log("=== 課題2: 100円以上の商品 ===");
console.log(expensiveProducts);

// ===== 課題3: すべての商品の合計金額を計算 =====
// ヒント: reduceを使う
const totalPrice = products.reduce((sum, product) => {
  // ここに実装
  // 累積値に現在の商品価格を足す
}, 0); // 初期値は0

console.log("=== 課題3: 合計金額 ===");
console.log(`合計: ${totalPrice}円`);

// ===== 課題4: 果物カテゴリーの商品だけ抽出し、その平均価格を計算 =====
// ヒント: filterとreduceを組み合わせる
const fruits = products.filter(product => {
  // ここに実装（果物だけ抽出）
});

const fruitTotalPrice = fruits.reduce((sum, product) => {
  // ここに実装（果物の合計金額）
}, 0);

const averageFruitPrice = fruitTotalPrice / fruits.length;

console.log("=== 課題4: 果物の平均価格 ===");
console.log(`果物の平均: ${averageFruitPrice}円`);

// ===== 課題5（チャレンジ）: カテゴリー別の在庫数を計算 =====
// ヒント: reduceでオブジェクトを作る
// 期待する結果: { 果物: 95, 野菜: 60 }
const stockByCategory = products.reduce((acc, product) => {
  // ここに実装
  // accは累積値（オブジェクト）
  // product.categoryをキーとして、stockを加算していく
  return acc;
}, {}); // 初期値は空のオブジェクト

console.log("=== 課題5: カテゴリー別在庫 ===");
console.log(stockByCategory);
