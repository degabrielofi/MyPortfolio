import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl({
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.guebly.com.br' },
      { protocol: 'https', hostname: '**.sentrion.com.br' },
    ],
  },
});
