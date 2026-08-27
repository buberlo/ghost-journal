/**
 * Minimal Next.js configuration for Ghost Journal.
 *
 * The app uses better-sqlite3 in Node.js route handlers. Keeping that native
 * module external on the server avoids webpack trying to bundle the binary.
 */
const nextConfig = {
  reactStrictMode: true,

  // Keep local development and CI builds fast and unblocked.
  // Linting and type-checking can still be run explicitly with `next lint` and `tsc`.
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("better-sqlite3");
    }

    return config;
  },
};

export default nextConfig;