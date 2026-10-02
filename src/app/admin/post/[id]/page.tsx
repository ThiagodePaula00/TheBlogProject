type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function adminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  return <div className='py-16 text-6xl'>AdminPostIdPage {id}</div>;
}