import React from 'react';
import {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';
import '../styles/main.css';
import Head from 'next/head';

export default function App({Component, pageProps}: AppProps) {
	return (
		<div className="px-4 md:px-16 py-24 max-w-4xl">
			<Head>
				<title>sundei • blog</title>
			</Head>

			<Component {...pageProps} />
		</div>
	);
}
