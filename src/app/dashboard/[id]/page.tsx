export default async function Page({ params }: { params: { id: string } }) {
  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/users/${params.id}`);
    const data = await response.json();
    return data;
  };

  return (
    <main>
      <pre>{JSON.stringify(await fetchData(), null, 2)}</pre>
    </main>
  );
}
