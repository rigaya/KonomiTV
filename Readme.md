
# <img width="350" src="https://user-images.githubusercontent.com/39271166/134050201-8110f076-a939-4b62-8c86-7beaa3d4728c.png" alt="KonomiTV">

<img width="100%" src="https://user-images.githubusercontent.com/39271166/134043865-d4551e1f-b926-4a36-8214-14c9fb7c9614.png"><br>

## 備考・注意事項

- 現在 α 版で、まだ実験的なプロダクトです。通常利用には耐えないでしょうし、サポートもできません。
  - 安定しているとは到底言いがたい品質ですが、それでも構わない方のみ導入してください。
  - 使い方などの説明も用意できていないため、自力でトラブルに対処できるエンジニアの方以外には現状おすすめできません。
  - 今後インストーラーを開発予定ですが、後述の通り現時点ではインストール方法がかなり煩雑になっています。
    - そもそも私の環境でしか動作確認をしていないため、他の環境で動作するのかさえも微妙です。
  - 完成予想はおろか、TVRemotePlus で実装していた機能に関してもほとんどカバーできていないため、現時点で TVRemotePlus を代替できるレベルには達していません。
- TVRemotePlus の後継という位置づけのソフトですが、それはあくまで「精神的な」ものであり、実際の技術スタックや UI/UX は完全に新規設計となっています。
  - 確かに TVRemotePlus の開発で得られた知見を数多く活用していますし開発者も同じではありますが、ユーザービリティや操作感は大きく異なると思います。
  - TVRemotePlus の技術スタックでは解決不可能なボトルネックを根本的に解消した上で、「同じものを作り直す」のではなく、ゼロから新しいテレビ視聴・録画視聴のユーザー体験を作り上げ、追求したいという想いから開発しています。
  - どちらかというと録画視聴機能の方がメインの予定でいますが、現時点ではテレビのライブ視聴機能のみの実装です。構想は壮大ですが、全て実装し終えるには年単位で時間がかかるでしょう。
- 現時点ではスマホには対応していません。Android であれば再生させる事自体は可能ですが、画面幅が PC 向けのため大幅に崩れ、まともに使えないでしょう。
  - タブレット (Fire HD 10 (2021), iPad mini 4) である程度動作することは確認しました。とはいえ、まだタッチデバイスに最適化できているわけではありません。
  - iPhone は Media Source Extensions API に対応していないため、現時点では動作しません。
    - 今後 HLS 再生モードを導入する予定ですが、私が iPhone を常用していない事もあり、実装時期は未定です。
- 今後、開発の過程で設定や構成が互換性なく大幅に変更される可能性があります。
- ユーザービリティなどのフィードバック・不具合報告・Pull Requests (PR) などは歓迎します。
  - 技術スタックはサーバー側が Python + [FastAPI](https://github.com/tiangolo/fastapi) + [Tortoise ORM](https://github.com/tortoise/tortoise-orm) + [Uvicorn](https://github.com/encode/uvicorn) 、クライアント側が Vue.js + [Vuetify](https://github.com/vuetifyjs/vuetify) の SPA です。
    - Vuetify は補助的に利用しているだけで、大部分は独自で書いた SCSS スタイルを適用しています。
  - コメントを多めに書いているので、少なくとも TVRemotePlus なんかよりかは読みやすいコードになっている…はず。
  - 他人が見るために書いたものではないのであれですが、一応自分用の[開発資料](https://mango-garlic-eff.notion.site/KonomiTV-90f4b25555c14b9ba0cf5498e6feb1c3)と[DB設計](https://www.notion.so/KonomiTV-544e02334c89420fa24804ec70f46b6d)的なメモを公開しておきます。もし PR される場合などの参考になれば。

<img width="100%" src="https://user-images.githubusercontent.com/39271166/134045489-54476f7b-0072-48b6-b324-467974ecfc21.png"><br>

## 動作環境

Python 3.9 がインストールされた Windows 10 Home で開発と動作確認を行っています。  
Python 3.8 でも動作しますが、asyncio を多用しているため、3.7 以前ではまともに動かない可能性が高いです。  

Linux (Ubuntu 20.04 LTS x64) で動作することも確認しました。  
ただし Windows ほどあまり検証できていないので、環境によっては動かないかもしれません。  
また、ARM 向けのサードパーティライブラリの実行ファイルを同梱していないため、ARM 版の Ubuntu では現状動作しません。

バックエンドは Mirakurun と EDCB から選べます。お使いの録画環境に合わせて選択してください。  
仕組み上、EDCB バックエンドの方がチャンネル切り替えなどにかかる待機時間が速くなっています。EDCB 環境があれば EDCB バックエンドにした方が少し快適です。

Mirakurun バックエンドを利用する場合は、Mirakurun 3.9.0 以降が必要です。3.8.0 以前でも動作しますが、おすすめはしません。  
また、リバースプロキシを挟んでいるなどで Basic 認証が掛かっていると正常に動作しません。

EDCB バックエンドを利用する場合は、最新（210828以降）の [xtne6f 版 EDCB](https://github.com/xtne6f/EDCB) 、または [tkntrec 版 EDCB](https://github.com/tkntrec/EDCB) が必要です。  
EpgDataCap_Bon 側の制約の関係で、現時点では KonomiTV と EDCB が同じ PC 上で稼働している必要があります。将来的には改善予定です。  
このほか、EpgTimer / EpgTimerSrv にいくつか事前設定が必要です。

- 「視聴に使用するBonDriver」に BonDriver を追加する **（重要）**
- 「EpgTimerNWなどからのネットワーク接続を許可する」にチェックを入れる
- xtne6f 版 EDCB の場合、「EpgTimerSrv の応答を tkntrec 版互換にする」にチェックを入れる（tkntrec 版 EDCB では既定で有効）
- EpgDataCap_Bon の TCP 送信設定で「0.0.0.1:0」(SrvPipe) を追加する

このほか、EpgTimerSrv.exe にファイアウォールが掛かっているとネットワーク接続ができません。適宜ファイアウォールの設定を変更してください。

> 必須ではありませんが、Windows で PLEX 製チューナーを利用している場合は、事前にドライバを [px4_drv for WinUSB](https://github.com/nns779/px4_drv) に変更しておくことを推奨します。  
> px4_drv では公式ドライバと比べてチューナーの起動時間が大幅に短縮されています。その分 KonomiTV での視聴までにかかる待機時間も短くなるため、より快適に使えます。

## インストール方法（暫定）

以下は暫定的なインストール方法です。  
ただし、すべての環境でこの通りに進めて動くとは限りません。保証もできないので、すべて自己責任のもとでお願いします。

事前に Python 3.9 がインストールされている事を前提とします。  
なお、Microsoft ストアからインストールした Python では確実にまともに動作しません。

Windows の場合、インストール先をデフォルトの AppData 以下にするとそのユーザーしか使えなくなってしまいますが、とはいえ `C:\Program Files` 以下にインストールするとパッケージのインストールで管理者権限が必要になるので厄介です。個人的には `C:\Applications\Python\Python3.9` あたりにインストールすることを推奨しておきます。

以下の手順では Windows では `C:\Develop` 、Linux では `/Develop` フォルダが作成されているものとして、`C:\Develop` または `/Develop` フォルダ以下にインストールするようになっています。  
もし他のフォルダにインストールしたい場合は適宜読み替えてください。

以下はほとんどコマンドメモです。詳細な解説はありませんし、開発者向けです。  
Windows では PowerShell にて実行してください。<s>cmd.exe? 今すぐ窓から投げ捨てろ</s>

### Docker で構築する

あまり動作確認は取れていませんが、Docker で構築することもできます。あらかじめ、Docker と docker-compose がインストールされた環境が必要です。

ハードウェアエンコーダー (QSVEncC・NVEncC・VCEEncC) は Docker 上でも利用できます。ただし、ホスト OS が Linux である必要があるほか、あらかじめホスト OS に GPU ドライバがインストールされている必要があります。  
VCEEncC に関しても対応済みのつもりですが、手元に環境がないため、実際に動作するかどうかは検証できていません。

事前に、後述の設定ファイルの編集を行ってください。最低でも config.yaml が存在する状態にしておく必要があります。  
あとは他のソフトウェアと同様に、`docker-compose up` を実行するだけです。

### 1. pipenv のインストール

pipenv は pip の環境を仮想化してくれるツールです。  
pipenv を使えばパッケージをプロジェクトローカルにインストールできるので、依存関係の衝突などを気にする必要がありません。

```
pip install pipenv
```

### 2. KonomiTV 本体のインストール

現時点では Git で常に最新の master ブランチを取得することを推奨します。  
正式版になるまでは比較的頻繁に更新する予定です。不具合修正も含まれるため、定期的に `git pull` で最新化しておくことをおすすめします。

ただし、master ブランチは開発中の変更も多く含まれるため、安定する保証はありません。  
release ブランチにはリリース済みの変更のみが反映されています。安定性が必要であれば、適宜 `git switch release` で release ブランチに切り替えてください。

#### Windows

```
cd C:\Develop
git clone git@github.com:tsukumijima/KonomiTV.git
cd C:\Develop\KonomiTV\server
```

#### Linux

```
cd /Develop
git clone git@github.com:tsukumijima/KonomiTV.git
cd /Develop/KonomiTV/server
```

### 3. サードパーティライブラリのインストール

TVRemotePlus では Git の管理下に含めていましたが、KonomiTV ではバージョン情報のみを管理する方針としています。  
将来的にはインストーラー側で自動ダウンロード/アップデートするようにしたいところですが、現時点では手動でのダウンロードと配置が必要です。

Linux 向けの実行ファイルも同梱しています（拡張子: .elf ）。Linux (Ubuntu 20.04 LTS x64) で動作することを確認しました。   
なお、QSVEncC・NVEncC・VCEEncC を使う場合は、別途 ffmpeg (libav) ライブラリと [Intel Media Driver](https://github.com/rigaya/QSVEnc/blob/master/Install.ja.md#linux-ubuntu-2004) / [NVIDIA Graphics Driver](https://github.com/rigaya/NVEnc/blob/master/Install.ja.md#linux-ubuntu-2004) / [AMD Driver](https://github.com/rigaya/VCEEnc/blob/master/Install.ja.md#linux-ubuntu-2004) のインストールが必要です。  
VCEEncC の Linux サポートはつい最近追加されたばかりなので、安定してエンコードできるかは微妙です（環境がない…）。

[こちら](https://github.com/tsukumijima/KonomiTV/releases/download/v0.1.0/thirdparty.7z) からサードパーティライブラリをダウンロードし、`server/thirdparty/` に配置してください。展開後サイズは 600MB あるので注意。  

7z 、あるいは p7zip のコマンドライン版が利用できる場合は、コマンドラインでダウンロードと展開を行うこともできます。

```
curl -LO https://github.com/tsukumijima/KonomiTV/releases/download/v0.1.0/thirdparty.7z
7z x -y thirdparty.7z
rm thirdparty.7z
```

Windows では、`C:\Develop\KonomiTV\server\thirdparty\FFmpeg` に `ffmpeg.exe` がある状態になっていれば OK です。

Linux では、`/Develop/KonomiTV/server/thirdparty/FFmpeg` に `ffmpeg.elf` がある状態でかつ、実行ファイルが実行権限を持っている必要があります。  
以下のコマンドを実行して、実行権限を付与してください。

```
chmod 755 ./thirdparty/FFmpeg/ffmpeg.elf
chmod 755 ./thirdparty/FFmpeg/ffprobe.elf
chmod 755 ./thirdparty/QSVEncC/QSVEncC.elf
chmod 755 ./thirdparty/NVEncC/NVEncC.elf
chmod 755 ./thirdparty/tsreadex/tsreadex.elf
chmod 755 ./thirdparty/VCEEncC/VCEEncC.elf
```

このほか、Linux では FFmpeg の実行に libv4l-dev パッケージが必要です（インストールされていないと FFmpeg が実行できないみたいです）。  
お使いの環境にインストールされていない場合は、あわせてインストールしてください。

```
sudo apt install -y libv4l-dev
```

### 4. 依存パッケージのインストール

#### Windows

```
# pipenv のパッケージを直下に保存する環境変数を定義
# これをつけないと ~/.virtualenvs/ に置かれてしまい面倒
$env:PIPENV_VENV_IN_PROJECT = "true"
pipenv sync
```

#### Linux

```
# pipenv のパッケージを直下に保存する環境変数を定義
# これをつけないと ~/.local/share/virtualenvs/ に置かれてしまい面倒
export PIPENV_VENV_IN_PROJECT="true"
pipenv sync
```

### 5. データベースのアップグレード

[Aerich](https://github.com/tortoise/aerich) という Tortoise ORM のマイグレーションツールを使っています。  
データベース構造が変更される度に、以下のコマンドを実行してデータベース構造を更新する必要があります。

```
pipenv run aerich upgrade
```

よくわからないエラーが出てうまくアップグレードできないときは、一旦データベースを削除してからもう一度実行するとうまくいくことがあります。  
今のところデータベースには再生成できるデータ（チャンネル情報・番組情報）しか保存されていないので、削除することによる影響はありません。

```
rm ./data/database.sqlite
pipenv run aerich upgrade
```

### 6. 設定ファイルの編集

ここまで手順通りにやっていれば Readme.md のあるフォルダに config.example.yaml があるはずなので、同じ階層に config.yaml としてコピーします。  
設定ファイルは YAML ですが、JSON のようなスタイルで書いています。括弧がないとわかりにくいと思うので…

> JSON は YAML のサブセットなので、実は JSON は YAML として解釈可能です。

#### バックエンドの設定

Mirakurun をバックエンドとして利用する場合は、Mirakurun の HTTP URL をお使いの録画環境に合わせて編集してください。

EDCB をバックエンドとして利用する場合は、EDCB (EpgTimerNW) の TCP URL をお使いの録画環境に合わせて編集してください。  
通常、TCP URL は tcp://(EDCBのあるPCのIPアドレス):4510/ になります。接続できない際はファイアウォールの設定を確認してみてください。  
前述の通り、あらかじめ EDCB の設定で「EpgTimerNWなどからのネットワーク接続を許可する」にチェックを入れておく必要があります。

他にも設定項目がありますが、おそらく変更する必要はありません。設定を反映するにはサーバーの再起動が必要です。  

#### エンコーダーの設定

このほか、エンコーダーはソフトウェアエンコーダーの FFmpeg のほか、ハードウェアエンコーダーの QSVEncC・NVEncC・VCEEncC を選択できます。  
ハードウェアエンコーダーを選択すると、エンコードに GPU アクセラレーションを利用するため CPU の使用率を大幅に下げる事ができます。  
エンコード速度も高速になるため、お使いの PC で利用可能であれば、できるだけハードウェアエンコーダーを選択することをおすすめします。

> お使いの PC で選択したハードウェアエンコーダーが利用できない場合、その旨を伝えるエラーメッセージが表示されます。  
> まずはお使いの PC でハードウェアエンコーダーが使えるかどうか、一度試してみてください（設定ファイルの変更後はサーバーの再起動が必要です）。

> 前述のとおり、Linux 環境で QSVEncC・NVEncC・VCEEncC を利用する場合は、別途 GPU ドライバのインストールが必要です。

QSVEncC は Intel 製 CPU の内蔵グラフィックスに搭載されているハードウェアエンコード機能 (QSV) を利用するエンコーダーです。  
ここ数年に発売された内蔵グラフィックス搭載の Intel 製 CPU であれば基本的に搭載されているため、一般的な PC の大半で利用できます。  

NVEncC は Geforce などの NVIDIA 製 GPU に搭載されているハードウェアエンコード機能 (NVENC) を利用するエンコーダーです。  
高速で画質も QSV より若干いいのですが、Geforce では同時にエンコードが可能なセッション数が 3 に限定されているため、同時に 3 チャンネル以上視聴することはできません。  
同時に 4 チャンネル以上視聴しようとした場合、KonomiTV では「NVENC のエンコードセッションが不足しているため、ライブストリームを開始できません。」というエラーメッセージが表示されます。

VCEEncC は Radeon などの AMD 製 GPU に搭載されているハードウェアエンコード機能 (AMD VCE) を利用するエンコーダーです。  
QSVEncC・NVEncC に比べると安定せず、利用者も少ないため安定稼働するかは微妙です。QSVEncC・NVEncC が使えるならそちらを選択することをおすすめします。

なお、config.yaml が存在しなかったり、設定項目が誤っていると後述のサーバーの起動の時点でエラーが発生します。  
その際はエラーメッセージに従い、config.yaml の内容を確認してみてください。

### 7. サーバーの起動

FastAPI をホストする ASGI サーバーである Uvicorn を起動します。ポート 7000 にてリッスンされます。  
あらかじめ、ファイアウォールの設定でポート 7000 が開いているかどうか確認してください。

```
pipenv run serve
```

開発時などでリロードモード（コードを変更すると自動でサーバーが再起動される）で起動したいときは、`pipenv run develop` を実行してください。

Uvicorn はアプリケーションサーバーであり、KonomiTV の場合は静的ファイルの配信も兼ねています。  
静的ファイル（ SPA クライアント）は、`client/dist/` に配置されているビルド済みのファイルを配信するように設定されています。  
そのため、`npm run build` でビルドを更新したのなら、サーバー側で配信されるファイルも同時に更新されることになります。

クライアントは Vue.js で構築されており、コーディングとビルドには少なくとも Node.js が必要です。  
クライアント側のデバッグは `client/` フォルダにて `npm run develop` を実行し、ポート 7001 にてリッスンされるデバッグ用サーバーにて行っています。  
`npm run develop` を実行するとコードの変更時に自動的に差分が再ビルドされるため、毎回 `npm run build` を実行し直す必要がありません。  
API サーバーは別のポート (7000) でリッスンされているので、開発時のみ API のアクセス先を同じホストのポート 7000 に固定しています。

起動してみて、何もエラーなく `Application startup complete.` と表示されていればインストール完了です！  
ブラウザで http://localhost:7000/ にアクセスすると、KonomiTV のホーム画面が表示されるはずです。

初回起動時は Mirakurun または EDCB から7日間分の番組情報をすべて取得してデータベースに保存するため、起動に30秒以上かかります。  
次回以降は差分のみをデータベースに保存・削除するので、最高でも10秒もすれば起動します。  
番組情報の更新は今のところ15分に一度、バックグラウンドで自動的に行われます。ログにも出力されているはずです。

API ドキュメント (Swagger) は http://localhost:7000/api/docs にあります。  
リンクはいろいろありますが、ほとんどがまだ未着手のため 404 になっています。テレビのライブ視聴機能だけで見ても、まだ実装できていない箇所が多いです。  
とはいえ最低限視聴できる状態にはなっているはずです。まずは使ってみて、もしよければ感想をお聞かせください。

## License

[MIT License](License.txt)
