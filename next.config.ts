import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/services/frameless-shower-screens", destination: "/services/shower-boxes", permanent: true },
      { source: "/services/sliding-shower-screens", destination: "/services/shower-boxes", permanent: true },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
