/* eslint-disable react/no-danger */
import { TypographyStylesProvider } from "@mantine/core";

export default function Description({ des }) {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: des }} />
    </TypographyStylesProvider>
  );
}
