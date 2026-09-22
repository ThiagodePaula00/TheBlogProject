export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <h1>Aqui vem o layout da about</h1>
      { children }
    </>
  );
}