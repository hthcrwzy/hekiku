export default function ReaderLayout({
  // workTitle: titleOfWork,
  children,
}: {
  // workTitle: String;
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <h1>{titleOfWork}</h1> */}
      {children}
    </section>
  );
}
