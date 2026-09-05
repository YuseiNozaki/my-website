# Personal Website

個人サイトのソースコードです。

## 構成

```
my-website/
├── index.html        # トップページ
├── css/style.css     # 共通スタイル
├── js/main.js        # 共通スクリプト（スクロールアニメーション・Bootstrapメニュー補助・メール難読化）
├── img/              # 画像
├── career/           # 経歴ページ
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
従来の見た目に合わせ、本文の最大幅680px、メニュー切り替え520px、トップ画像の配置切り替え500pxを維持しています。

Bootstrapの公式導入手順: https://getbootstrap.com/docs/5.3/getting-started/introduction/
