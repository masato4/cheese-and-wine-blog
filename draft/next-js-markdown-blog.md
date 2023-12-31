---
title: 'Next.jsでmarkdownブログを構築'
date: '2022-07-13'
description: 'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
image: nextjs.png
categories: ['react']
---
## 目次

Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。

## Next.js の準備

### プロジェクトの作成


npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

[hello]

[comment]現在Teamsで障害が発生しています[/comment]

//略
```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```
//略
![Next.jsのWelcomeページ](http://localhost:3000/nextjs-welcome.png)

[記事一覧](/)
