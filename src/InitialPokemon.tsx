import { Card, Stack, Text } from "@mantine/core";

import useSWR from "swr";

const mock2sFetch = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const jsonData = await res.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jsonData)
    }, 2000);
  })
}

export default function InitialPokemon({ id }: { id: number }) {
  const { data } = useSWR(`example-key-${id}`, async () => {
    const jsonData = await mock2sFetch(id);
    return jsonData as { name: string; sprites: { front_default: string } }
  })
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <Card key={data?.name} shadow="md" withBorder>
      <Stack justify="center" align="center">
        <img
          alt={data?.name}
          width={120}
          height={120}
          src={data?.sprites.front_default}
        />
        <Text>{data?.name}</Text>
      </Stack>
    </Card>
  );
}
