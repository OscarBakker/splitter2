import { useState } from "react";
import { Button, NumberInput, Select, Stack } from "@mantine/core";

const MEMBERS = ["Oscar", "Carlijn", "Bo"];

type TransactionFormProps = {
  onSubmit: (amount: number, member: string) => void;
};

export function TransactionForm({ onSubmit }: TransactionFormProps) {
  const [amount, setAmount] = useState<number | string>("");
  const [member, setMember] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && member) {
      onSubmit(Number(amount), member);
      setAmount("");
      setMember(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <NumberInput
          label="Amount"
          placeholder="Enter amount"
          value={amount}
          onChange={setAmount}
          required
          min={0}
          prefix="€"
        />
        <Select
          label="Group Member"
          placeholder="Select member"
          data={MEMBERS}
          value={member}
          onChange={setMember}
          required
        />
        <Button type="submit" fullWidth>
          Add Transaction
        </Button>
      </Stack>
    </form>
  );
}
