export const metadata = {
  title: "Rubric Creator",
  description: "A tool for generating rubrics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
