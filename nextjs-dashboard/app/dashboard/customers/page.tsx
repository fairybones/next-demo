import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: customers } = await supabase.from("customers").select();
  return (
    <div>
      <p>Customers</p>
      <pre>{JSON.stringify(customers, null, 2)}</pre>
    </div>
  );
}
