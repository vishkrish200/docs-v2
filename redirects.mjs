// @ts-check

/**
 * @type {import('next').NextConfig['redirects']}
 */
export const redirects = async () => {
	return [
		{
			source: "/react/react.thirdwebprovider",
			destination: "/react/thirdweb-provider",
			permanent: true,
		},
	];
};
