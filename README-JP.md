[![wakatime](https://wakatime.com/badge/user/f0147aa6-69b8-4142-806c-050d6fee026e/project/68da356a-cd0b-40cb-996c-0799e406179f.svg)](https://wakatime.com/badge/user/f0147aa6-69b8-4142-806c-050d6fee026e/project/68da356a-cd0b-40cb-996c-0799e406179f)
# 原神音楽とスカイ音楽の夜間へようこそ

このリポジトリには、原神とSky 星を紡ぐ子どもたちの2つの音楽アプリのコードが含まれています。公開されたアプリは[specy.app](https://specy.app)で見ることができます。
![Composer](docs/assets/composer.webp)
![Player](docs/assets/player.webp)


# 翻訳の手助けを探しています
アプリを他の言語に翻訳する手助けをしてくれる人を探しています。興味がある方は、[こちら](https://github.com/Specy/genshin-music/discussions/52)の翻訳ディスカッションを見てください。


# 開発モードでの実行方法
コンピュータにnode.jsをインストールする必要があります。[こちら](https://nodejs.org/en/)から入手できます。
次に、リポジトリをフォルダにクローンし、`npm i`で依存関係をインストールします。インストールが完了したら、`npm run start`で開発サーバーを実行します。

特定のアプリとして実行し、特定のアプリとしてビルドするという、役に立つかもしれないスクリプトがあと4つあります。

`npm run dev:sky`または`npm run dev:genshin`を実行すると、特定のゲームのWebアプリが実行され、アセットが入れ替わります。

# デスクトップアプリを開発モードで実行する方法
まず、開発サーバーを起動する必要があります。開発モードでの実行方法については[こちら](#how-to-run-in-dev-mode)を参照してください。

その後、`npm run start-tauri`を実行できます。
# ビルド方法

`npm run build:genshin`および`npm run build:sky`スクリプトを使用して、正しいアプリをビルドできます。または、`npm run build:all`を使用して両方をビルドします。

# デスクトップアプリのビルド方法
デスクトップアプリはあまり開発されていないため、使用しないことをお勧めします。主に概念実証としてのものであり、代わりにWebアプリを使用してください。

アプリは、サンドボックス化されたWebビューであるtauriを使用してデスクトップバンドルを作成します。`npm run build-tauri:genshin`、`npm run build-tauri:sky`、`npm run build-tauri:all`を使用してビルドできます。設定は、変更履歴を許可するように事前に作成されています。署名キーがない場合、ビルドは失敗します。変更履歴なしでビルドしたい場合は、`src-tauri/tauri.conf.json`に移動し、`updater`をfalseに設定してください。

# ドキュメント
アプリのドキュメントは[こちら](https://github.com/Specy/genshin-music/wiki)で見つけることができます。
詳細ではありませんが、フォーマットの理解に役立つかもしれません。


# 貢献方法

作業したい内容を記載した新しいIssueを作成し、私がそのIssueを割り当てるのを待ってください。これにより、修正または追加するのが有効なIssueかどうかをコミュニケーションできます。


# README.MD

<a href="./README.md">英語</a> | <a href="./README-ZH.md">簡体字中国語</a> | <a href="./README-JP.md">日本語</a> | <a href="./README-TR.md">トルコ語</a>
