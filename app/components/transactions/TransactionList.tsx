import { Paper, Text, Stack } from "@mantine/core";
import type { Transaction } from "~/routes/transactions";

type TransactionListProps = {
  transactions: Transaction[];
};

export function TransactionList({ transactions }: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <Text c="dimmed" ta="center" mt="xl">
        No transactions yet
      </Text>
    );
  }

  return (
    <Stack gap="md" mt="xl">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Stack>
  );
}

function TransactionItem({ transaction }: { transaction: Transaction }) {
  return (
    <Paper shadow="xs" p="md" withBorder>
      <div className="flex justify-between items-center">
        <div>
          <Text size="lg" fw={500}>
            €{transaction.amount.toFixed(2)}
          </Text>
          <Text size="sm" c="dimmed">
            {transaction.member}
          </Text>
        </div>
        <Text size="sm" c="dimmed">
          {transaction.date.toLocaleDateString()}
        </Text>
      </div>
    </Paper>
  );
}
