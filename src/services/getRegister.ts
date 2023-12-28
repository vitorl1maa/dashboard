const API = "https://inspell.com.br/avaliacao/indicadores.php";
const API_TOKEN = "admin";
const API_KEY = "123456";

export async function getRegister() {
  const res = await fetch(`${API}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${API_TOKEN}:${API_KEY}`)}`,
    },
  });

  return res.json();
}
