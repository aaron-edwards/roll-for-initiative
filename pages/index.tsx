import { AppShell, Header, Title } from '@mantine/core';

export default function Home() {
  return (
    <AppShell
      header={(
        <Header height={70} p="md">
          <Title>Roll for Initiative</Title>
        </Header>
)}
    >
      Hello
    </AppShell>
  );
}
