import { useState } from "react";
import { Container, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import { TransactionForm } from "~/components/transactions/TransactionForm";
import { TransactionList } from "~/components/transactions/TransactionList";

export type Transaction = {
  id: string;
  amount: number;
  member: string;
  date: Date;
};

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (amount: number, member: string) => {
    const newTransaction: Transaction = {
      id: nanoid(),
      amount,
      member,
      date: new Date(),
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xl">
        Transactions
      </Title>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </Container>
  );
}
