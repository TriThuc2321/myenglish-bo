import { Button, Input } from '@heroui/react';

import ThemeSwitch from '@/components/layouts/switchTheme';

export default function Home() {
  return (
    <div>
      <Button>My Button</Button>
      <Input placeholder="Hello" />
      <ThemeSwitch />
    </div>
  );
}
