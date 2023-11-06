import "@mantine/core/styles.css";
import { Container, MantineProvider, SimpleGrid, Stack } from "@mantine/core";
import { theme } from "./theme";
import Header from "./Header";
import InitialPokemon from "./InitialPokemon";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <Container>
        <Stack gap={'xl'}>
          <Header />
          <SimpleGrid cols={3}>
            <InitialPokemon id={1} />
            <InitialPokemon id={20} />
            <InitialPokemon id={40} />
            <InitialPokemon id={60} />
            <InitialPokemon id={80} />
            <InitialPokemon id={100} />
          </SimpleGrid>
        </Stack>
      </Container>
    </MantineProvider>
  )
}
