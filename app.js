const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_olOpQ5by5lYy93IXO5RCzw_Oex3xtTW";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// 👉 Screens
const authScreen = document.getElementById("authScreen");
const homePage = document.getElementById("homePage");

// 👉 Skip Button
document.getElementById("skipBtn").addEventListener("click", () => {
  authScreen.style.display = "none";
  homePage.classList.remove("hidden");
});

// 👉 Signup Button
document.getElementById("signupBtn").addEventListener("click", async () => {

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;

  if(!name || !mobile || !email){
    alert("Fill all fields");
    return;
  }

  const { error } = await supabaseClient
    .from("users")
    .insert([{ name, mobile, email }]);

  if(error){
    alert("Error: " + error.message);
    return;
  }

  alert("Signup Success!");

  authScreen.style.display = "none";
  homePage.classList.remove("hidden");
});
