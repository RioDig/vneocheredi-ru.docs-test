import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import StepResult from "@site/src/components/StepResult";
import ImageContainer from "@site/src/components/ImageContainer";
import DocCardList from "@site/src/theme/DocCardList";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  StepResult,
  ImageContainer,
  DocCardList,
};