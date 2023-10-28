import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://hasibul.me${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/270076275_3315867678644637_904333430057222282_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3ke_qt277-EAX-z0N1d&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDUaz2-6FVx_c5O05JkZjodu5y7KI49EwKEKRWKoq9hgg&oe=654171BA" property="og:image" />
        <meta content={`https://hasibul.me${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@SkinnySiju" name="twitter:site" />
        <meta content="@SkinnySiju" name="twitter:creator" />
        <meta content="https://hasibul.me" name="twitter:url" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/270076275_3315867678644637_904333430057222282_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3ke_qt277-EAX-z0N1d&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDUaz2-6FVx_c5O05JkZjodu5y7KI49EwKEKRWKoq9hgg&oe=654171BA" name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
