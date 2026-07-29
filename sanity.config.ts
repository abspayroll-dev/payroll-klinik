import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  basePath: '/',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1bl2tj8i',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  name: 'payroll-klinik',
  title: 'Payroll Klinik CMS',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});