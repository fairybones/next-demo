import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: invoices } = await supabase.from("invoices").select();
  return (
    <div>
      <p>Invoices</p>
      <pre>{JSON.stringify(invoices, null, 2)}</pre>
    </div>
  );
}
