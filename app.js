const SUPABASE_URL = "https://szpnmkwdgklglkbsfnah.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_olOpQ5by5lYy93IXO5RCzw_Oex3xtTW";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

document
  .getElementById("registerBtn")
  .addEventListener("click", async () => {

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    const { error } = await supabaseClient
      .from("users")
      .insert([
        {
          name: name,
          mobile: mobile,
          email: email
        }
      ]);

    if (error) {
      alert("डेटा सेव नहीं हुआ");
      console.log(error);
    } else {
      alert("रजिस्ट्रेशन सफल हुआ");
    }
});
