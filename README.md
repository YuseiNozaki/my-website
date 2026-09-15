# Personal Website

個人サイトのソースコードです。

## 構成

```
my-website/
├── index.html        # ホーム
├── css/style.css     # 共通スタイル
├── js/main.js        # 共通スクリプト（スクロールアニメーション・Bootstrapメニュー補助・メール難読化）
├── img/              # 画像
├── profile/          # 経歴・資格等への転送
├── philosophy/       # 理念（文章のみ）
├── career/           # 経歴・資格等
├── research/         # 研究ページ
└── links/            # 関連サイト
```

## 技術スタック

- HTML / CSS / JavaScript
- Bootstrap 5.3.8（jsDelivr CDN、CSS・JavaScript bundle、SRI付き）
- `css/style.css` はBootstrapの後に読み込み、配色・書体・本文幅・装飾を調整

## デザイン

Bootstrapのコンテナ・グリッド・カード・ボタン・バッジ・Flexユーティリティを使用しています。
モバイルナビゲーションはBootstrap Collapseで開閉します。
従来の見た目に合わせ、本文の最大幅680px、5項目のメニュー切り替え640px、トップ画像の配置切り替え500pxを維持しています。

Bootstrapの公式導入手順: https://getbootstrap.com/docs/5.3/getting-started/introduction/

## 文章の更新

各ページの `index.html` を直接編集します。ナビゲーションは5ページ共通のため、項目変更時は全ページを揃えてください。
経歴・資格等は既存の経歴用スタイルを流用し、趣味はホームに掲載しています。
理念は `philosophy/index.html` の本文を編集し、見出しは `h2`、段落は `p`、強調は `strong`、明示的な改行は `br` を使います。
研究ページの「研究紹介」「業績一覧」コメントが編集範囲の目印です。
ホーム以外の4ページにパンくずリストと `BreadcrumbList` 構造化データを設置しています。
ページ追加・URL変更時は canonical・OGP・パンくずリストと構造化データ・`sitemap.xml` も更新します。

`/career/` を引き続き経歴ページのURLとして使用します。作業中の `/profile/` と `/profile/index.html` は JavaScript と meta refresh で `/career/` へ転送します。
JavaScript 有効時はクエリとハッシュも引き継ぎます。静的ホスティング向けの転送であり、HTTP 301 ではありません。
