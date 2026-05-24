const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_olOpQ5by5lYy93IXO5RCzw_Oex3xtTW";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Screens
const entryScreen = document.getElementById("entryScreen");
const signupScreen = document.getElementById("signupScreen");
const homePage = document.getElementById("homePage");

// Buttons
document.getElementById("openSignup").onclick = () => {
  entryScreen.classList.add("hidden");
  signupScreen.classList.remove("hidden");
};

document.getElementById("skipBtn").onclick = () => {
  entryScreen.classList.add("hidden");
  homePage.classList.remove("hidden");
};

document.getElementById("submitBtn").onclick = async () => {

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

  alert("Success!");

  signupScreen.classList.add("hidden");
  homePage.classList.remove("hidden");
};
