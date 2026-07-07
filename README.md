# Handoff: 日本キリスト教団 須崎教会 公式ウェブサイト

## Overview

須崎教会（高知県須崎市）の公式ウェブサイトのデザインです。プロテスタント教会として「教会の扉はいつでも誰にでも開かれている」というオープンで誠実な姿勢を、ウェブ体験として翻訳することが目的です。

- **主な目的**: 教会の周知・紹介、初めての方（求道者）の心理的ハードルを下げて来会を促す
- **ターゲット**: 教会に初めて足を運ぼうと考えている方、心の安らぎに興味がある方、既存の教会員
- **主要CTA**: 集会案内（礼拝時間）の確認、アクセス情報の確認、気軽な来会
- **構成**: 1ページ縦スクロール型（アンカーリンクで各セクションへ）

## About the Design Files

本パッケージに含まれる `須崎教会.html` は、**HTMLで作成されたデザインリファレンス**です。プロトタイプとして最終的な見た目・レイアウト・モーション・インタラクションを示していますが、そのまま本番コードとして流用することを想定していません。

**開発タスクは、このHTMLデザインを、ターゲットとなるコードベースの既存環境で再現すること**です。想定される実装環境：

- 既存のCMSやフレームワーク（Next.js / Astro / WordPress / MicroCMS など）がある場合は、そのパターンと既存ライブラリを尊重して再構築してください
- 環境がまだ決まっていない場合は、コンテンツ更新頻度（教会員の運用可能性）を考慮し、**Astro + MicroCMS もしくは WordPress** の採用を推奨します

## Fidelity

**High-fidelity (hifi)** — ピクセルパーフェクトなモックアップです。以下がすべて確定しています：

- 最終カラーパレット（oklch表記でCSSカスタムプロパティ化済み）
- タイポグラフィシステム（Google Fonts: Noto Serif JP + Cormorant Garamond）
- スペーシングスケール
- モーション設計（イージング関数、デュレーション）
- インタラクション（スクロール連動タイムライン、FAQアコーディオン、集会案内タブ）

開発者は、対象コードベースの既存ライブラリを用いて、このデザインをピクセルパーフェクトに再現してください。

## Screens / Views

シングルページ構成。上から順に以下のセクションが縦に並びます。

### 1. Navigation Bar（固定ヘッダー）

- **位置**: `position: fixed; top: 0`、全幅
- **高さ**: スクロール前 padding `1.25rem 3rem`、スクロール後 `0.9rem 3rem`（クラス `.scrolled` 付与）
- **背景**: スクロール前 透明 / スクロール後 `oklch(98% 0.008 75 / 0.88)` + `backdrop-filter: blur(16px)`
- **左側**: ブランドロゴ
  - "Susaki"（Cormorant Garamond Italic 24px, color `--wood-deep`）
  - "須崎教会"（Noto Serif JP Medium 15.2px, letter-spacing 0.15em）
- **右側**: メニューリンク5つ（Noto Serif JP 14.4px, letter-spacing 0.18em, color `--ink-secondary`）
  - ようこそ / 集会案内 / はじめての方へ / Instagram / アクセス
  - ホバー時: 下線がゴールドで左から右へアニメーション（300ms `--ease-linger`）
- **モバイル (≤767px)**: ハンバーガーメニュー → ドロワー（右から78%幅で `slideIn`）

### 2. Hero（ファーストビュー）

- **高さ**: `min-height: 100vh`
- **背景**: `hero.jpg`（ユーザー提供・教会内観・自然光）+ 白グラデーションオーバーレイ（上15% → 下85%）
- **エフェクト**:
  - 背景画像がゆっくり呼吸するように拡大縮小（`heroBreath` 20s alternate）
  - 上部右寄りに柔らかな光の放射（`radial-gradient`、`mix-blend-mode: soft-light`）
- **コンテンツ**（下寄せ配置、max-width 1200px 中央）:
  - Eyebrow: "Japan Christian Church — Susaki" (Cormorant Garamond Italic 18.4px, `--wood-deep`)
  - **見出し（御言葉）**: マタイによる福音書 第11章28節
    ```
    すべて、疲れた人、重荷を負っている人は、
    わたしのところに来なさい。わたしがあなたがたを
    休ませてあげます。
    ```
    - フォント: Noto Serif JP Light 300, サイズ 22.4px (`--verse-size: 1.4rem`)
    - 行間 2.4, 字間 0.18em
    - 各文節を `<span class="phrase">` で囲み `display: inline-block; white-space: nowrap` で文節内改行を禁止
    - 「わたしのところに来なさい。」のみ強調カラー `--wood-deep` + font-weight 400
  - 出典: "—— マタイによる福音書 第11章28節"（Noto Serif JP 13.1px, `--wood-deep`, letter-spacing 0.15em）
  - リード文: "日本キリスト教団 須崎教会は、高知県須崎市の小さなプロテスタント教会です。どうぞお気軽に、お立ち寄りください。"
  - **メタ情報**: 3列の集会情報（Sunday Worship 10:15 / Sunday School 9:00 / Prayer Meeting 10:30）
    - 上に1pxのヘアラインボーダー
- **フェードイン**: eyebrow → title → verse-ref → lead → meta が順に遅延 0.2s / 0.5s / 0.75s / 0.9s / 1.2s で下から20〜30px フェードアップ
- **下部中央**: "Scroll" テキスト + 縦線のパルスアニメーション（scrollHint 2.4s ループ）

### 3. Welcome セクション

- **背景**: `--bg-sub` (`oklch(95.5% 0.015 72)`)
- **上部**: 全幅グラデーションボーダー
- **セクションヘッダー**:
  - Eyebrow: "Welcome"（両サイドに40pxのヘアライン装飾）
  - Title: "ようこそ、須崎教会へ"
- **レイアウト**: 2カラム（左: 画像 4:5、右: テキスト）
  - タブレット以下は1カラム
- **画像**: `interior.jpg`（縦長）
  - 右上に 100×100 のゴールドの装飾フレーム（絶対配置、opacity 0.5）
- **本文見出し**:
  ```
  須崎教会は、
  日本基督キリスト教団に所属する
  プロテスタント教会です。
  ```
  - 「プロテスタント教会」のみゴールドの下線 + `--wood-deep`
- **署名**: "— 牧師 秦 貴詞"（Cormorant Garamond Italic）

### 4. Quick Guide（今週の集会案内カード）

- **セクション**: 白背景、上下パディング `--sp-8` (128px)
- **セクションヘッダー**: "This Week" / "今週の集会案内"
- **カードグリッド**: 3列 1px gap、外周 1px ボーダー
  - 各カード: `padding: 3rem 2.25rem`
    - 番号（01, 02, 03）: Cormorant Garamond Italic, color `--gold`
    - ラベル: Noto Serif JP Medium 18.4px（下に 1px ボーダー + 24px マージン）
    - 曜日: Noto Serif JP 15.2px, `--ink-secondary`
    - 時刻: Cormorant Garamond 25.6px, `--wood-deep`
  - ホバー時: 背景が `--bg-sub` に緩やかにフェード
- **CTAボタン**: "集会案内を詳しく見る →"
  - 1px `--wood-deep` ボーダー、透明背景、padding `1.1rem 2.75rem`
  - ホバー時: マウス位置を中心にゴールドの光がラジアルグラデーションでにじむ + 矢印が6px右にスライド + ボーダーがゴールドに変化

### 5. Meetings セクション（集会案内・タイムライン）★ 目玉

- **背景**: 白 (`--bg-base`)
- **導入文**: max-width 720px 中央寄せ、行間2.1
- **タブナビゲーション**: 6つのタブが横並び（下1pxヘアライン）
  - 主日礼拝 / 教会学校 / 祈祷会 / キリスト教講座 / 梼原礼拝 / 窪川聖餐礼拝
  - Active時: `border-bottom: 2px solid var(--gold)`
- **各パネル**: `.meeting-panel.active` のみ `display: block`
  - ヘッダー: 番号（大きなイタリック） / タイトル / 開催日時
  - Note ブロック: `--bg-sub` 背景 + 左に2pxゴールドボーダー

#### 主日礼拝タイムライン（インタラクティブ）

**最重要のデザインリスク要素**。以下の仕様で必ず実装してください：

- **構造**:
  - 縦のレール `.timeline__rail` （左 32px, 1pxヘアライン）
  - 縦の進行バー `.timeline__progress`（同位置、`linear-gradient(--gold-soft → --gold)`、height を JS で制御、`box-shadow: 0 0 12px --gold-soft`）
  - 17個のステップ（前奏〜後奏）
    - 各ステップ: 11×11px の丸ドット + 番号（イタリック大）+ ラベル + 説明
- **スクロール連動ロジック** (`updateTimeline()`):
  ```js
  const viewportCenter = window.innerHeight * 0.4; // ビューポート40%地点をハイライトライン
  ```
  - 進行バーの高さ = `(viewportCenter - railStart) / railHeight * railHeight`（0〜1にクランプ）
  - viewportCenter に最も近いステップを active に、それより上のステップは passed に
- **視覚状態**:
  - `.timeline__step`: opacity 0.32（デフォルト）
  - `.is-passed`: opacity 0.55, ドット色 `--gold` opacity 0.6
  - `.is-active`: opacity 1, ドットがゴールドに発光（`box-shadow: 0 0 0 6px oklch(70% 0.11 78 / 0.18), 0 0 20px --gold-soft`）+ scale 1.15, 番号が `--gold` に, 内側が 8px 右にスライド
- **フッターノート**: 「＊印の箇所はお差し支えない方はご起立ください」

### 6. FAQ セクション（はじめての方へ）

- **背景**: `--bg-sub`, 上下パディング `--sp-9` (192px)
- **セクションヘッダー**: "First Visit" / "はじめての方へ"
- **リード文**: 中央寄せ
- **FAQリスト**: 10項目のアコーディオン
  - 各項目: 上下 1px ヘアライン、`padding: 1.75rem 0.5rem`
  - Q行: `grid-template-columns: auto 1fr auto` (Q. マーク / 質問 / トグル+/-)
    - "Q." は Cormorant Garamond Italic 21.6px, `--gold`
    - 質問は Noto Serif JP Medium 16.3px
    - トグル: 22×22px の＋アイコン（1pxライン交差）
  - ホバー時: 左に 1rem のパディング増加
  - Open時: A行が展開、"＋" が "−" に変化（after要素が90度回転して消える）
  - A行: `padding: 0 3rem 2rem 3rem`, "A." マーク（`--wood`）+ 回答テキスト（行間2.0）
  - max-height トランジション（0 → 400px, 500ms `--ease-linger`）

**FAQ内容（全10問）**:

| # | Q | A |
|---|---|---|
| 1 | 初めて教会に行きます。予約は必要ですか? | いいえ、予約は不要です。当日そのままお越しください。受付にて「初めてです」とお伝えいただければ、ご案内いたします。 |
| 2 | 信者ではありませんが、礼拝に参加できますか? | はい、どなたでも自由にご参加いただけます。信者かどうかは問いません。 |
| 3 | 費用はかかりますか? 献金はいくらすればいいですか? | 参加費用は一切かかりません。献金は感謝の表れであり、強制ではなく金額の決まりもありません。 |
| 4 | どんな服装で行けばいいですか? | 服装に決まりはありません。普段着でお越しください。 |
| 5 | 持ち物は必要ですか? | 手ぶらでどうぞ。聖書（新共同訳）や讃美歌（1954年版、讃美歌21）は貸し出しいたします。 |
| 6 | 讃美歌を知らないので歌えません。 | 心を合わせていただければ、歌わなくても大丈夫です。 |
| 7 | 小さい子供を連れて行っても大丈夫ですか? | はい、もちろんです。礼拝堂後方の畳の部屋でも、一緒に礼拝することができます。静かにできなくても大丈夫、ご安心ください。 |
| 8 | 駐車場はありますか? | はい、ございます。入り口横または園庭に駐車していただけます。 |
| 9 | しつこい勧誘はありませんか? | 信仰を押し付けるような勧誘は一切行いません。 |
| 10 | 牧師先生とお話はできますか? | はい、ご相談がある方には個別にお時間を設けます。お気軽にお声がけください。 |

### 7. Instagram セクション

- **背景**: 白、上部にヘアライン
- **セクションヘッダー**: "Instagram" / "日々の信仰のともしび"
- **リード文**: 「日曜日の礼拝や、教会の日常をInstagramでお届けしています。」
- **グリッド**: 6セルの正方形（1:1 aspect-ratio）
  - PC: 6列、タブレット: 3列（5〜6番目非表示）、スマホ: 2列（5〜6番目非表示）
  - 各セル: プレースホルダー（斜めストライプパターン + "Post 01" 等ラベル）
  - ホバー時: `translateY(-4px)` + box-shadow + 内側にゴールドオーバーレイ
- **CTAボタン**: "Instagramを見る" + Instagram SVGアイコン（stroke 1.4px, 18×18px）

**実装ハンドオフ用メモ**:
- `#insta-grid` 内の `.insta-cell` は後で以下のいずれかに差し替え：
  1. 単純リンク差し替え（各`<a href="#">`を各投稿URLに変更、`.insta-cell__inner` を `<img>` に置換）
  2. Instagram Graph API による動的取得
  3. LightWidget / SnapWidget 等の埋め込みウィジェットで置換
- `#insta-follow` の `href` を公式アカウントURLに変更

### 8. Access セクション

- **セクションヘッダー**: "Access & Contact" / "アクセス・連絡先"
- **レイアウト**: 2カラム（左: 情報、右: 地図）
- **情報カラム**:
  - `<dl>` 定義リスト（`grid-template-columns: 8rem 1fr`）：団体名、住所、電話、FAX、メール
  - 上下 1px ヘアラインボーダー
  - 電話・メールはリンク化（下線がホバーでゴールドに）
- **交通アクセス**: "By Transportation" 見出し + `<ul>`
  - 各項目: 左に 8px のゴールドライン装飾
  - JR土讃線「須崎駅」より徒歩8分 / 高知交通バス「須崎局前」より徒歩1分 / 車：須崎中央インターより3分
- **牧師紹介ブロック**:
  - `--bg-sub` 背景、`padding: 2rem`
  - 左に 88×88px の丸写真（`pastor.jpg`）
  - 右に "Pastor" ラベル + "秦 貴詞" + 読み仮名「はた たかふみ」
- **地図**: Google Maps iframe (aspect-ratio 4:5)
  - URL: `https://www.google.com/maps?q=高知県須崎市東古市町1番8号&output=embed`
  - `filter: saturate(0.85) contrast(0.95)` で控えめに

### 9. Footer

- **背景**: `oklch(20% 0.015 60)` ダークウッド
- **上部**: グラデーションゴールドライン
- **3カラム**:
  1. ブランド: "Susaki Church" (Cormorant Garamond Italic) + "日本キリスト教団 須崎教会" + メッセージ
  2. Contents: サイト内リンク
  3. Contact: 住所・電話・FAX
- **下部**: コピーライトと "The doors are always open to everyone."

## Interactions & Behavior

### スクロール連動リビール
- 全 `.reveal` クラス要素が `IntersectionObserver` (threshold 0.15, rootMargin `0px 0px -60px 0px`) で監視
- 交差時に `.is-visible` を付与 → opacity 0 → 1, translateY 30px → 0 (1200ms `--ease-linger`)
- 一度表示されたら unobserve（再表示しない）

### 主日礼拝タイムライン（前述）
- スクロール毎に `updateTimeline()` を実行（passive listener）
- resize 時にも更新

### FAQ アコーディオン
- Q ボタンクリックで `.faq__item` に `.is-open` トグル
- max-height 0 → 400px（500ms `--ease-linger`）
- 同時に他を閉じない仕様（複数開ける）

### 集会案内タブ切替
- `.meetings__tab` クリックで対応する `.meeting-panel` を active に
- パネル切替時 `fadeIn` 0.6s
- worship タブに戻った時は `updateTimeline()` を再実行

### ボタンホバー効果
- CTA ボタン (`.btn`) のマウス移動時に CSS カスタムプロパティ `--x`, `--y` を更新
- ラジアルグラデーションのゴールド光がマウス位置に追従（before疑似要素）

### ナビゲーション
- スクロール 40px 以上で `.scrolled` クラス付与 → 背景ブラー + シャドウ
- モバイル: ハンバーガークリックで `.menu-open` トグル、ドロワースライドイン
- リンククリック時にドロワー自動閉じ

### ヒーロー
- 背景画像: `heroBreath` 20s ease-in-out alternate（無限ループ、scale 1.05 → 1.1）
- コンテンツ順次フェードイン（前述）

## State Management

シンプルなイベント駆動、フレームワーク不要。React/Vue で再実装する場合：

```js
// React example
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [activeMeetingTab, setActiveMeetingTab] = useState('worship');
const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
const [activeTimelineStep, setActiveTimelineStep] = useState(-1);
const [timelineProgress, setTimelineProgress] = useState(0);
```

- スクロールリスナーは `passive: true`、`requestAnimationFrame` でスロットリング推奨
- 静的コンテンツなので data fetching は Instagram セクションのみ（実装保留）

## Design Tokens

すべて CSS カスタムプロパティで `:root` に定義済み。以下を対象コードベースのテーマファイル（tailwind.config.js / theme.ts / variables.scss 等）に移植してください。

### Colors (oklch)

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `oklch(98% 0.008 75)` | ウォームアイボリー基調背景 |
| `--bg-sub` | `oklch(95.5% 0.015 72)` | ペールベージュ・セクション切替 |
| `--bg-deep` | `oklch(92% 0.022 68)` | 木目セクション・画像プレースホルダー |
| `--ink-primary` | `oklch(22% 0.015 60)` | 深い墨色・主要文字 |
| `--ink-secondary` | `oklch(38% 0.02 60)` | 中間文字 |
| `--ink-muted` | `oklch(55% 0.02 60)` | 補助文字 |
| `--ink-hairline` | `oklch(82% 0.015 65)` | 罫線 |
| `--wood` | `oklch(55% 0.05 55)` | ウッドベージュ |
| `--wood-deep` | `oklch(42% 0.055 50)` | ダークウッド・強調文字 |
| `--gold` | `oklch(70% 0.11 78)` | 穏やかなゴールド・アクセント |
| `--gold-soft` | `oklch(85% 0.06 82)` | 光のハイライト |

**注意**: oklch を直接使用できない環境（古いブラウザや Tailwind v2）では、以下の HEX 近似値を使用してください（PostCSS の oklch プラグイン導入を推奨）：

| Token | HEX approx |
|---|---|
| `--bg-base` | `#faf7f2` |
| `--bg-sub` | `#f2ede4` |
| `--bg-deep` | `#e8ddd0` |
| `--ink-primary` | `#2b241d` |
| `--ink-secondary` | `#524940` |
| `--ink-muted` | `#7d726a` |
| `--ink-hairline` | `#d4ccc0` |
| `--wood` | `#8a725a` |
| `--wood-deep` | `#6a5238` |
| `--gold` | `#c39a52` |
| `--gold-soft` | `#dcc48a` |

### Typography

- **日本語 明朝**: `Noto Serif JP` (weights: 300, 400, 500, 600, 700)
- **英字 セリフ**: `Cormorant Garamond` (weights: 300, 400, 500 + italic 300)
- **日本語 ゴシック（補助）**: `Noto Sans JP` (weights: 300, 400, 500)

Google Fonts CDN:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet">
```

### Spacing Scale (8pt-based, generous)

| Token | Value | 用途 |
|---|---|---|
| `--sp-1` | 0.5rem (8px) | 極小ギャップ |
| `--sp-2` | 1rem (16px) | 標準ギャップ |
| `--sp-3` | 1.5rem (24px) | 中ギャップ |
| `--sp-4` | 2rem (32px) | 大ギャップ |
| `--sp-5` | 3rem (48px) | 特大 |
| `--sp-6` | 4rem (64px) | セクション内 |
| `--sp-7` | 6rem (96px) | セクション内大 |
| `--sp-8` | 8rem (128px) | セクションパディング |
| `--sp-9` | 12rem (192px) | 特大セクション |

### Layout

- `--max-w`: 1200px（メインコンテンツ最大幅）
- `--max-w-text`: 720px（テキストブロック最大幅・可読性重視）
- Breakpoint: SP `≤767px` / Tablet `≤1024px` / PC `≥1025px`

### Motion / Easing

| Token | Value | 特徴 |
|---|---|---|
| `--ease-linger` | `cubic-bezier(0.16, 1, 0.3, 1)` | 「重みと柔らかさ」= 静かに減速して着地。主要トランジション |
| `--ease-drift` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | ドリフト・呼吸系 |
| `--dur-slow` | 1200ms | リビール |
| `--dur-med` | 700ms | ホバー・状態変化 |
| `--dur-fast` | 350ms | 小要素の反応 |

### その他

- Border radius: **基本なし**（角丸は使用しない、または極小 4px 未満）
- Shadow: `0 12px 32px oklch(50% 0.05 60 / 0.12)` (カードホバー時のみ)
- 背景テクスチャ: `<body>` に微細ドットパターン（40px, 60px 二重ラジアルグラデーション）で紙質感を表現

## Assets

すべての画像はユーザー（クライアント）が同フォルダに指定ファイル名で差し込む前提です。開発者は指定ファイル名を維持したまま実装してください。

| Filename | 用途 | 推奨仕様 |
|---|---|---|
| `hero.jpg` | ヒーロー背景 | 1920×1080px、教会内観・自然光が差し込む写真 |
| `interior.jpg` | Welcome セクション画像 | 縦長（4:5）、木の温もりが感じられる礼拝堂 |
| `pastor.jpg` | 牧師写真 | 正方形推奨、丸トリミングで表示 |
| `exterior.jpg` | 予備枠（外観） | ー |
| `worship.jpg` | 予備枠（礼拝の様子） | ー |

**アイコン**: Instagram SVG のみインライン。Lucide や Feather Icons 等を導入して統一しても可（stroke-width 1.4px 準拠）。

## Tweaks Panel（本番不要）

`須崎教会.html` にはデザイン検証用の **Tweaks Panel**（右下フローティング）が含まれています。ヒーロー御言葉の文字サイズ・字間・行間・幅を調整するための一時的なUIです。**本番実装では削除してください**。

該当箇所:
- HTML: `<div class="tweaks" id="tweaks" hidden>` ブロック全体
- CSS: `.tweaks` 関連スタイルすべて（`<style>Tweaks panel</style>` ブロック）
- JS: `TWEAK_DEFAULTS` 定数と `applyTweak()` 関数を含む `<script>` ブロック

現在のヒーロー御言葉の確定値（ユーザー確認後に固定されたら反映）:
- `--verse-size: 1.4rem`
- `--verse-size-sp: 1rem`
- `--verse-tracking: 0.18em`
- `--verse-leading: 2.4`
- `--verse-width: 44rem`

## SEO

対象キーワード:
- 須崎教会
- 高知県 須崎市 教会
- プロテスタント 礼拝

必須メタタグ:
```html
<title>日本キリスト教団 須崎教会 ｜ 教会の扉は、いつでも誰にでも開かれています</title>
<meta name="description" content="高知県須崎市のプロテスタント教会。日本キリスト教団 須崎教会。毎週日曜10:15より主日礼拝。初めての方も、どうぞお気軽にお立ち寄りください。">
```

追加推奨（本番実装時）:
- `og:image` に教会外観の写真
- `og:type: website`
- 構造化データ (JSON-LD): `Church` schema（住所、電話、営業時間）
- `sitemap.xml`, `robots.txt`
- Google Search Console 登録
- 公式 Google ビジネスプロフィール連携

## Accessibility

- `prefers-reduced-motion: reduce` に対応済み（すべてのアニメーション/トランジションを 0.01ms に）
- タップターゲット最小 44px
- SP最小フォントサイズ 15px
- セマンティックHTML（`<nav>`, `<header>`, `<section>`, `<footer>`）
- ハンバーガーに `aria-label`
- FAQ の toggle アイコンに `aria-hidden="true"`
- 開発者は追加で以下を実装してください：
  - FAQ アコーディオンに `aria-expanded`, `aria-controls`
  - タブに `role="tablist"` / `role="tab"` / `aria-selected`
  - フォーカスリング（現在はブラウザデフォルト）を `--gold` で明示

## Files

このパッケージに含まれる設計リファレンス:

- `須崎教会.html` — メインプロトタイプ（フルページ・スタイル・スクリプトすべてインライン）

**注**: 実運用では、CSSは外部ファイル化、JSはモジュール化、テンプレートエンジン（Astro / Next.js / EJS 等）でセクション分割することを推奨します。

## Recommended Implementation Path

1. **フレームワーク選定**: 教会員の運用性を考慮し、**Astro + MicroCMS** または **WordPress + カスタムテーマ** を推奨
2. **デザイントークン移植**: `src/styles/tokens.css` に CSS カスタムプロパティを移植
3. **フォント最適化**: Google Fonts を `next/font` 等でセルフホスト、`font-display: swap`
4. **画像最適化**: `hero.jpg` は WebP/AVIF 変換 + `<picture>` タグでレスポンシブ対応
5. **セクションごとのコンポーネント化**: Nav / Hero / Welcome / QuickGuide / Meetings / FAQ / Instagram / Access / Footer
6. **タイムラインの再実装**: `IntersectionObserver` + `requestAnimationFrame` でスムーズに
7. **Tweaks Panel の削除**
8. **本番デプロイ**: Vercel / Netlify / さくらインターネット等

## Contact

デザインに関する質問は、けん様（For Two）経由で承っています。
