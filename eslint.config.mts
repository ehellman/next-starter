import type { Linter } from "eslint";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from '@next/eslint-plugin-next';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import testingLibrary from 'eslint-plugin-testing-library';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})


export default [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      nextPlugin,
      jestDom, 
      jsxA11y, 
      testingLibrary, 
      playwright
    },
  }
] satisfies Linter.Config[];

